function multipleBy() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerText = "Multiplication: " + result;
}

function divideBy() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
        let result = num1 / num2;
        document.getElementById("result").innerText = "Division: " + result;
    }
}
n 