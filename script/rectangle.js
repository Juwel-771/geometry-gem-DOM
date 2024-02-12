function calculateRectangleArea(){
    // get width value
    const rectangleText = document.getElementById('rectangle-base');
    const rectangleValue = rectangleText.value;
    const rectangleWidth = parseFloat(rectangleValue);

    // get length value 
    const lengthText = document.getElementById('rectangle-length');
    const lengthValue = lengthText.value;
    const rectangleLength = parseFloat(lengthValue);

    const rectangleResult = rectangleWidth*rectangleLength;
    console.log(rectangleResult);

    const rectangleDisplay = document.getElementById('rectangle-value');
    rectangleDisplay.innerText = rectangleResult;
}