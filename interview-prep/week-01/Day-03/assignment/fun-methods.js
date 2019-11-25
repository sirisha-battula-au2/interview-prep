//Demo with javascript .apply()
var obj = {name:"Niladri"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));


//Demo with javascript .call()
var obj = {name:"Niladri"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB


//Use .bind() javascript
var obj = {name:"Niladri"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 
console.dir(bound); ///returns a function
console.log("Output using .bind() below ");
console.log(bound("Newtown","KOLKATA","WB")); //call the bound function






