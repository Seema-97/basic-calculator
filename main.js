console.log(1234);


// const display = document.getElementById('display');
// const resultButton = document.getElementById('resultButton');



resultButton.addEventListener("click", () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;

    const temp = `${num1} ${operation} ${num2}`;
    const answer = eval(temp);

    display.innerText = `Result of ${temp} = ${answer}`;
})
