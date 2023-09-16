import { useState, useEffect } from 'react';
import '../css/Weather.css';

export const Weather = () => {
    const API_KEY = "163c2c5f76b523d8d2147930060e9bb9";
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState('Seoul');

    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`);
                const data = await response.json();
                setForecast(data.list);
            } catch (error) {
                console.error('Error fetching the weather data', error);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            }, () => {
                fetchWeatherByCity('Seoul');
            });
        } else {
            fetchWeatherByCity('Seoul');
        }
    }, []);

    const fetchWeatherByCity = (selectedCity) => {
        setCity(selectedCity);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric&lang=kr`)
            .then(response => response.json())
            .then(data => {
                setForecast(data.list);
            })
            .catch(error => console.error('Error fetching the weather data', error));
    }

    const handleCityChange = (event) => {
        fetchWeatherByCity(event.target.value);
    }

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(startOfDay.getDate() + 1);

    const todayForecast = forecast.filter(entry => {
        const entryDate = new Date(entry.dt_txt.replace(" ", "T"));
        return entryDate >= startOfDay && entryDate < endOfDay;
    });

    const subsequentForecast = forecast.filter(entry => {
        const entryDate = new Date(entry.dt_txt.replace(" ", "T"));
        return entryDate >= endOfDay;
    });

    //요일
    const getKoreanDayOfWeek = (dateStr) => {
        const date = new Date(dateStr);
        date.setUTCHours(date.getUTCHours() +9); // UTC 기준으로 9시간 뺌
        const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];
        return daysInKorean[date.getUTCDay()];
    }

return (
    <div className="Weather-Wrap">
        <h1 className="Title">날씨정보페이지</h1>
      
            <select value={city} onChange={handleCityChange}>
                <option value="Seoul">서울</option>
                <option value="Busan">부산</option>
                <option value="Incheon">인천</option>
                <option value="Daegu">대구</option>
                <option value="Daejeon">대전</option>
                <option value="Gwangju">광주</option>
                <option value="Suwon">수원</option>
                <option value="Ulsan">울산</option>
                <option value="Seongnam">성남</option>
                <option value="Goyang">고양</option>
                <option value="Yongin">용인</option>
                <option value="Bucheon">부천</option>
                <option value="Ansan">안산</option>
                <option value="Jeju">제주</option>
                <option value="Anyang">안양</option>
                <option value="Gimhae">김해</option>
                <option value="Pohang">포항</option>
                <option value="Cheongju">청주</option>
            </select>

            <div className='forecast-row'>
                {todayForecast.map((entry, index) => (
                    <div key={index} className="forecast-entry">
                        <div className='forecast_text'>시간: {entry.dt_txt.split(" ")[1].slice(0, 5)}</div>
                        <div className='forecast_text'>온도: {entry.main.temp}°C</div>
                        <div className='forecast_text'>날씨: {entry.weather[0].description}</div>
                        <img src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}.png`} alt={entry.weather[0].description} />
                    </div>
                ))}
        </div>

            <div className='forecast-col'>
                {subsequentForecast.map((entry, index) => (
                    <div key={index} className="forecast-entry">
                 <div className='forecast_text'>요일: {getKoreanDayOfWeek(entry.dt_txt)}</div>
                        <div className='forecast_text'>시간: {entry.dt_txt.split(" ")[1].slice(0, 5)}</div>
                        <div className='forecast_text'>온도: {entry.main.temp}°C</div>
                        <div className='forecast_text'>날씨: {entry.weather[0].description}</div>
                        <img src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}.png`} alt={entry.weather[0].description} />
                    </div>
                ))}
            </div>
        </div>
    );
}