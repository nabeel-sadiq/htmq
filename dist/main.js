function loop() {
    const loopElements = document.querySelectorAll("[q-loop]");

    loopElements.forEach((element) => {
        let loopValue = element.getAttribute("q-loop");
        let loopThese = element.innerHTML;

        for (let i = 0; i < loopValue - 1; i++) {
            element.innerHTML += loopThese;
        }
    });
}

function search() {
    const searchInput = document.querySelectorAll("[q-search]");

    searchInput.forEach((element) => {
        const attrValue = element.getAttribute("q-search");
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
    const shortcutElements = document.querySelectorAll("[q-shortcut]");

    shortcutElements.forEach((element) => {
        const shortcut = element.getAttribute("q-shortcut");
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
        console.error(
            "A head tag is necessary for making an [q-click] element."
        );
    }

    clickElements.forEach((element) => {
        const box = document.querySelector(
            `${element.getAttribute("q-click")}`
        );
        box.classList.add("hidden-for-q-click");

        element.addEventListener("click", () => {
            box.classList.toggle("hidden-for-q-click");
        });
    });
}

function hover() {
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
        console.error(
            "A head tag is necessary for making an [q-hover] element."
        );
    }

    hoverElements.forEach((element) => {
        const box = document.querySelector(
            `${element.getAttribute("q-hover")}`
        );
        box.classList.add("hidden-for-q-hover");

        element.addEventListener("mouseover", () => {
            box.classList.remove("hidden-for-q-hover");
        });

        element.addEventListener("mouseout", () => {
            box.classList.add("hidden-for-q-hover");
        });
    });
}

loop();
search();
shortcut();
click();
hover();
