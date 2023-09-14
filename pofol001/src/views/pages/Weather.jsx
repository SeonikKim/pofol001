import { useState, useEffect } from 'react';
import '../css/Weather.css';

export const Weather = () => {
    const API_KEY = "163c2c5f76b523d8d2147930060e9bb9";
    const [forecast, setForecast] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
            }, () => {
                // 위치 정보를 가져오지 못한 경우 기본 도시로 서울을 설정합니다.
                fetchWeatherByCity('Seoul');

            });
        } else {
            // Geolocation을 지원하지 않는 브라우저인 경우
            fetchWeatherByCity('Seoul');
        }
    }, []);

    const fetchWeatherByCoords = (lat, lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
            .then(response => response.json())
            .then(data => setForecast(data.list))
            .catch(error => console.error('Error fetching the weather data', error));
    }

    const fetchWeatherByCity = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=kr`)
            .then(response => response.json())
            .then(data => setForecast(data.list))
            .catch(error => console.error('Error fetching the weather data', error));
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
        fetchWeatherByCity(event.target.value);
    }
    const NameToKor = {
        "Seoul": "서울",
        "Busan": "부산",
        "Incheon": "인천",
        "Daegu": "대구",
        "Daejeon": "대전",
        "Gwangju": "광주",
        "Suwon": "수원",
        "Ulsan": "울산",
        "Seongnam": "성남",
        "Goyang": "고양",
        "Yongin": "용인",
        "Bucheon": "부천",
        "Ansan": "안산",
        "Jeju": "제주",
        "Anyang": "안양",
        "Gimhae": "김해",
        "Pohang": "포항",
        "Cheongju": "청주"
    };
    
    const getKoreanDayOfWeek = (dateStr) => {
        const date = new Date(dateStr);
        const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];
        return daysInKorean[date.getUTCDay()];
    }
    
    return (
        <div className="MainWrap">
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

            <div className='forecast_text'>선택 위치: {NameToKor[city]}</div>
            {forecast ? (
                forecast.map((entry, index) => (
                    <div key={index} className="forecast-entry">
                        <div className='forecast_text'>요일: {getKoreanDayOfWeek(entry.dt_txt)}</div>
                        <div className='forecast_text'>시간: {entry.dt_txt.split(" ")[1].slice(0, 5)}</div>
                        <div className='forecast_text'>온도: {entry.main.temp}°C</div>
                        <div className='forecast_text'>날씨: {entry.weather[0].description}</div>
                        <img src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}.png`} alt={entry.weather[0].description} />
                    </div>
                ))
            ) : (
                <p>날씨 데이터를 가져오는 중...</p>
            )}
        </div>
    );
}
