// "as" keyword
var inventoryItem = {};
var score = "1234";
// allowing the variable to hold "any" value.
var originalCost = "string val";
// Union Types. Allowing only number and string values to be assigned.
var originalCost2;
originalCost2 = 1234;
originalCost2 = "string value";
var originalCost3;
originalCost3 = "another string";
originalCost3 = 456;
/* let numberVariable: number = originalCost3; */
// this assignment can cause a compile-time error, since Cost is a union of number and string.
// solution:
var numberVariable;
if (typeof originalCost3 === "number") {
    numberVariable = originalCost3;
}
else {
    var strVar = originalCost3; // compiler knows the "else" statement's type is always "string".
}
