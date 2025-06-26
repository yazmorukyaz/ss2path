# Contributing to Claude Screenshot Path

Thank you for your interest in contributing to Claude Screenshot Path! We welcome contributions from everyone.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yazmorukyaz/ss2path.git
   cd ss2path
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Open in VS Code**:
   ```bash
   code .
   ```
5. **Start developing**: Press `F5` to launch Extension Development Host

## 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

### How to Submit a Bug Report

1. Use the [bug report template](https://github.com/your-username/claude-screenshot-path/issues/new?assignees=&labels=bug&template=bug_report.md)
2. Include:
   - **Clear description** of the bug
   - **Steps to reproduce** the behavior
   - **Expected behavior**
   - **Screenshots** if applicable
   - **Environment details** (VS Code version, OS, extension version)
   - **Console logs** from VS Code Developer Console

## 💡 Suggesting Features

Feature requests are welcome! Please use the [feature request template](https://github.com/your-username/claude-screenshot-path/issues/new?assignees=&labels=enhancement&template=feature_request.md).

## 🔧 Development Process

### Setting Up Development Environment

1. **Prerequisites**:
   - Node.js (v16 or higher)
   - VS Code
   - Git

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the extension**:
   ```bash
   npm run compile
   ```

4. **Run tests** (when available):
   ```bash
   npm test
   ```

### Making Changes

1. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   - Press `F5` in VS Code to launch Extension Development Host
   - Test all functionality manually
   - Ensure no regressions

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### Commit Message Format

We follow conventional commits. Format: `type: description`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
- `feat: add support for Windows clipboard`
- `fix: resolve file watcher memory leak`
- `docs: update installation instructions`

## 📝 Code Style

- Use **TypeScript** for all code
- Follow **existing code style** and patterns
- Use **meaningful variable names**
- Add **comments** for complex logic
- Keep functions **small and focused**

### TypeScript Guidelines

- Enable strict mode
- Use proper typing (avoid `any`)
- Use interfaces for object shapes
- Use enums for constants

## 🧪 Testing

- **Manual testing** is currently our primary method
- Test on macOS (primary target platform)
- Test with different screenshot applications
- Verify clipboard functionality works correctly

### Testing Checklist

- [ ] Extension activates without errors
- [ ] File watcher detects new screenshots
- [ ] Clipboard receives correct file path
- [ ] Configuration changes work properly
- [ ] Toggle command functions correctly
- [ ] No memory leaks during extended use

## 📦 Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** on your local environment
3. **Create pull request** with:
   - Clear title and description
   - Reference any related issues
   - Include screenshots/videos if UI changes
   - List testing performed

4. **Address review feedback** promptly
5. **Squash commits** if requested

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested on macOS
- [ ] Manual testing performed
- [ ] No regressions found

## Screenshots/Videos
(if applicable)

## Related Issues
Fixes #123
```

## 🏷️ Release Process

Releases are handled by maintainers:

1. Version bump in `package.json`
2. Update `CHANGELOG.md`
3. Create GitHub release
4. Publish to VS Code Marketplace

## 📚 Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and experiences
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## ❓ Questions?

- Open an [issue](https://github.com/your-username/claude-screenshot-path/issues) for questions
- Check existing issues and discussions first

Thank you for contributing to Claude Screenshot Path! 🎉