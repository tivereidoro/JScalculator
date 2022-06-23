
const operator= prompt("\n Enter operator \n + \n - \n / \n * \n %");

const num1= parseFloat(prompt("\n Enter first number"));
const num2= parseFloat(prompt("\n Enter second number"));
    
let result;
    
if(operator == "+") {
result= num1 + num2;
}

else if (operator == "-") {
result= num1 - num2;
}

else if (operator == "/") {
result= num1 / num2;
}
    
else if (operator == "*") {
result= num1 * num2;
}
    
else{
result= num1 % num2;
}
    
alert(result);
    
console.log(result);
    
document.getElementById("result").innerHTML="THE RESULT IS= " + result;
