const numberBtns = document.querySelectorAll('.key__number');
const operatorBtns = document.querySelectorAll('.key__operator');
const equalsBtn = document.querySelector(".key__equals");
const outputSpace = document.getElementById("output");
const clearBtn = document.querySelector('.key__clear');

let initialNumber = '';
let operatorVal = '';
let secondNumber = '';
let initialNumberArr = [];
let secondNumberArr = [];


numberBtns.forEach(number => {
    number.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        initialNumber = event.target.innerText;
        initialNumberArr.push(initialNumber);
        outputSpace.innerHTML += initialNumber;
            })
})


const resetOutput = () => {
    outputSpace.innerText = '';
     initialNumber = '';
     operatorVal = '';
     secondNumber = '';
     initialNumberArr = [];
     secondNumberArr = [];
}

operatorBtns.forEach(operator =>{
    operator.addEventListener('click', (event) => {
        operatorVal = event.target.innerText;
        console.log(event.target.innerText);
        outputSpace.innerHTML += operatorVal;
        if (secondNumber === '' && outputSpace.innerText.match(/[\+\-x\÷]/)){
            secondNumber = initialNumberArr.join('');
            initialNumberArr = [];
         } 
    })
})

clearBtn.addEventListener('click', resetOutput);

equalsBtn.addEventListener('click', (event) => {
    outputSpace.innerText += equalsBtn.innerHTML;
    initialNumber = initialNumberArr.join('');
        const calculateSum = (initialNumber, operatorVal, secondNumber) => {
        if (operatorVal === '-') {
            let sum = Number(secondNumber) - Number(initialNumber);
            console.log(sum);
            outputSpace.innerHTML += sum;
        } else if (operatorVal === '+') {
            let sum = Number(secondNumber) + Number(initialNumber);
            console.log(sum);
            outputSpace.innerHTML += sum;
        } else if (operatorVal === 'x') {
            let sum = Number(secondNumber) * Number(initialNumber);
            console.log(sum);
            outputSpace.innerHTML += sum;
        } else if (operatorVal === '÷') {
            let sum = Number(secondNumber) / Number(initialNumber);
            console.log(sum);
            outputSpace.innerHTML += sum;
        } else {
            console.log("invalid");
            }
        }
        calculateSum(initialNumber, operatorVal, secondNumber);

         initialNumber = '';
         operatorVal = '';
         secondNumber = '';
         initialNumberArr = [];
         secondNumberArr = [];
    })