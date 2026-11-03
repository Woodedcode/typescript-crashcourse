"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// custom type
tyoe;
Car = {
    brand: string,
    year: number
};
let car1 = {
    brand: "Toyota",
    year: 2017
};
let newCar = {
    brand: "Toyota",
    year: 2017
};
// UNION
let x = true;
let jackOccupation = "employed";
// TYPE ASSERTION
let y = "a";
y = 22;
// FUNCTIONS
function add(x, y) {
    return x + yield;
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
    EyeColor["green"] = "VEry rare eye color";
})(EyeColor || (EyeColor = {}));
//# sourceMappingURL=index.js.map