type ShapeType = "Cylinder" | "Cone" | "Cat Face";

interface IMug4 {
    readonly modelNo: string;
    shape?: ShapeType;
    material: MaterialType;
    height: number;
    radius: number;
    color: ColorType;
    getPrintableArea(): number;
    getVolume?: () => number;
}

// class Mug implements IMug4 {  // can't make the class's member variables 'private'.

class Mug {
    private modelNo: string;
    private shape?: ShapeType;
    private material: MaterialType;
    private height: number;
    private radius: number;
    private color: ColorType;

    private static instance: Mug = new Mug(null, null, null, null, null, null);

    private constructor(
        modelNo: string,
        shape: ShapeType,
        material: MaterialType,
        height: number,
        radius: number,
        color: ColorType
    ) {
        this.modelNo = modelNo;
        this.shape = shape;
        this.material = material;
        this.height = height;
        this.radius = radius;
        this.color = color;
    }

    protected getPrintableArea(): number {
        return Math.round(this.height * (2 * Math.PI * this.radius));
    }

    protected getVolume(): number {
        return Math.round(Math.PI * this.height * (this.radius * this.radius));
    }

    public static getInstance(
        modelNo: string,
        shape: ShapeType,
        material: MaterialType,
        height: number,
        radius: number,
        color: ColorType
    ): Mug {
        this.instance.modelNo = modelNo || null;
        this.instance.shape = shape || "Cylinder";
        this.instance.material =
            material !== null ? material : MaterialType.Plastic;
        this.instance.height = height || null;
        this.instance.radius = radius || null;
        this.instance.color = color || null;

        return this.instance;
    }
}

// export { Mug };

let newMugObj = Mug.getInstance("R340", null, null, 5, 3, ColorType.Red);

console.log("singleton Mug obj:", newMugObj);
