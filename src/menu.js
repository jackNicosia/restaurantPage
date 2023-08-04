export default createMenuPage; 

function createMenuPage(){
    //Create a element for the div#content so I can access it.
    const contentDiv = document.getElementById('content');

    //Wipes everything from the previous page.
    contentDiv.textContent = ""; 

    //make a grid to layout the menu pages contents
    const layout = document.createElement('div');
    layout.classList.add('menuLayout');
    contentDiv.appendChild(layout);

    //Pasta Dish
    const pasta = document.createElement('div');
    pasta.textContent = "Pasta Primavera Paradiso"
    pasta.classList.add('menuDiv');
    layout.appendChild(pasta);
    const pastaImg = document.createElement('img');
    pastaImg.src = "imgs/pasta.png"
    pasta.appendChild(pastaImg);
    pastaImg.classList.add('menuImg');
    const pastaDisc = document.createElement('p');
    pastaDisc.textContent = "Colorful seasonal vegetables, lemon-infused linguine."
    pastaDisc.classList.add('menuDisc');
    pasta.appendChild(pastaDisc);

    //Lobster Dish
    const lobster = document.createElement('div');
    lobster.textContent = "Gaia's Coastal Catch"
    lobster.classList.add('menuDiv');
    layout.appendChild(lobster);
    const lobsterImg = document.createElement('img');
    lobsterImg.src = "imgs/lobster.png"
    lobster.appendChild(lobsterImg);
    lobsterImg.classList.add('menuImg');
    const lobsterDisc = document.createElement('p');
    lobsterDisc.textContent = "Fresh lobster poached in saffron broth, served with potatoes and asparagus."
    lobsterDisc.classList.add('menuDisc');
    lobster.appendChild(lobsterDisc);

    //Truffle Dish
    const truffle = document.createElement('div');
    truffle.textContent = "Earthy Truffle Risotto"
    truffle.classList.add('menuDiv');
    layout.appendChild(truffle);
    const truffleImg = document.createElement('img');
    truffleImg.src = "imgs/truffle.png"
    truffle.appendChild(truffleImg);
    truffleImg.classList.add('menuImg');
    const truffleDisc = document.createElement('p');
    truffleDisc.textContent = "Creamy Arborio rice infused with truffle essence."
    truffleDisc.classList.add('menuDisc');
    truffle.appendChild(truffleDisc);

    //Garden Dish
    const garden = document.createElement('div');
    garden.textContent = "Garden Harvest Galette"
    garden.classList.add('menuDiv');
    layout.appendChild(garden);
    const gardenImg = document.createElement('img');
    gardenImg.src = "imgs/garden.png"
    garden.appendChild(gardenImg);
    gardenImg.classList.add('menuImg');
    const gardenDisc = document.createElement('p');
    gardenDisc.textContent = " Savory galette with roasted veggies and goat cheese."
    gardenDisc.classList.add('menuDisc');
    garden.appendChild(gardenDisc);

    //Lamb Dish
    const lamb = document.createElement('div');
    lamb.textContent = "Himalayan Spiced Lamb Chops"
    lamb.classList.add('menuDiv');
    layout.appendChild(lamb);
    const lambImg = document.createElement('img');
    lambImg.src = "imgs/lamb.png"
    lamb.appendChild(lambImg);
    lambImg.classList.add('menuImg');
    const lambDisc = document.createElement('p');
    lambDisc.textContent = "Tender lamb chops with aromatic spices and turmeric couscous."
    lambDisc.classList.add('menuDisc');
    lamb.appendChild(lambDisc);

    //Berry Dish
    const berry = document.createElement('div');
    berry.textContent = "Forest Berry Delight"
    berry.classList.add('menuDiv');
    layout.appendChild(berry);
    const berryImg = document.createElement('img');
    berryImg.src = "imgs/berry.png"
    berry.appendChild(berryImg);
    berryImg.classList.add('menuImg');
    const berryDisc = document.createElement('p');
    berryDisc.textContent = "Fresh forest berries on vanilla bean panna cotta."
    berryDisc.classList.add('menuDisc');
    berry.appendChild(berryDisc);


    
    return contentDiv;

}


