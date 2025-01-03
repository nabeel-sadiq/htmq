const hoverElements = document.querySelectorAll("[s-hover]");
let head = document.querySelector("head");

if (head) {
    let style = document.createElement("style");
    style.innerHTML += `
.hidden-for-s-hover {
    display: none;
}
`;
    head.appendChild(style);
} else {
    console.error("A head tag is necessary for making an [s-hover] element.");
}

hoverElements.forEach((element) => {
    const box = document.querySelector(`${element.getAttribute("s-hover")}`);
    box.classList.add("hidden-for-s-hover");

    element.addEventListener("mouseover", () => {
        box.classList.remove("hidden-for-s-hover");
    });

    element.addEventListener("mouseout", () => {
        box.classList.add("hidden-for-s-hover");
    });
});
