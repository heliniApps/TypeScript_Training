var MaterialType;
(function (MaterialType) {
    MaterialType[MaterialType["Glass"] = 0] = "Glass";
    MaterialType[MaterialType["Plastic"] = 1] = "Plastic";
    MaterialType[MaterialType["Porcelain"] = 2] = "Porcelain";
})(MaterialType || (MaterialType = {}));
var ColorType;
(function (ColorType) {
    ColorType["Red"] = "Red";
    ColorType["Blue"] = "Dark Blue";
    ColorType["Yellow"] = "Pale Yellow";
})(ColorType || (ColorType = {}));
var redMug = {
    modelNo: "R102",
    shape: "Cylinder",
    material: MaterialType.Porcelain,
    height: 10,
    radius: 3,
    color: ColorType.Red,
    getPrintableArea: function () {
        return Math.round(this.height * (2 * Math.PI * this.radius));
    },
};
var yellowMug3 = {
    modelNo: "Y103",
    material: MaterialType.Glass,
    height: 8,
    radius: 5,
    color: ColorType.Yellow,
    getPrintableArea: function () {
        return Math.round(this.height * (2 * Math.PI * this.radius));
    },
    getVolume: function () {
        return Math.round(Math.PI * this.height * (this.radius * this.radius));
    },
};
function printMaterialType(mugObj) {
    switch (mugObj.material) {
        case MaterialType.Porcelain:
            console.log("Porcelain:", mugObj.material);
            break;
        case 0:
            console.log("Glass:", mugObj.material);
            break;
        case MaterialType.Plastic:
            console.log("Plastic:", mugObj.material);
            break;
    }
}
// tests
var mugDataArray3 = [redMug, yellowMug3];
mugDataArray3.forEach(function (mugObj) { return printMaterialType(mugObj); });
