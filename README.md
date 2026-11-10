# csci-39548-proj1

A 10-page website about the solar system, made with just HTML, CSS, and JavaScript (no frameworks or libraries).

## How to run

Open `src/index.html` in a browser. The pictures load from Wikimedia, so you need internet.

## Layout

```
src/
├── index.html      home page
├── sun.html
├── moon.html
├── mercury.html
├── venus.html
├── earth.html
├── mars.html
├── jupiter.html
├── saturn.html
├── uranus.html
├── css/
│   ├── style.css   shared styles (nav bar, layout, pop-ups)
│   └── <page>.css  one per page: background, heading font and color
└── js/
    ├── image-popups.js  shared: click a picture to go to its source
    └── <page>.js        one per page: that page's interactive feature
```

Every page has the same setup: a nav bar linking to all 10 pages, a title, two pictures, at least 5 facts, and an interactive feature.

## Interactive features

| Page | Feature |
|---|---|
| Home | Button that shows a random space fact |
| Sun | Pop-up with fun facts |
| Moon | Slider that goes through the Moon's phases |
| Mercury | Switch between day and night temperature |
| Venus | Read more / read less section |
| Earth | One-question quiz |
| Mars | Phobos and Deimos orbiting Mars, with Start/Stop |
| Jupiter | What would you weigh on Jupiter? calculator |
| Saturn | Slider that tilts Saturn's rings |
| Uranus | How old would you be on Uranus? calculator |

On every page, clicking a picture shows a few joke messages in a pop-up and then takes you to where the image came from.

## Images

All images are from Wikimedia Commons (mostly NASA). Each picture links to its source page.
