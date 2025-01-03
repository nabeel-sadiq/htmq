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
