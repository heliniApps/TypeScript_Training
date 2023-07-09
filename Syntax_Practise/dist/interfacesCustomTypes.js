var blueMug2 = {
    modelNo: "B102",
    shape: "Cylinder",
    material: "Porcelain",
    height: 10,
    radius: 3,
    color: "Dark Blue",
    getPrintableArea: function () {
        return Math.round(this.height * (Math.PI * (this.radius * 2)));
    },
};
var yellowMug2 = {
    modelNo: "Y103",
    material: "Glass",
    height: 8,
    radius: 5,
    color: "Pale Yellow",
    getPrintableArea: function () {
        return Math.round(this.height * (2 * Math.PI * this.radius));
    },
    getVolume: function () {
        return Math.round(Math.PI * this.height * (this.radius * this.radius));
    },
};
function getMugDetailsByColor2(mugData, color) {
    var outputArr = mugData.filter(function (mugObj) { return mugObj.color.toLowerCase().search(color.toLowerCase()) > 0; });
    return outputArr[0];
}
function changeObjValues(newMugObj) {
    console.log("Object values changed.  ", newMugObj);
}
// tests
var mugDataArray2 = [blueMug2, yellowMug2];
var mugObj2 = getMugDetailsByColor2(mugDataArray2, "yellow");
console.log("mugObj2:", mugObj2);
changeObjValues({
    modelNo: "B102",
    shape: "Cone",
    material: "Plastic",
    height: 10,
    radius: 3,
    color: "Light Blue",
    getPrintableArea: function () {
        return Math.round(this.height * (Math.PI * (this.radius * 2)));
    },
});
// type inference
var colorBlueMug = getMugDetailsByColor2(mugDataArray2, "blue");
changeObjValues(colorBlueMug);
// colorBlueMug.modelNo = "sdkjf";  // throws a compile error. read-only property
