let num1 = "";
let num2 = "";
let operator = "";

let numberButtons = document.querySelectorAll(".nums button");
let operatorButtons = document.querySelectorAll(".operators button")
let screen = document.querySelector(".screen")

numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (operator === ""){
            if (button.textContent === ".") {
                 if (!num1.includes(".")) { 
                     num1 += ".";
                }
            } else {
                 num1 += button.textContent;
            }
            /* num1 += button.textContent; */
            screen.textContent = num1;
        } else {
            if (button.textContent === ".") {
                 if (!num2.includes(".")) { 
                     num2 += ".";
                }
            } else {
                 num2 += button.textContent;
            }
            /* num2 += button.textContent; */
            screen.textContent = num2;
        }
    });

})

operatorButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (button.textContent === "+"){
            operator = button.textContent;
            screen.textContent = "";
        }else if (button.textContent === "-"){
            operator = button.textContent;
            screen.textContent = "";
        }else if (button.textContent === "x"){
            operator = "*";
            screen.textContent = "";
        } else if (button.textContent === "÷"){
            operator = "/";
            screen.textContent = "";
        } else if (button.textContent === "="){
            let n1 = parseFloat(num1);
            let n2 = parseFloat(num2);
            let result = 0;
            switch(operator){
                case "+":
                   result = n1 + n2;
                    break;
                case "-":
                    result = n1 - n2;
                    break;
                case "*":
                    result = n1 * n2;
                    break;
                case "/":
                    result = n1 / n2;
                    break
            }if (result % 1 === 0) {
            screen.textContent = result;
            } else {
            screen.textContent = result.toFixed(2);
            }
            num1 = screen.textContent; 
            num2 = "";                 
            operator = "";
        } else {
            screen.textContent = "";
            num1 = "";
            num2 = "";
            operator = "";
        }
    })
})