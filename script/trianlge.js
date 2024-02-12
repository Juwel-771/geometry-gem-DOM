// document.getElementById('triangle').addEventListener('click', function connection(){
//     alert("Connected");
// })

function calculateTriangleArea(){
    // get triangle base value
    const triangleText = document.getElementById('triangle-base');
    const triangleInputValue = triangleText.value;
    const triangleBase = parseFloat(triangleInputValue);
    // console.log(triangleBase);

    // get triangle height value
    const triangleHeightText = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightText.value;
    const triangleHeight = parseFloat(triangleHeightValue);
    // console.log(triangleHeight);

    const triangleArea = 0.5 * triangleBase *triangleHeight;
    console.log("Area of the triangle: ",triangleArea);

    const triangleAreaShow = document.getElementById('area-result');
    triangleAreaShow.innerText = triangleArea;
}

