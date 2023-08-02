import _ from 'lodash';
import './style.css';
import Icon from './imgs/food.png';
import myName from './pageLoad';
import navHeader from './pageLoad';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());




   