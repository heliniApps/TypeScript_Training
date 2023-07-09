// "as" keyword
let inventoryItem = {} as any;
let score = "1234" as unknown as number;

// allowing the variable to hold "any" value.
let originalCost: any = "string val";

// Union Types. Allowing only number and string values to be assigned.
let originalCost2: number | string;

originalCost2 = 1234;
originalCost2 = "string value";
/*  originalCost2 = {};  // compile-time error  */

// Defining a "Custom Type" using "Union Types".
type Cost = number | string;

let originalCost3: Cost;

originalCost3 = "another string";
originalCost3 = 456;

/* let numberVariable: number = originalCost3; */
// this assignment can cause a compile-time error, since Cost is a union of number and string.

// solution:
let numberVariable: number;
if (typeof originalCost3 === "number") {
    numberVariable = originalCost3;
} else {
    let strVar: string = originalCost3; // compiler knows the "else" statement's type is always "string".
}
