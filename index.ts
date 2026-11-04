// BASIC TYPES
let age: number = 25;
let hobby: string = "comedy";
let isAdult: boolean = true;
let fruit: any = "apple";
// dont use too often
// ARRAYS
let fruits: string[] = ["apple", "orange"]
let arr : any[] = [22, "a", true]
let numArr: number[][] = [[1],[2],[3],[4]]
// TUPLE
// [number, string]
let employee: [number, string] = [1, "Jack"];
let employees: [number, string][] = [[2,"dave"], [3, "charles"]]
// OBJECTS
let car :{ brand: string,year: number} = {brand: "Toyota", year: 2017}
// custom type
type Car = {
    brand: string,
    year: number
}

let car1: Car = {
    brand: "Toyota",
    year: 2017
}
// INTERFACE
interface Car1 {
    brand:string,
    year:number
}

let newCar: Car1 = {
    brand: "Toyota",
    year: 2017
}

// UNION
let x: string | number = 3

// example
type occupation = "employed" | "student"
let jackOccupation: occupation = "employed"

// TYPE ASSERTION
let y: any = "a"
y = <number> 22

// FUNCTIONS
function add(x: number, y: number): number {
    return x + y
}

add(2,2)

// FUNCTION THAT DOESNT RETURN ANYTHING
function sayHi(): void {
    console.log("Hi!");
}

// GENERICS - REVIST


// ENUMS
enum EyeColor {
    brown = "Common eye color", blue = "rare eye color", green = "Very rare eye color"
}

interface Student{
    name: string,
    age: number,
    eyeColor: EyeColor
}

function displayStudent(student: Student): void {
    const info: string =
  student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.style.whiteSpace = "pre-line";
    document.body.innerText = info;
}

displayStudent({
    name: "Ryan",
    age: 37,
    eyeColor: EyeColor.blue
})

