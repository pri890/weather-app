let weather = {
    "apiKey": "b4788c36a75bab541e65f28779afaada", //to access weather
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
};

document.querySelector(".search button").addEventListener("click", function () {  //this will get the content of the search bar
    weather.search();
  });

  document.querySelector(".search-bar").addEventListener("keyup", function (event) {   //enter key will also work now
    if (event.key == "Enter") {
        weather.search();
      }
  });

  weather.fetchWeather("Chandigarh");  //until we ask for the weather, this would be a dummy weather 

