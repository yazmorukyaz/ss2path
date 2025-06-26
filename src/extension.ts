import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

let fileWatcher: fs.FSWatcher | undefined;
let isEnabled = true;

export function activate(context: vscode.ExtensionContext) {
    console.log('Claude Screenshot Path extension activated');
    
    const config = vscode.workspace.getConfiguration('claudeScreenshotPath');
    isEnabled = config.get('enabled', true);
    
    if (isEnabled) {
        startWatching();
    }
    
    const toggleCommand = vscode.commands.registerCommand('claudeScreenshotPath.toggle', () => {
        isEnabled = !isEnabled;
        if (isEnabled) {
            startWatching();
            vscode.window.showInformationMessage('Screenshot monitoring enabled');
        } else {
            stopWatching();
            vscode.window.showInformationMessage('Screenshot monitoring disabled');
        }
    });
    
    context.subscriptions.push(toggleCommand);
    
    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('claudeScreenshotPath')) {
            if (isEnabled) {
                stopWatching();
                startWatching();
            }
        }
    });
}

function startWatching() {
    const config = vscode.workspace.getConfiguration('claudeScreenshotPath');
    const watchFolder = expandPath(config.get('watchFolder', '~/Desktop'));
    const filePatterns = config.get('filePatterns', ['Screenshot*.png', 'Screen Shot*.png', 'CleanShot*.png']);
    
    if (!fs.existsSync(watchFolder)) {
        vscode.window.showErrorMessage(`Watch folder does not exist: ${watchFolder}`);
        return;
    }
    
    console.log(`Starting to watch folder: ${watchFolder}`);
    
    fileWatcher = fs.watch(watchFolder, { persistent: true }, (eventType, filename) => {
        if (eventType === 'rename' && filename) {
            const fullPath = path.join(watchFolder, filename);
            
            if (fs.existsSync(fullPath) && isScreenshotFile(filename, filePatterns)) {
                setTimeout(() => {
                    copyPathToClipboard(fullPath);
                }, 100);
            }
        }
    });
}

function stopWatching() {
    if (fileWatcher) {
        fileWatcher.close();
        fileWatcher = undefined;
        console.log('Stopped watching for screenshots');
    }
}

function isScreenshotFile(filename: string, patterns: string[]): boolean {
    return patterns.some(pattern => {
        const regex = new RegExp(pattern.replace(/\*/g, '.*'), 'i');
        return regex.test(filename);
    });
}

function copyPathToClipboard(filePath: string) {
    exec(`echo "${filePath}" | pbcopy`, (error) => {
        if (error) {
            console.error('Failed to copy path to clipboard:', error);
            vscode.window.showErrorMessage('Failed to copy screenshot path to clipboard');
        } else {
            console.log(`Copied to clipboard: ${filePath}`);
            vscode.window.showInformationMessage(`Screenshot path copied: ${path.basename(filePath)}`);
        }
    });
}

function expandPath(inputPath: string): string {
    if (inputPath.startsWith('~/')) {
        const homeDir = process.env.HOME || process.env.USERPROFILE;
        return path.join(homeDir || '', inputPath.slice(2));
    }
    return inputPath;
}

export function deactivate() {
    stopWatching();
}