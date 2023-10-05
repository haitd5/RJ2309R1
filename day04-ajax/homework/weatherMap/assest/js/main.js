function getWeather(){
    const apiKey = 'd3acca485c81c4ef3f2dc130de8f9ba6';
    

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;

    fetch(apiURL, {
        method: 'GET',
    })
    .then(function(response){
        return response.json();
    })
    .then(function(weatherRes){
        displayWeather(weatherRes);
    })


    .catch(function(err){
        console.error('Error fetching weather data:', err);
    })
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `

        <h2>Tên thành phố ${weatherData.name}</h2>
        <h2>Tại vị trí kinh độ ${weatherData.coord.lon}, Vĩ độ ${weatherData.coord.lat}</h2>
        <p>Thời tiết: ${weatherData.weather.main}</p>
        <p>Mô tả: ${weatherData.weather.description}</p>
        <p>Tham số nội bộ: ${weatherData.base}%</p>
        <p>Nhiệt độ: ${weatherData.main.temp} F</p>
        <p>Nhiệt độ: ${weatherData.main.feels_like} F</p>
        <p>Nhiệt độ: ${weatherData.main.pressure} hPa</p>
        <p>Độ ẩm: ${weatherData.main.humidity} %</p>
        <p>Nhiệt độ tối thiểu tại thời điểm này: ${weatherData.main.temp_min} %</p>
        <p>Nhiệt độ tối đa tại thời điểm này: ${weatherData.main.temp_max} %</p>
        <p>Áp suất khí quyển trên mực nước biển: ${weatherData.main.sea_level} hPa</p>
        <p>Áp suất khí quyển trên mặt đất: ${weatherData.main.grnd_level} hPa</p>
        <p>Tốc độ gió: ${weatherData.wind.speed} dặm/giờ</p>
        <p>Hướng gió: ${weatherData.wind.deg}</p>
        <p>Mây: ${weatherData.clouds.all} %</p>
        <p>Lượng mưa trong 1 giờ qua: ${weatherData} %</p>
        <p>Mây: ${weatherData.clouds.all} %</p>
        <p>Mây: ${weatherData.clouds.all} %</p>

    `;
}
getWeather();