import './style.css';
import { submit } from './weather';

'use strict';


const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', submit);