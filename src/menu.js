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

    const pasta = document.createElement('div');
    pasta.textContent = "fancy pasta dish"
    pasta.classList.add('pasta');
    layout.appendChild(pasta);


    const lobster = document.createElement('div');
    lobster.textContent = "Lobster Tail"
    lobster.classList.add('lobster');
    layout.appendChild(lobster);
    
    return contentDiv;

}


