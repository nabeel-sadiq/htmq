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
    const box = document.querySelector(`${element.getAttribute("q-click")}`);
    box.classList.add("hidden-for-q-click");

    element.addEventListener("click", () => {
        box.classList.toggle("hidden-for-q-click");
    });
});
