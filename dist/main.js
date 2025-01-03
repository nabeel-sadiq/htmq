// loop
const loopElements = document.querySelectorAll("[s-loop]");

loopElements.forEach((element) => {
    let loopValue = element.getAttribute("s-loop");
    let loopThese = element.innerHTML;

    for (let i = 0; i < loopValue - 1; i++) {
        element.innerHTML += loopThese;
    }
});

// search
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

// shortcut
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
