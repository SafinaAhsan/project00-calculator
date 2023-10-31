#! /usr/bin/env node


import inquirer from "inquirer";
import{sum} from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import{modulus} from "./modulus.js";

const num1=await inquirer.prompt([{
    type:"number",
    name:"num1",
    message:"Enter the first number."

}]);

const num2=await inquirer.prompt([{
    type:"number",
    name:"num2",
    message:"Enter the second number."

}]);
 
const answer=await inquirer.prompt([{
    type:"list",
    name:"operator",
    message:"Select the operator you want to perform.",
    choices:["Add","Subtract","Multiply","Divide","Modulus"]
}]);

if(answer.operator=="Add"){
    let result:number=sum(num1.num1,num2.num2);
    console.log( `The answer for addition is ${result}`)}
    
    else if(answer.operator=="Subtract"){
        let result:number=subtract(num1.num1,num2.num2);
         console.log(`The answer for subtraction is ${result}`)
    }
    
   else if(answer.operator=="Multiply"){
        let result:number=multiply(num1.num1,num2.num2);
        console.log(`The answer for multiply is ${result}`)
    }

else if(answer.operator=="Divide"){
    let result:number=divide(num1.num1,num2.num2);
        console.log(`The answer for division is ${result}`)
}

else if
 (answer.operator=="Modulus"){
 let result:number=modulus(num1.num1,num2.num2)
    console.log(`The answer for modulus is ${result}`)
};