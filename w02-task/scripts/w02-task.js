/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName ='Sadie Bybee';

let currentYear = '2024';

let profilePicture = 'images/sadie.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')

const foodElement = document.getElementById('food')

const yearElement = document.querySelector('#year')

document.querySelector('img').setAttribute('src', profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

document.querySelector('#year').textContent = currentYear

/* Step 5 - Array */
const favoriteFoods = ['Chicken', 'Soup', 'Fajitas', 'Fries', 'Brownies'];
document.getElementById('food').textContent = favoriteFoods;

const anotherFavoriteFood = 'Hamburger';

favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;
