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
