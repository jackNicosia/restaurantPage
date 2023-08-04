import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";



const createTabs = () => {
    const content = document.querySelector('#navDiv');
     //Create a ul named element.   
     const element = document.createElement('ul');
     content.appendChild(element);
     element.classList.add('nav')
 
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

     home.setAttribute('id', 'home-btn');
     menu.setAttribute('id', 'menu-btn');
     contact.setAttribute('id', 'contact-btn');

    home.addEventListener('click', () => {
        createHomePage();
    })
    menu.addEventListener('click', () => {
        createMenuPage();
    })
    contact.addEventListener('click', () => {
        createContactPage();
    })



  // Get all the navigation items
  const navItems = document.querySelectorAll('nav ul li');

  // Add a click event listener to each item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove the "selected" class from all items
      navItems.forEach(item => {
        item.classList.remove('selectedNav');
      });

      // Add the "selected" class to the clicked item
      item.classList.add('selectedNav');
    });
  });









}

export default createTabs;