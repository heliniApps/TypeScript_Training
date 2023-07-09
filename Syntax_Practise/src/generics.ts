// Single purpose function. (only works for 'IMug2' type objects)
const cloneObject = (dataSource: IMug2): IMug2 => {
    let serialisedData = JSON.stringify(dataSource);
    let clonedObject = JSON.parse(serialisedData);
    return clonedObject;
};

// Generalising the function using Generic Type Parameters.
const genericClone = <T>(dataSource: T): T => {
    let serialisedData = JSON.stringify(dataSource, null, 2);
    let clonedObject = JSON.parse(serialisedData);
    return clonedObject;
};

const mugDataArray4: Array<IMug2> = [redMug, yellowMug3];
const mugdataArray5: Array<IMug> = [blueMug2, yellowMug2];

let cloneIMug2 = genericClone(mugDataArray4); // Generic Type is infered by TS.
let cloneIMug: Array<IMug> = genericClone<Array<IMug>>(mugdataArray5); // Type is explicitly mentioned.

console.log(redMug.toString());

/* Two Type Parameters */

function constructObject<T, U>(key: T, value: U): object {
    return { data: key, value: value };
}
console.log(constructObject<string, boolean>("data", true));
console.log(constructObject<number, string>(123, "123"));

/* Typed Interfaces */

interface IPropertyInfo<TProp, TData> {
    propertyName: TProp;
    value: TData;
}

let prop1: IPropertyInfo<string, boolean> = {
    propertyName: "something",
    value: true,
};
let prop2: IPropertyInfo<number, string> = { propertyName: 234, value: "234" };
let prop3: IPropertyInfo<string, { data: number }> = {
    propertyName: "height",
    value: { data: 5 },
};

const propInfoArr: IPropertyInfo<any, any>[] = [prop1, prop2, prop3];
console.log("propInfoArr:", propInfoArr);
