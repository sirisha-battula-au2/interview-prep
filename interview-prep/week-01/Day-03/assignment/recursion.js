function sumTo(n){
  if(n==1)
  return 1;
  else {
    return res = n+sumTo(n-1);
  }
}

console.log(sumTo(8));