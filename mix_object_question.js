// add=======================================
// var number = { a: 4, b: 7, c: 9, d: 90, e: 75 }
// number.g = 8
// console.log(number)

// var names = { "name1": "kailash", "name2": "sourav", "name3": "raja" }
// names.name4 = "manvi"
// console.log(names)

// var number = { "num1": 78, "num2": 90, "num3": 72, "num4": 10 }
// number.num5 = 80
// console.log(number)

// change=================================================================
// var number = { "a": 9, "b": 8, "c": 7, "d": 6 }
// number.c = 90
// console.log(number)

// var names = { "name1": "kailash", "name2": "sourav", "name3": "raja" }
// names.name2 = "mona"
// console.log(names)

// var number = { "num1": 78, "num2": 90, "num3": 72, "num4": 10 }
// number.num3 = 22
// console.log(number)

// delete===================================================================
// var names = { "name1": "kailash", "name2": "sourav", "name3": "raja" }
// delete names.name2
// console.log(names)


// var number = { "num1": 78, "num2": 90, "num3": 72, "num4": 10 }
// delete number.num3
// console.log(number)

// count====================================================================.
// var number = { a: 1, b: 9, c: 7, d: 5, e: 4, f: 21, g: 75, h: 90, t: 85, l: 10, u: 70 };
// var count = Object.keys(number).length
// console.log(count)

// length==========================================================================
// var num = { a: 1, b: 9, c: 7, d: 5, e: 4, f: 21, g: 75, h: 90, t: 85, l: 10, u: 70 };
// var length = Object.keys(num).length
// console.log(length)

// sum===========================================================
// var number = { a: 1, b: 9, c: 7, d: 5, e: 4, f: 21, g: 75, h: 90, t: 85, l: 10, u: 70 };
// var sum=0
// for (var i in number) {
//     sum=sum+number[i]
// }
// console.log(sum)

// even_and_odd========================================================
// var number = { a: 1, b: 9, c: 7, d: 5, e: 4, f: 21, g: 75, h: 90, t: 85, l: 10, u: 70 };
// for (var i in number) {
//     if (number[i] % 2 == 0) {
//         console.log(number[i],"even")
//     }
//     else {
//         console.log(number[i],"odd")
//     }
// }

// posstive_and_neagtive========================================================
// var number = { a: 1, b: -9, c: 7, d: -5, e: 4, f: 21, g: -75, h: 90, t: -85, l: 10, u: -70 };
// for (var i in number) {
//     if (number[i] > 0) {
//         console.log(number[i],"posstive")
//     }
//     else {
//         console.log(number[i],"neagtive")
//     }
// }

// class===================================================================
// class number{
//     constructor() {
//         this.num1 = 90,
//             this.num2 = 80,
//             this.num3 = 70,
//             this.num4 = 20,
//             this.num5=18
//     }
// }
// var new_numbers = new number();
// console.log(new_numbers)

// charcount===============================================
// var name = "kailashmanvisavita";
// var charcount = {}
// var i = 0
// for (var i = 0; i < name.length; i++){
//     var char = name[i]
//     charcount[char]=(charcount[char] || 0)+1
// }
// console.log(charcount)

// var mobile = "redmirelmivivoopoptecnogaluxinfinx"
// var charCount = {}
// for (var i in mobile) {
//     var char = mobile[i]
//     charCount[char]=(charCount[char]|| 0)+1
// }
// console.log(charCount)

// duble_array_of_object===========================================
// var number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// var keys = ["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10"];
// var obj = {}
// for (var i in number) {
//     obj[keys[i]]=number[i]
// }
// console.log(obj)

// uniqenumber==========================================================
// var Object = { "a": 9, "b": 5, "c": 8, "d": 11, "e": 19, "a": 0, "c": 7 }
// console.log(Object)

// first_way========================================
// var Object = { "a": 9, "b": 11, "c": 86, "d": 80, "h": 64 }
// console.log(Object.c)

// secound_way=====================================================
// var Object = { "a": 9, "b": 11, "c": 86, "d": 80, "h": 64 }
// console.log(Object["d"])

// distraching=========================================================
// var array = [2, 5, 7, 8, 90, 76, 43, 21, 26, 74, 50];
// var [c, h, l, d, t] = array
// console.log(c,h,l,d,t)

// var object = { "a": 5, "b": 9, "c": 11, "d": 74, "r": 80 }
// var { a, c, r } = object
// console.log(a,c,r)

// max==================================================
// var object = { "a": 5, "b": 9, "c": 11, "d": 74, "r": 80 }
// var max=object[0]
// for (var i in object) {
//     if (max = object[i]) {
//         object[i]=max
//     }
// }
// console.log(max)

// object_key_value=====================================================
// var object = {
//     "name": "kailash",
//     "class": 12,
//     "rool": 10,
//     "rollcode": 13503,
//     "school": "high school churli"
// }
// console.log(object)
// for (var i in object) {
//     console.log(i)
//     console.log(object[i])
// }
