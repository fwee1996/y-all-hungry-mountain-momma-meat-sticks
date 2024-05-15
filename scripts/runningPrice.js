export const updateTotalPrice = () => {
    let total = 0;

    const dessertSelect = document.getElementById('dessert');
    if (dessertSelect) {
        const dessertPrice = parseFloat(dessertSelect.value);
        if (!isNaN(dessertPrice)) {
            total += dessertPrice;
        }
    }

    const drinkSelect = document.getElementById('drink');
    if (drinkSelect) {
        const drinkPrice = parseFloat(drinkSelect.value);
        if (!isNaN(drinkPrice)) {
            total += drinkPrice;
        }
    }

    const foodSelect = document.getElementById('food');
    if (foodSelect) {
        const foodPrice = parseFloat(foodSelect.value);
        if (!isNaN(foodPrice)) {
            total += foodPrice;
        }
    }

    document.getElementById('totalPrice').textContent = total.toFixed(2);
};