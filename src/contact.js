export default createContactPage; 

function createContactPage(){
    //Create a element for the div#content so I can access it.
    const contentDiv = document.getElementById('content');
    
    //Wipes everything from the previous page.
    contentDiv.textContent = ""; 
   
    const telephone = document.createElement('p');
    telephone.textContent = "Telephone number: 555-444-3223"
    contentDiv.appendChild(telephone);
    
    return contentDiv;

}
