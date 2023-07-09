interface IMug {
    readonly modelNo: string;
    shape?: string;
    material: string;
    height: number;
    radius: number;
    color: string;
    getPrintableArea(): number;
    getVolume?: () => number; // getVolume() ?: number;  ** causes an error **
}

const blueMug2: IMug = {
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

const yellowMug2: IMug = {
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

function getMugDetailsByColor2(mugData: Array<IMug>, color: string): IMug {
    let outputArr = mugData.filter(
        (mugObj) => mugObj.color.toLowerCase().search(color.toLowerCase()) > 0
    );

    return outputArr[0];
}

function changeObjValues(newMugObj: IMug): void {
    console.log("Object values changed.  ", newMugObj);
}

// tests
const mugDataArray2: Array<IMug> = [blueMug2, yellowMug2];

let mugObj2: IMug = getMugDetailsByColor2(mugDataArray2, "yellow");
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
let colorBlueMug = getMugDetailsByColor2(mugDataArray2, "blue");

changeObjValues(colorBlueMug);

// colorBlueMug.modelNo = "sdkjf";  // throws a compile error. read-only property
