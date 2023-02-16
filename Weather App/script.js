const APIkey = "0fa2ada3c45f66f6c056f42cb8bdca58";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


// 1 WAY TO FETCH ID:

// const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";

// async function getWeatherByLocation(location) {
//     const resp = await fetch(APIURL + 'location&appid='+ APIkey);
//     const responseData = await resp.json();

//     console.log(responseData);
// }
// getWeatherByLocation("thane");


// 2 WAY TO FETCH ID:
const APIURL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;


async function getWeatherByLocation(city) {
    const resp = await fetch(APIURL(city));
    const responseData = await resp.json();

    console.log(responseData);

    addWeatherToPage(responseData);
}


function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
            />${temp}°C
            <img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
            />
        </h2>
        <small>${data.weather[0].main}</small>
        `;

    // Cleanup
    main.innerHTML = "";

    main.appendChild(weather);
}

// Converting tempreature Kelvin to Celicus
function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});

