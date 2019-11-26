//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

function Product(a,b){
    let num1=a,num2=b;
    let result=num1*num2;
    result=result.toString();
    console.log(result,typeof result)
    
    }
    
    Product("4","6");