const clickElements = document.querySelectorAll("[s-click]");
let head = document.querySelector("head");

if (head) {
    let style = document.createElement("style");
    style.innerHTML += `
.hidden-for-s-click {
    display: none;
}
`;
    head.appendChild(style);
} else {
    console.error("A head tag is necessary for making an [s-click] element.");
}

clickElements.forEach((element) => {
    const box = document.querySelector(`${element.getAttribute("s-click")}`);
    box.classList.add("hidden-for-s-click");

    element.addEventListener("click", () => {
        box.classList.toggle("hidden-for-s-click");
    });
});
