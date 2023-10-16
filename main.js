import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`

setupCounter(document.querySelector('#counter'));


document.addEventListener("DOMContentLoaded", function() {
    const locationsList = document.getElementById("locations-list");

    // Load the JSON data from the /public directory
    fetch("/locations.json") // Note the leading slash to indicate the root directory
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.locations.forEach(location => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${location.name}</strong><br>
                                      Latitude: ${location.latitude}<br>
                                      Longitude: ${location.longitude}<br>
                                      Address: ${location.address}<br>
                                      Description: ${location.description}`;
                locationsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error loading JSON data: " + error);
        });
});







