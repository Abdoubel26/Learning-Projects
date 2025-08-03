const input = document.getElementById("inputcity");
const form = document.getElementById("form");
const card = document.getElementById("card");
const errorp = document.getElementById("errorp");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const weatherdesc = document.getElementById("weatherdesc");
const imoji = document.getElementById("imoji");


const apiKey = "8c24c2f4a585f9a8db73893fd30c74c5";


form.addEventListener('submit', async event => {

    event.preventDefault();

    let cityN = input.value;

    if(cityN) { 
        let weatherdata = await getWeatherdata(cityN);
        displayWeatherinfo(weatherdata);
    }
    else {
        displayerror('Please Enter a city name!');
    }

})


async function getWeatherdata(city) {

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    if(!result.ok){
        errorp.classList.remove('hidden');
        displayerror("Please Enter a Valid City");
    }
    else {
        let data = await result.json();
        console.log(data);
        return data;
    }
}

function displayWeatherinfo(data) {
    card.style.display = "flex";
    imoji.classList.remove('hidden');
    cityName.classList.remove('hidden');
    humidity.classList.remove('hidden');
    weatherdesc.classList.remove('hidden');
    temp.classList.remove('hidden');
    errorp.classList.add('hidden');
    cityName.textContent = data.name;
    let temperature = Math.trunc((data.main.temp) - 273.15)
    temp.textContent = `${temperature}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherdesc.textContent = `${data.weather[0].description}`;
    let Emojidisplay = setEmoji(data.weather[0].id);
    console.log(data.weather[0].id);
    imoji.textContent = `${Emojidisplay}`;

}

function setEmoji(id) {
    

    switch(true) {
        case (id >= 200 && id <= 232):
            return '⛈️'
            break;
        
        case (id >= 300 && id <= 321):
            return '🌧️'
            break;
        
        case (id >= 500 && id <= 531):
            return '☔'
            break;
        
        case (id >= 600 && id <= 622):
            return '❄️'
            break;

        case (id >= 701 && id <= 781 ):
            return '🌫️'
            break;
        case (id == 800 ):
            return '☀️'
            break;
        case (id >= 801 && id <= 804):
            return '☁️'
            break;
        default:
            return '❓'
        
    }
}

function displayerror(message) {
    card.style.display = "flex";
    imoji.classList.add('hidden');
    cityName.classList.add('hidden');
    humidity.classList.add('hidden');
    weatherdesc.classList.add('hidden');
    temp.classList.add('hidden')

    errorp.textContent = `${message}`
}

