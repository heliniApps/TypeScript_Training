let dataObjArray: Array<IMug2> = [redMug, yellowMug3];

function cloneArray(dataSource: Array<IMug2>): Array<IMug2> {
    // serialize
    let convertedJsonStr = JSON.stringify(dataSource, null, 2);
    console.log(convertedJsonStr);

    // parse back to Array/Object
    let parsedJsonObjects: Array<IMug2> = JSON.parse(convertedJsonStr);
    console.log("parsedJsonObjects:", parsedJsonObjects);

    return parsedJsonObjects;
}
cloneArray(dataObjArray);
