// function a() {
//     var c = "From function a"
//     return c
// }

// var b = function b() {
//     var c = "From function b"
//     return c
// }

// var c = 10
// var c = 40

// console.log(c)
// console.log(a())
// console.log(b())

// IIFE

(function() {
    console.log("Hello World!");
}());

(function(name) {
    console.log("Hello " + name )
}("John"))

var d = function() {
    console.log("Hello")
    return "Bye"
}();

console.log(d)