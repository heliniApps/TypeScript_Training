import Mug from "./Mug.js";
import { BodyShape, HandleShape, Material, Color } from "./enums/Enums.js";

const blueMug = new Mug(
    "B102",
    BodyShape.Cylinder,
    HandleShape.HalfHeart,
    Material.Porcelain,
    10,
    3,
    Color.DarkBlue,
    false
);

const yellowMug = new Mug(
    "Y103",
    BodyShape.CatFace,
    HandleShape.HalfSquare,
    Material.Glass,
    8,
    4,
    Color.PaleYellow,
    true
);

const dataArray = [blueMug, yellowMug];

/**
 *
 * @param {Mug} mugObj
 * @returns {Mug} HTML markup text with Mug details.
 */
const mugFeatureMarkup = (mugObj) => {
    let htmlMarkup = `
        <ul class="mug-features">
            <li class="mug-features-li model-no">Model No: <span>${
                mugObj.modelNo
            }</span></li>
            <li class="mug-features-li body-shape">Body Shape: <span>${
                mugObj.bodyShape
            }</span></li>
            <li class="mug-features-li handle-shape">Handle Shape: <span>${
                mugObj.handleShape
            }</span></li>
            <li class="mug-features-li color">Color: <span>${
                mugObj.color
            }</span></li>
            <li class="mug-features-li material">Material: <span>${
                mugObj.material
            }</span></li>
            <li class="mug-features-li height">Height: <span>${
                mugObj.height
            }</span></li>
            <li class="mug-features-li radius">Radius: <span>${
                mugObj.radius
            }</span></li>
            <li class="mug-features-li volume">Volume: <span>${mugObj.getVolume()}</span></li>
            <li class="mug-features-li is-printed">Is Printed: <span>${
                mugObj.isPrinted
            }</span></li>
        </ul>
    `;

    return htmlMarkup;
};

/**
 *
 * @param {Mug} mugObj
 * @returns {HTMLElement} The populated article element.
 */
const createMugArticle = (mugObj) => {
    let articleElem = document.createElement("article");
    articleElem.classList.add("mug-article");
    articleElem.setAttribute("id", mugObj.modelNo);
    articleElem.innerHTML = mugFeatureMarkup(mugObj);

    return articleElem;
};

const displayData = () => {
    let mainComponent = document.querySelector("main");

    dataArray.forEach((mugObj) => {
        let articleElem = createMugArticle(mugObj);
        mainComponent.appendChild(articleElem);
    });
};
displayData();
