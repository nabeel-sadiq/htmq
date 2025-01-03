function loop() {
    const loopElements = document.querySelectorAll("[s-loop]");

    loopElements.forEach((element) => {
        let loopValue = element.getAttribute("s-loop");
        let loopThese = element.innerHTML;

        for (let i = 0; i < loopValue - 1; i++) {
            element.innerHTML += loopThese;
        }
    });
}

function search() {
    const searchInput = document.querySelectorAll("[s-search]");

    searchInput.forEach((element) => {
        const attrValue = element.getAttribute("s-search");
        const notLi = document.querySelector(attrValue).children[0].tagName;
        const listItems = document.querySelectorAll(`${attrValue} ${notLi}`);

        element.addEventListener("input", () => {
            const searchTerm = element.value.toLowerCase();

            listItems.forEach((item) => {
                const itemText = item.textContent.toLowerCase();

                if (itemText.includes(searchTerm)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

function shortcut() {
    const shortcutElements = document.querySelectorAll("[s-shortcut]");

    shortcutElements.forEach((element) => {
        const shortcut = element.getAttribute("s-shortcut");
        let shortKey = shortcut.trim().split("ctrl + ").join("").trim();

        if (shortKey === "w" || shortKey === "t") {
            console.error(
                `Do not use ctrl + ${shortKey} as a shortcut as it is used to manipulate tabs in most browsers. `
            );
        }

        if (shortcut.includes("ctrl")) {
            document.addEventListener("keydown", (event) => {
                if (
                    (event.ctrlKey || event.metaKey) &&
                    event.key === `${shortKey}`
                ) {
                    event.preventDefault();
                    element.focus();
                }
            });
        } else {
            document.addEventListener("keydown", (event) => {
                if (event.key === `${shortKey}`) {
                    event.preventDefault();
                    element.focus();
                }
            });
        }
    });
}

function click() {
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
        console.error(
            "A head tag is necessary for making an [s-click] element."
        );
    }

    clickElements.forEach((element) => {
        const box = document.querySelector(
            `${element.getAttribute("s-click")}`
        );
        box.classList.add("hidden-for-s-click");

        element.addEventListener("click", () => {
            box.classList.toggle("hidden-for-s-click");
        });
    });
}

function hover() {
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
        console.error(
            "A head tag is necessary for making an [s-hover] element."
        );
    }

    hoverElements.forEach((element) => {
        const box = document.querySelector(
            `${element.getAttribute("s-hover")}`
        );
        box.classList.add("hidden-for-s-hover");

        element.addEventListener("mouseover", () => {
            box.classList.remove("hidden-for-s-hover");
        });

        element.addEventListener("mouseout", () => {
            box.classList.add("hidden-for-s-hover");
        });
    });
}

loop();
search();
shortcut();
click();
hover();
