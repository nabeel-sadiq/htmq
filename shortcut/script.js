const shortcutElements = document.querySelectorAll("[s-shortcut]");

shortcutElements.forEach((element) => {
    const shortcut = element.getAttribute("s-shortcut");
    let shortKey = shortcut.trim().split("ctrl + ").join("").trim();
    console.log(shortKey);

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
