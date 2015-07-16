var a = [3,4,7,2,4,7,5,3,1,6]
var newArray = [];

function bubble(array) {
  var newArray = array;
  for (var i = 0; i < array.length; i++) {
    var temp = newArray;
    newArray = [];
    temp.reduce(function(a,b, ind, arr) {
       if (ind + 1 === arr.length) {
         if (a > b) {
           newArray.push(b)
           newArray.push(a)
         } else {
           newArray.push(a)
           newArray.push(b)
         }
       }
       else if (a > b) {
         newArray.push(b)
         return a
       } else {
         newArray.push(a)
         return b
       }
    })
  }
  return newArray
}

console.log(a, bubble(a));
