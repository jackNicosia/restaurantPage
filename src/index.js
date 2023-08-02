import _ from 'lodash';
import './style.css';
import Icon from './imgs/food.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

   /* const myPicture = new Image();
    myPicture.src = 
*/



    return element;
  }
  
  document.body.appendChild(component());