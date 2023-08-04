export default createContactPage; 

function createContactPage(){
    //Create a element for the div#content so I can access it.
    const contentDiv = document.getElementById('content');

    //Wipes everything from the previous page.
    contentDiv.textContent = ""; 
   
    const contactDiv = document.createElement('div');
    contentDiv.appendChild(contactDiv);
    contactDiv.classList.add('contactDiv');
    const phone = document.createElement('p');
    phone.textContent = "Telephone number: 555-444-3223";
    contactDiv.appendChild(phone);
    const email = document.createElement('p');
    email.textContent = "Email: business@gaia.com";
    contactDiv.appendChild(email);
    const address = document.createElement('p');
    address.textContent = "45 Academy Blvd, South Lake Tahoe, CA"
    contactDiv.appendChild(address);
    
    
    return contentDiv;

}
