// Single purpose function. (only works for 'IMug2' type objects)
var cloneObject = function (dataSource) {
    var serialisedData = JSON.stringify(dataSource);
    var clonedObject = JSON.parse(serialisedData);
    return clonedObject;
};
// Generalising the function using Generic Type Parameters.
var genericClone = function (dataSource) {
    var serialisedData = JSON.stringify(dataSource, null, 2);
    var clonedObject = JSON.parse(serialisedData);
    return clonedObject;
};
var mugDataArray4 = [redMug, yellowMug3];
var mugdataArray5 = [blueMug2, yellowMug2];
var cloneIMug2 = genericClone(mugDataArray4); // Generic Type is infered by TS.
var cloneIMug = genericClone(mugdataArray5); // Type is explicitly mentioned.
console.log(redMug.toString());
/* Two Type Parameters */
function constructObject(key, value) {
    return { data: key, value: value };
}
console.log(constructObject("data", true));
console.log(constructObject(123, "123"));
var prop1 = {
    propertyName: "something",
    value: true,
};
var prop2 = { propertyName: 234, value: "234" };
var prop3 = {
    propertyName: "height",
    value: { data: 5 },
};
var propInfoArr = [prop1, prop2, prop3];
console.log("propInfoArr:", propInfoArr);
