const loopElements = document.querySelectorAll("[s-loop]");

loopElements.forEach((element) => {
    let loopValue = element.getAttribute("s-loop");
    let loopThese = element.innerHTML;
    
    for (let i = 0; i < loopValue - 1; i++) {
        element.innerHTML += loopThese;
    }
});
