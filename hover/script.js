const hoverElements = document.querySelectorAll("[q-hover]");
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

hoverElements.forEach((element) => {
    const box = document.querySelector(`${element.getAttribute("q-hover")}`);
    box.classList.add("hidden-for-q-hover");

    element.addEventListener("mouseover", () => {
        box.classList.remove("hidden-for-q-hover");
    });

    element.addEventListener("mouseout", () => {
        box.classList.add("hidden-for-q-hover");
    });
});
