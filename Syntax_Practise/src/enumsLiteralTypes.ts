enum MaterialType {
    Glass,
    Plastic,
    Porcelain,
}

enum ColorType {
    Red = "Red",
    Blue = "Dark Blue",
    Yellow = "Pale Yellow",
}

interface IMug2 {
    readonly modelNo: string;
    shape?: "Cylinder" | "Cone" | "Cat Face";
    material: MaterialType;
    height: number;
    radius: number;
    color: ColorType;
    getVolume?: () => number;
    getPrintableArea(): number;
}

const redMug: IMug2 = {
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

const yellowMug3: IMug2 = {
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

function printMaterialType(mugObj: IMug2): void {
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
const mugDataArray3: Array<IMug2> = [redMug, yellowMug3];

mugDataArray3.forEach((mugObj) => printMaterialType(mugObj));
