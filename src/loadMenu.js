export function loadMenu() {
    const contentEl = document.getElementById('content');
    const menuCard = document.createElement('div');
    menuCard.classList.add('card', 'menu');
    menuCard.innerHTML = `
        <h3 class="title">Menu</h3>
        <div class="menu">
            <div class="dish">
                <p class="food-name"><strong>Fish</strong></p>
                <p class="ingredients">Fish, Chips, Sauce Bearnaise, Broccoli, Salad</p>
            </div>
            <div class="dish">
                <p class="food-name"><strong>Steak</strong></p>
                <p class="ingredients">French Fries, Smoked Hot Chili Sauce, Vegetables, Blue Cheese</p>
            </div>
            <div class="dish">
                <p class="food-name"><strong>Pasta</strong></p>
                <p class="ingredients">Rigatoni, Sauce Bolognese, Tomatoes, Parmigiano Reggiano, Basil</p>
            </div>
            <div class="dish">
                <p class="food-name"><strong>Dessert</strong></p>
                <p class="ingredients">Vanilla Ice Cream, Waffles, Amarettini, Café de Lait, Crema</p>
            </div>
        </div>
    `;
    contentEl.appendChild(menuCard);
}