/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: " Sadie Bybee",
    photo: "images/photo.png",
    favoriteFoods: [
        'Chicken',
        'Soup',
        'Fajitas',
        'Fries',
        'Brownies'
    ],
    hobbies: [
        'Piano',
        'Watercolor',
        'Swimming'
    ]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [
    {
        place: 'Farmington, UT',
        length: '19 years'
    },
    {
        place: 'Lansing, MI',
        length: '18 months'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
];

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);

document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyElem);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;

    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})

