var dataObjArray = [redMug, yellowMug3];
function cloneArray(dataSource) {
    // serialize
    var convertedJsonStr = JSON.stringify(dataSource, null, 2);
    console.log(convertedJsonStr);
    // parse back to Array/Object
    var parsedJsonObjects = JSON.parse(convertedJsonStr);
    console.log("parsedJsonObjects:", parsedJsonObjects);
    return parsedJsonObjects;
}
cloneArray(dataObjArray);
