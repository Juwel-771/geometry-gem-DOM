// document.getElementById('triangle').addEventListener('click', function connection(){
//     alert("Connected");
// })

function calculateTriangleArea(){
    const triangleText = document.getElementById('triangle-base');
    const triangleInputValue = triangleText.value;
    const triangleBase = parseFloat(triangleInputValue);

    // console.log(triangleBase);

    const triangleHeightText = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightText.value;
    const triangleHeight = parseFloat(triangleHeightValue);
    console.log(triangleHeight);
}

