console.log("This is java Script")

function calculation(){
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);

    const result = firstNumber + secondNumber;

    document.getElementById('result').innerText = result;
}