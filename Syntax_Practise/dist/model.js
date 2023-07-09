var blueMug = {
    modelNo: "B102",
    shape: "Cylinder",
    material: "Porcelain",
    height: 10,
    radius: 3,
    color: "Dark Blue",
    getPrintableArea: function () {
        return this.height * (Math.PI * (this.radius * 2));
    },
};
var yellowMug = {
    modelNo: "Y103",
    shape: "Cone",
    material: "Glass",
    height: 8,
    radius: 5,
    color: "Pale Yellow",
    getPrintableArea: function () {
        return Math.round(this.height * (Math.PI * (this.radius * 2)));
    },
};
var mugDataArray = [blueMug, yellowMug];
function getMugDetailsByColor(color) {
    var output = mugDataArray.filter(function (mugObj) { return mugObj.color.toLowerCase().search(color.toLowerCase()) > 0; });
    return output[0];
}
var mugObj = getMugDetailsByColor("blue");
console.log(mugObj);
