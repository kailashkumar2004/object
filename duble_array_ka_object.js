let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var number={}
for (var i in list1){
   number[list1[i]]=list2[i]
}
console.log(number);

var a=[1,2,3,4,5]
var b=["a","b","c","d","e"]
var number={}
for(var i in a){
    number[b[i]]=a[i]
}
console.log(number)

var number=[2,4,6,8,10]
var num=["num1","num2","num3","num4","num5"]
var object={}
for(var i in number){
    object[number[i]]=num[i]
}
console.log(object)

var addresh=["village","post","thana","block","distik","state","country"];
var detlis=["khosidangi","churli","galgaliya","thakurganj","kishanganj","bihar","indai"]
var introduction={};
for(var i in addresh){
    introduction[addresh[i]]=detlis[i]
}
console.log(introduction)


var value=[9,7,5,3,1];
var number=["a","b","c","d","e"];
var object={}
for(var i in value){
    object[number[i]]=value[i]
}
console.log(object)


var name=["kajal","kailash","komal","kundan","kiran"];
var names=["name1","name2","name3","name4","name5"];
var object={}
for(var i in name){
    object[names[i]]=name[i]
}
console.log(object)


var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var obj = {}
for (var i in number) {
    obj[keys[i]]=number[i]
}
console.log(obj)