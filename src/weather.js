'use strict';

export function submit(e) {
  e.preventDefault();
  getWeather();
}

async function getWeather() {
  const searchValue = document.querySelector('#search').value;

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0164ece586b7dbc287defd4546d1e821&units=metric`, {mode: 'cors'});
    const data = await response.json();
    
    const condition = data['weather'].map(x => x.description)
    document.querySelector('#location').textContent = `${data['sys']['country']}, ${data['name']}`;
    document.querySelector('#cloud').textContent = condition;
    document.querySelector('#temp').textContent = data['main']['temp'];
    document.querySelector('#feels-like').textContent = `Feels like: ${data['main']['feels_like']}`;
    document.querySelector('#humidity').textContent = `Humidity: ${data['main']['humidity']}%`
    document.querySelector('#wind').textContent = `Wind: ${data['wind']['speed']}mph`

    console.log(condition)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}