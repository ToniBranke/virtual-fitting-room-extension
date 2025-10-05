# Virtual Fitting Room Browser Extension

## Project Goal

This project is a browser extension that allows users to display a model of their own body when online shopping and to "transfer" clothing items from shop websites onto this model. The aim is to give users a more realistic idea of how clothes might look on their own body—and to learn JavaScript and web development in the process.

## Motivation

- Online shopping makes it difficult to judge how clothes will fit and look on your own body.
- Virtual fitting rooms make purchase decisions easier and can reduce returns.
- The project serves as a learning experience for modern web technologies, browser extensions, and (optionally) machine learning.

## Features (Minimum Viable Product)

- Display a custom body model (2D or 3D) in the extension popup.
- Extract product images (clothing items) from shop pages.
- Button to transfer the displayed clothing item onto the model.
- Simple user interface (popup).

## Optional Enhancements

- Personalize the body model (size, shape, skin color).
- Machine learning for automatic clothing detection.
- Support for multiple shops and dedicated adjustments for major platforms.
- Save and manage your own clothing items.

## Technical Implementation

- **Browser Extension:** Manifest V3 (compatible with Chrome/Edge/Firefox)
- **Frontend/Popup:** HTML, CSS, JavaScript
- **Body Model:** SVG (2D) or Three.js (3D)
- **Content Script:** Extraction of product images from shop pages
- **Communication:** Messaging between popup and content script
- **(Optional) Backend/API:** For advanced features or machine learning

## Project Structure

- `manifest.json` – Central configuration file for the extension
- `popup.html`, `popup.js`, `popup.css` – User interface and logic
- `content.js` – Script for extracting data from shop pages
- `README.md` – Project description and documentation

## Development & Installation

1. Clone the repository.
2. In your browser (e.g., Chrome), go to `chrome://extensions` and enable Developer Mode.
3. Click "Load unpacked" and select the project folder.

## License

This project is licensed under a modified MIT License:

- The code may be used, modified, and shared freely as long as attribution to the original author (Toni Branke) is given.
- Commercial use of **unmodified** copies is **not allowed**.
- Commercial use of **modified** versions is permitted, provided attribution remains.

See [LICENSE](LICENSE) for details.
