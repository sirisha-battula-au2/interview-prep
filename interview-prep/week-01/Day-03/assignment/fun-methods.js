var obj = {num1:2,num2:3};

var add = function(a,b,c){
  return this.num1+a+b+c;
}
console.log(add.call(obj,1,2,3))

//apply
var sum=[1,2,3];
var add2 = function(a,b,c){
  return this.num1+a+b+c;
}
console.log(add2.apply(obj,sum));

//bind
var add3 = function(a,b,c){
  return this.num2+a+b+c;
}
var bound = add3.bind(obj);
console.log(bound(1,2,3))
