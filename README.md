# Helios 3D — Interactive Solar System Explorer

An AI-assisted, browser-based 3D Solar System visualization project. It uses Three.js for the 3D scene and Tailwind CSS for much of the interface styling.

## Project structure

```text
helios-3d-project/
├── index.html       # Page structure and external library links
├── css/
│   └── styles.css   # Custom CSS styles
├── js/
│   ├── data.js      # Celestial-body, moon, and mission data
│   └── main.js      # Three.js scene, UI interactions, and simulation
├── README.md
└── .gitignore
```

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Start `index.html` with the **Live Server** extension, or open it in a modern browser.
4. Keep an internet connection available because the current version loads Three.js, OrbitControls, Tailwind CSS, Google Fonts, and Font Awesome from CDNs.

If you open the page directly and browser restrictions cause problems, use Live Server.

## Attribution and AI-use disclosure

This project was developed with substantial assistance from AI tools. The original implementation was AI-generated/AI-assisted and then organized into separate files for easier maintenance and learning. I do not present the initial generated implementation as entirely my own original work.

When describing this project on a resume, portfolio, or internship application, be accurate about which parts you personally reviewed, tested, modified, and understand. If you make meaningful changes, document them in your Git history and describe those contributions specifically.

## Current organization

- `index.html` contains the page markup and external library imports.
- `css/styles.css` contains the custom styles previously embedded in the HTML.
- `js/data.js` contains the `CELESTIAL_DATA` array.
- `js/main.js` contains the remaining simulation logic and UI behavior.

This is a file-organization refactor of the provided single-file version. It is not a claim that every scientific value or behavior has been independently verified.

## Technology

- HTML5
- CSS
- JavaScript
- Three.js
- Tailwind CSS (CDN)
- Google Fonts
- Font Awesome
