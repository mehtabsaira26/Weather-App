function getWeather() {

    document.querySelector(".weather-info").style.display = "block";

    const cityName = document.querySelector("input").value;

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d3b684f2d3139cbfdf43db3f2b8e6b40&units=metric`,
        success: function (data) {
            console.log(data);
            
            var iconcode = data.weather[0].icon;
            var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
            $('#wicon').attr('src', iconurl);

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = data.main.temp;
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = data.main.temp_min;
            document.querySelector(".max").innerHTML = data.main.temp_max;

        },
        error: function (err) {
            alert("Try Again Spelling Check!!!!");
        }
    });

}
