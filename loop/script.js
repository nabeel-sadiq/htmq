const loopElements = document.querySelectorAll("[q-loop]");

loopElements.forEach((element) => {
    let loopValue = element.getAttribute("q-loop");
    let loopThese = element.innerHTML;
    
    for (let i = 0; i < loopValue - 1; i++) {
        element.innerHTML += loopThese;
    }
});
