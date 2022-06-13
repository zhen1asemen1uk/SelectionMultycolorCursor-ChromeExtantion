"use strict";

//create style sheet
const style = document.createElement("style");

//add style sheet
document.head.appendChild(style);

const styleSheet = style.sheet;

//get elements for changeColors
const textColor = document.querySelector("#textColor");
const selectColor = document.querySelector("#selectColor");

//get elements for mode
const radio_colorMode = document.querySelectorAll('input[name="colorMode"]');

//add event listeners for radio buttons
radio_colorMode.forEach((button) => {
    if (button.checked) {
        changeColorMode(button.value);
    }

    button.addEventListener("click", (e) => {
        changeColorMode(e.target.value);
    });
});

function changeColorMode(mod) {
    switch (mod) {
        case "lsd":
            removeAllEventListeners();

            document.addEventListener("selectionchange", () =>
                changeColors(mod)
            );
            break;

        case "randomOne":
            removeAllEventListeners();

            document.addEventListener("mousedown", () => changeColors(mod));
            break;
        case "monochrome":
            removeAllEventListeners();

            document.addEventListener("mousedown", () => changeColors(mod));
            break;
        case "ukraine":
            removeAllEventListeners();

            document.addEventListener("mousedown", () => changeColors(mod));
            break;
        case "chooseCustom":
            removeAllEventListeners();

            document.addEventListener("mousedown", () => changeColors(mod));
            break;

        default:
            removeAllEventListeners();
            break;
    }
}

//for color generation
function randomHex() {
    return `#${((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, `0`)}`;
}

//remove all event listeners
function removeAllEventListeners() {
    document.removeEventListener("selectionchange", changeColors);
    document.removeEventListener("mousedown", changeColors);
    document.removeEventListener("mousedown", () => changeColors(mod));

    if (styleSheet.cssRules.length > 0) {
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            styleSheet.deleteRule(i);
        }
    }
}

//mode functions
function changeColors(mod) {
    let css = ``;

    switch (mod) {
        case "lsd":
            css = ` *::selection {
            color: ${randomHex()};
            background: ${randomHex()};
        }`;

            break;

        case "randomOne":
            css = ` *::selection {
            color: ${randomHex()}; 
            background: ${randomHex()};
        }`;

            break;

        case "monochrome":
            css = ` *::selection {
            color: #FFFFFF !important; 
            background: #000000 !important;
            }`;

            break;

        case "ukraine":
            css = ` *::selection {
            color: #FFFF00 !important; 
            background: #0000FF !important;
            }`;

            break;

        case "chooseCustom":
            css = ` *::selection {
            color: ${textColor.value}; 
            background: ${selectColor.value};
        }`;
            break;

        default:
            break;
    }

    if (css) {
        styleSheet?.cssRules?.length > 0 ? styleSheet?.deleteRule(0) : null;
        styleSheet?.insertRule(css, 0);
    }
}
