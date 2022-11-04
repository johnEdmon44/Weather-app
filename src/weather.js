'use strict';

const searchValue = document.querySelector('#search').value;


export async function getWeather(e) {
  e.preventDefault();
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0164ece586b7dbc287defd4546d1e821&units=metric`, {mode: 'cors'});
    const data = await response.json();
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}