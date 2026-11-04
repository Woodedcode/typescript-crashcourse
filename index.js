"use strict";
// BASIC TYPES
let age = 25;
let hobby = "comedy";
let isAdult = true;
let fruit = "apple";
// dont use too often
// ARRAYS
let fruits = ["apple", "orange"];
let arr = [22, "a", true];
let numArr = [[1], [2], [3], [4]];
// TUPLE
// [number, string]
let employee = [1, "Jack"];
let employees = [[2, "dave"], [3, "charles"]];
// OBJECTS
let car = { brand: "Toyota", year: 2017 };
let car1 = {
    brand: "Toyota",
    year: 2017
};
let newCar = {
    brand: "Toyota",
    year: 2017
};
// UNION
let x = 3;
let jackOccupation = "employed";
// TYPE ASSERTION
let y = "a";
y = 22;
// FUNCTIONS
function add(x, y) {
    return x + y;
}
add(2, 2);
// FUNCTION THAT DOESNT RETURN ANYTHING
function sayHi() {
    console.log("Hi!");
}
// GENERICS - REVIST
// ENUMS
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common eye color";
    EyeColor["blue"] = "rare eye color";
    EyeColor["green"] = "Very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.style.whiteSpace = "pre-line";
    document.body.innerText = info;
}
displayStudent({
    name: "Ryan",
    age: 37,
    eyeColor: EyeColor.blue
});
//# sourceMappingURL=index.js.map