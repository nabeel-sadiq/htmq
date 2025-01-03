const clickElements = document.querySelectorAll("[q-click]");
let head = document.querySelector("head");

if (head) {
    let style = document.createElement("style");
    style.innerHTML += `
.hidden-for-q-click {
    display: none;
}
`;
    head.appendChild(style);
} else {
    console.error("A head tag is necessary for making an [q-click] element.");
}

clickElements.forEach((element) => {
    const attrValue = element.getAttribute("q-click");
    attrArray = attrValue.split(" / ");
    const boxSelector = attrArray[0];

    const box = document.querySelector(boxSelector);
    box.classList.add("hidden-for-q-click");

    const ogText = element.textContent;
    let newText;
    if (attrArray[1]) {
        newText = attrArray[1];
    } else {
        newText = "";
    }

    element.addEventListener("click", () => {
        box.classList.toggle("hidden-for-q-click");
        if (newText !== "") {
            if (element.textContent === ogText) {
                element.textContent = newText;
            } else {
                element.textContent = ogText;
            }
        }
    });
});
