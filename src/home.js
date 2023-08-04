export default createHomePage;


//Create a module called createHomePage
function createHomePage() {
    //Create a element for the div#content so I can access it.
    const contentDiv = document.getElementById('content');

    //Wipes everything from the previous page.
    contentDiv.textContent = ""; 

    const welcome = document.createElement('h1');
    welcome.textContent = "Welcome To Flavors of Gaia"
    contentDiv.appendChild(welcome);
    welcome.classList.add('welcome');

    const pic = document.createElement('img');
    contentDiv.appendChild(pic);
    pic.src = "../dist/imgs/food.png"
    pic.classList.add('fancyPic')

    const disc = document.createElement('p');
    disc.textContent = "Welcome to Flavors of Gaia, where gastronomy meets nature! Our restaurant takes pride in crafting exceptional dishes using the freshest, locally-sourced ingredients from the bountifullands of Gaia. Situated amidst lush greenery and adorned with natural decor, Flavors of Gaia offers a unique dining experience that blends the richness of Mother Earth with culinary delights."
    contentDiv.appendChild(disc);
    disc.classList.add('disc')

    const nav = document.getElementById('home-btn');
    nav.classList.add('selectedNav');


    return contentDiv;

}

