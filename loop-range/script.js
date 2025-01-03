const loopElements = document.querySelectorAll("[s-loop]");

loopElements.forEach((element) => {
    let loopValue = element.getAttribute("s-loop");
    let loopThese = element.innerHTML;

    loopValue = loopValue.match(/\d+/)
    console.log(loopValue[0])

    if 
});
