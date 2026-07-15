
let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        if(value === "AC"){
            expression = "";
            display.value = "";
        }

        else if(value === "DEL"){
            expression = expression.slice(0,-1);
            display.value = expression;
        }

        else if(value === "="){
            try{
                expression = eval(expression);
                display.value = expression;
            }
            catch{
                display.value = "Error";
            }
        }
        else{
            expression += value;
            display.value = expression;
        }
    });
});













