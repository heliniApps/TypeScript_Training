const blueMug: {
    modelNo: string;
    shape: string;
    material: string;
    height: number;
    radius: number;
    color: string;
    getPrintableArea: object;
} = {
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

const yellowMug: {
    modelNo: string;
    shape: string;
    material: string;
    height: number;
    radius: number;
    color: string;
    getPrintableArea: object;
} = {
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

const mugDataArray: {
    modelNo: string;
    shape: string;
    material: string;
    height: number;
    radius: number;
    color: string;
    getPrintableArea: object;
}[] = [blueMug, yellowMug];

function getMugDetailsByColor(color: string): {
    modelNo: string;
    shape: string;
    material: string;
    height: number;
    radius: number;
    color: string;
    getPrintableArea: object;
} {
    let output = mugDataArray.filter(
        (mugObj) => mugObj.color.toLowerCase().search(color.toLowerCase()) > 0
    );
    return output[0];
}

let mugObj: object = getMugDetailsByColor("blue");

console.log(mugObj);
