import { updateTotalPrice } from './runningPrice.js';
import { setDrinkChoice } from './transientState.js';

const handleDrinksChoice = (event) => {
    if (event.target.id === "drink") {
        setDrinkChoice(parseFloat(event.target.value)); 
        updateTotalPrice(); 
    }
};

document.addEventListener("change", handleDrinksChoice);

export const drinkOptions = async () => {
    const response = await fetch("http://localhost:8088/drinks");
    const drinks = await response.json();

    let drinksOptionsHTML = "";
    drinksOptionsHTML += `<h1>Choose your Drink!</h1>`
    drinksOptionsHTML += `<select id="drink">`;
    drinksOptionsHTML += `<option value="0">None</option>`;
    for (const drink of drinks) {
        drinksOptionsHTML += `<option value="${drink.id}" data-price="${drink.price}">${drink.name}</option>`;
    }
    drinksOptionsHTML += `</select>`;

    return drinksOptionsHTML;
};
