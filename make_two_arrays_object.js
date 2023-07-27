var a=[1,2,3,4,5]
var b=['a','b',"c","d","e"]

var number={}
for(var i in a){
    number[b[i]]=a[i]
}
console.log(number)



// var a = [1, 2, 3, 4, 5, 6];
// var b = ['a', 'b', 'c', 'd', 'e', 'f'];

// var result = {};

// for (var i = 0; i < a.length; i++) {
//   var key = a[i];
//   var value = b[i];
//   result[key] = value;
// }

// console.log(result);
