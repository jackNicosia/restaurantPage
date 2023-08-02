export default navHeader;


//Create a module called navHeader
function navHeader() {
//Create a element for the div#content so I can access it.
const contentDiv = document.getElementById('content');
//Create a ul named element.   
const element = document.createElement('ul');
contentDiv.appendChild(element);

//Create a li name home with the inner html of "Home" and then append it to my ul
const home = document.createElement('li');
home.textContent = "Home"
element.appendChild(home);

const menu = document.createElement('li');
menu.textContent = "Menu"
element.appendChild(menu);

const contact = document.createElement('li');
contact.textContent = "Contact"
element.appendChild(contact);

const locations = document.createElement('li');
locations.textContent = "Locations"
element.appendChild(locations);

const ratings = document.createElement('li');
ratings.textContent = "Ratings"
element.appendChild(ratings);

const welcome = document.createElement('h1');
welcome.textContent = "Welcome To Flavors of Gaia"
contentDiv.appendChild(welcome);
welcome.classList.add('welcome');

const disc = document.createElement('p');
disc.textContent = "Welcome to Flavors of Gaia, where gastronomy meets nature! Our restaurant takes pride in crafting exceptional dishes using the freshest, locally-sourced ingredients from the bountifullands of Gaia. Situated amidst lush greenery and adorned with natural decor, Flavors of Gaia offers a unique dining experience that blends the richness of Mother Earth with culinary delights."
contentDiv.appendChild(disc);
disc.classList.add('disc')

const pic = document.createElement('img');
contentDiv.appendChild(pic);
pic.src = "../src/imgs/food.png"
pic.classList.add('fancyPic')
return contentDiv;

}

document.body.append(navHeader());