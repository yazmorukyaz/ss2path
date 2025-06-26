# Claude Screenshot Path

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/items?itemName=undefined_publisher.claude-screenshot-path)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/yazmorukyaz/ss2path)](https://github.com/yazmorukyaz/ss2path/issues)

> Streamline your Claude Code workflow by automatically copying screenshot file paths to your clipboard

A VS Code extension that monitors your screenshot folder and automatically copies new screenshot file paths to your clipboard, making it effortless to share images with Claude Code.

## 🚀 Features

- **Automatic Detection**: Monitors your Desktop (or any configured folder) for new screenshot files
- **Instant Clipboard**: Automatically copies the full file path to clipboard when a screenshot is detected
- **Smart Patterns**: Configurable file patterns to match different screenshot naming conventions
- **macOS Optimized**: Works seamlessly with macOS screenshot formats (Screenshot, Screen Shot, CleanShot, etc.)
- **Zero Friction**: No manual file selection needed - just take a screenshot and paste!

## 📦 Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Claude Screenshot Path"
4. Click Install

### From VSIX
1. Download the latest `.vsix` file from [Releases](https://github.com/yazmorukyaz/ss2path/releases)
2. Open VS Code
3. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
4. Type "Extensions: Install from VSIX"
5. Select the downloaded `.vsix` file

## ⚙️ Configuration

Open VS Code settings (`Cmd+,` or `Ctrl+,`) and search for "Claude Screenshot Path":

| Setting | Description | Default |
|---------|-------------|---------|
| `claudeScreenshotPath.watchFolder` | Folder to monitor for screenshots | `~/Desktop` |
| `claudeScreenshotPath.filePatterns` | File patterns to match | `["Screenshot*.png", "Screen Shot*.png", "CleanShot*.png"]` |
| `claudeScreenshotPath.enabled` | Enable/disable monitoring | `true` |

## 🎯 Usage

1. **Take a screenshot** using any method:
   - macOS: `Cmd+Shift+3` (full screen) or `Cmd+Shift+4` (selection)
   - Third-party tools: CleanShot X, Skitch, etc.

2. **Screenshot is automatically detected** and its path is copied to clipboard

3. **Paste in Claude Code**: Simply press `Cmd+V` to paste the file path

4. **Done!** Claude Code can now access your screenshot

## 🎮 Commands

- **Toggle Screenshot Monitoring**: Enable/disable the file watcher
  - Command Palette: `Claude Screenshot Path: Toggle Screenshot Monitoring`

## 🔧 How It Works

The extension uses Node.js `fs.watch()` to monitor file system changes in your configured folder. When a new file matching the screenshot patterns is detected, it uses `pbcopy` (macOS clipboard utility) to copy the full file path to your system clipboard.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yazmorukyaz/ss2path.git
   cd ss2path
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Open in VS Code:
   ```bash
   code .
   ```

4. Press `F5` to launch Extension Development Host

5. Make your changes and test

6. Submit a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

- [Report a Bug](https://github.com/yazmorukyaz/ss2path/issues/new?assignees=&labels=bug&template=bug_report.md)
- [Request a Feature](https://github.com/yazmorukyaz/ss2path/issues/new?assignees=&labels=enhancement&template=feature_request.md)
- [View All Issues](https://github.com/yazmorukyaz/ss2path/issues)

## 🌟 Show Your Support

If this extension helped you, please consider:
- ⭐ Starring the repository
- 📝 Writing a review on the VS Code Marketplace
- 🐛 Reporting bugs or suggesting features
- 💝 Contributing to the project

## 📊 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

---

**Made with ❤️ for the Claude Code community**