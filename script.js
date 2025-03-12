let URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apiKey="a77e2fa93d9f2a3a5b30d6348f8ec032";
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let humidity = document.getElementById("dh");
let wind = document.getElementById("dw");
let search =document.querySelector(".search input");
let btn = document.getElementById("btn");
let image =document.querySelector(".weatherStatus img");
let weatherStatus =document.querySelector(".weatherStatus");
let card =document.querySelector(".card");
let invalid = document.getElementById("invalid");

async function cheackWeather(cityy){
    let response = await fetch (URL+ cityy + `&appid=${apiKey}`);
    let data =  await response.json();
    // console.log(data);
    if (data.cod =="404"){
        invalid.style.display="block";
    }
    else{
        invalid.style.display="none";
        // inner html
    temp.innerHTML = Math.round(data.main.temp )+ "°C";
    city.innerHTML = data.name;
    humidity.innerHTML =data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    

    // changing image
    if(data.weather[0].main =="Clouds"){
        image.src = "cloudy-day-1.svg";
    }
    else if(data.weather[0].main=="Rain"){
        image.src ="rainy-1.svg";
    }
    else if(data.weather[0].main=="Clear"){
        image.src ="day.svg";
    }
    else if(data.weather[0].main=="Snow"){
        image.src ="snowy-1.svg";
    }

    card.style="height :500px;transition:height 0.5s"
    weatherStatus.style.display ="block";
    }
    
}


// function calling.
cheackWeather(search.value);
btn.addEventListener("click",()=>{
    cheackWeather(search.value);
});