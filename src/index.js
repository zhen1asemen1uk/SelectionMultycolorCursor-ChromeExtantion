// document.addEventListener("selectionchange", changeSelectionColor);

document.addEventListener("mousedown", changeSelectionColor);

function randomHex() {
    return `#${((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, `0`)}`;
}

function changeSelectionColor(e) {
    let css = ` 
    *::selection {
        color: ${randomHex()};
        background: ${randomHex()};
     }
     `;

    const style = document.createElement("style");

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("head")[0].appendChild(style);
}
