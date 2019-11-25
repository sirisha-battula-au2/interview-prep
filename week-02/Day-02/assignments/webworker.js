var start = Date.now(); // milliseconds
var x = 0;
for (var i = 0; i < 200000000; i++){
 x = x + i;
}
console.log('ended in : ', -(start - Date.now())/1000, ' seconds');
// ended in :  9.867  seconds
Collapse




