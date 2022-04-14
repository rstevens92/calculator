// const handleMathButton = (event, buttonValue) => {

//    const outputSpace = document.getElementById("output");
   
//    outputSpace.innerHTML += buttonValue;
    
//     if (buttonValue.match(/[0-9]/)){
//         const numberValue = Number(buttonValue);
//     } 

//     let equasion = outputSpace.split();

//     const plusButton = document.getElementById("plus-button");


//     const equalsButton = document.getElementById("equals-button");

//     equalsButton = function() {
//         for (index = 0; index = outputSpace.length; index++) {
//             let answer = index + equasion;
//             return outputSpace.innerHTML += answer;
//         }
//     }
// }

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
        // if (outputSpace.innerText.match(/=/g) ){
        //     outputSpace.innerText = '';
        //     console.log(event.target.innerText);
        //     initialNumber = event.target.innerText;
        //     outputSpace.innerHTML += initialNumber;
        // }
    })
})


const resetOutput = () => {
    outputSpace.innerText = '';
    // Recommend resetting all of your global variables here also just to make the reset function more secure
    // As these variables could still be affecting the calculator functionality
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

// after equals button has been pressed, it should show the equasion until another number gets pressed
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
    })