# Title Tweaker Pro

A lightweight and customizable Chrome extension for dynamically modifying webpage titles and favicons using rule-based matching and regular expressions.

Title Tweaker Pro helps users organize browser tabs, distinguish similar websites, and personalize their browsing experience with flexible per-site customization.

---

## Features

- ✨ Dynamically modify webpage titles
- 🎨 Replace website favicons in real time
- 🔍 Regular expression (RegExp) URL matching
- ⚙️ Per-site customization rules
- 🚀 Lightweight and fast runtime
- 🔒 Privacy-friendly — no tracking or telemetry
- 🧩 Manifest V3 compatible

---

## Use Cases

### Better Tab Organization
Rename tabs to make them easier to identify when working with multiple websites.

### Workspace Productivity
Customize titles for internal dashboards, development environments, or admin panels.

### Visual Identification
Replace favicons to quickly distinguish between similar tabs.

### Developer Workflows
Create custom rules for staging, production, local development, and testing environments.

---

## Project Structure

```text
Title Tweaker Pro/
├── background.js
├── content.js
├── manifest.json
├── popup.html
├── popup.js
├── options.html
├── options.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── layui.css
└── layui.js
```

---

## Installation

### Load as Unpacked Extension

1. Clone or download this repository
2. Open Chrome and navigate to:

```text
chrome://extensions/
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project directory

---

## Usage

1. Open the extension popup
2. Create a matching rule
3. Configure:
   - URL matching pattern
   - Replacement title
   - Custom favicon URL (optional)
4. Save the rule
5. Refresh the target webpage

The extension will automatically apply matching rules in real time.

---

## Regular Expression Examples

### Match GitHub

```regex
^https://github\.com/.*
```

### Match Local Development

```regex
localhost|127\.0\.0\.1
```

### Match Admin Pages

```regex
/admin/
```

---

## Permissions

This extension requires limited browser permissions to:

- Access active tabs
- Modify webpage titles
- Replace favicons dynamically
- Store local configuration rules

No user data is collected or transmitted.

---

## Privacy

Title Tweaker Pro operates entirely locally in the browser.

- No analytics
- No remote tracking
- No telemetry
- No cloud synchronization

All configuration data is stored locally using Chrome extension storage APIs.

---

## Development

### Requirements

- Google Chrome
- Chrome Extension Developer Mode

### Local Development

After modifying source files:

1. Open `chrome://extensions/`
2. Click **Reload** on the extension card
3. Refresh the target webpage

---

## Roadmap

Planned features:

- Rule import/export
- Rule priority system
- Dark mode UI
- Rule synchronization
- Advanced favicon generation
- Workspace presets

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to open issues or submit pull requests to improve the project.

---

## Screenshots

You can add screenshots here after publishing the extension.

```text
/docs/screenshots/
```

---

## Author

Developed and maintained by the Title Tweaker Pro project contributors.

