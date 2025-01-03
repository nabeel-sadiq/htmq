const clickElements = document.querySelectorAll("[q-hover]");
let head = document.querySelector("head");

if (head) {
    let style = document.createElement("style");
    style.innerHTML += `
.hidden-for-q-hover {
    display: none;
}
`;
    head.appendChild(style);
} else {
    console.error("A head tag is necessary for making an [q-hover] element.");
}

clickElements.forEach((element) => {
    const attrValue = element.getAttribute("q-hover");
    attrArray = attrValue.split(" / ");
    const boxSelector = attrArray[0];

    const box = document.querySelector(boxSelector);
    box.classList.add("hidden-for-q-hover");

    const ogText = element.textContent;
    let newText;
    if (attrArray[1]) {
        newText = attrArray[1];
    } else {
        newText = "";
    }

    element.addEventListener("mouseover", () => {
        box.classList.remove("hidden-for-q-hover");
        if (newText !== "") {
            if (element.textContent === ogText) {
                element.textContent = newText;
            } else {
                element.textContent = ogText;
            }
        }
    });

    element.addEventListener("mouseout", () => {
        box.classList.add("hidden-for-q-hover");
        if (newText !== "") {
            if (element.textContent === ogText) {
                element.textContent = newText;
            } else {
                element.textContent = ogText;
            }
        }
    });
});
