const APIKey = "9e799288eb703993351e1abd9d71315f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Cannot find you, No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//