import './style.css';
import { getWeather } from './weather';
'use strict';


const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', getWeather);