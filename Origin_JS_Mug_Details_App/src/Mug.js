export default class Mug {
    #modelNo;
    #bodyShape;
    #handleShape;
    #material;
    #height;
    #radius;
    #color;
    #isPrinted;

    constructor(
        modelNo,
        bodyShape,
        handleShape,
        material,
        height,
        radius,
        color,
        isPrinted
    ) {
        this.#modelNo = modelNo;
        this.#bodyShape = bodyShape;
        this.#handleShape = handleShape;
        this.#material = material;
        this.#height = height;
        this.#radius = radius;
        this.#color = color;
        this.#isPrinted = isPrinted;
    }

    set newModelNo(modelNo) {
        this.#modelNo = modelNo;
    }
    set newBodyShape(bodyShape) {
        this.#bodyShape = bodyShape;
    }
    set newHandleShape(handleShape) {
        this.#handleShape = handleShape;
    }
    set newMaterial(material) {
        this.#material = material;
    }
    set newHeight(height) {
        this.#height = height;
    }
    set newRadius(radius) {
        this.#radius = radius;
    }
    set newColor(color) {
        this.#color = color;
    }
    set newIsPrinted(isPrinted) {
        this.#isPrinted = isPrinted;
    }

    get modelNo() {
        return this.#modelNo;
    }
    get bodyShape() {
        return this.#bodyShape;
    }
    get handleShape() {
        return this.#handleShape;
    }
    get material() {
        return this.#material;
    }
    get height() {
        return this.#height;
    }
    get radius() {
        return this.#radius;
    }
    get color() {
        return this.#color;
    }
    get isPrinted() {
        return this.#isPrinted;
    }

    getVolume() {
        return Math.round(
            this.#height * Math.PI * (this.#radius * this.#radius)
        );
    }

    getPrintableArea() {
        return this.#height * (2 * Math.PI * this.#radius);
    }
}
