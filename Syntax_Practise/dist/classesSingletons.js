// class Mug implements IMug4 {  // can't make the class's member variables 'private'.
var Mug = /** @class */ (function () {
    function Mug(modelNo, shape, material, height, radius, color) {
        this.modelNo = modelNo;
        this.shape = shape;
        this.material = material;
        this.height = height;
        this.radius = radius;
        this.color = color;
    }
    Mug.prototype.getPrintableArea = function () {
        return Math.round(this.height * (2 * Math.PI * this.radius));
    };
    Mug.prototype.getVolume = function () {
        return Math.round(Math.PI * this.height * (this.radius * this.radius));
    };
    Mug.getInstance = function (modelNo, shape, material, height, radius, color) {
        this.instance.modelNo = modelNo || null;
        this.instance.shape = shape || "Cylinder";
        this.instance.material =
            material !== null ? material : MaterialType.Plastic;
        this.instance.height = height || null;
        this.instance.radius = radius || null;
        this.instance.color = color || null;
        return this.instance;
    };
    Mug.instance = new Mug(null, null, null, null, null, null);
    return Mug;
}());
// export { Mug };
var newMugObj = Mug.getInstance("R340", null, null, 5, 3, ColorType.Red);
console.log("singleton Mug obj:", newMugObj);
