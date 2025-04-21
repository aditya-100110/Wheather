const API_KEY = '23c916058c3de9401b24e367acec4b67';
const WEATHER_URL='https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric';



    const submitbtn=document.querySelector('.butn');
     const weatherInfo=document.querySelector('.weatherInfo');
    submitbtn.addEventListener('click',fetchweather)
    const loading=document.querySelector('.loading');
    
    async function fetchweather(){
        const input=document.querySelector('.inp');
        
        const cityName=input.value;
        

        loading.style.display='block';
        
        weatherInfo.innerHTML="";
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data= await response.json();
        if(data.cod==404){
          alert("Invalid city entered");
          loading.style.display="none";
          return;
        }
        
            const citytemp=data.main.temp;
            const citycondition=data.weather[0].main;
            const windspeed=data.wind.speed;
            const feels=data.main.feels_like;
            const humidity=data.main.humidity;

            weatherInfo.innerHTML=`
            <div class="city">${cityName}</div>
              <div class="temperature">${citytemp}</div>
              <div class="condition">${citycondition}</div>
        
              <div class="other_conditions">
            <div class="humidity">Humidity ${humidity}</div>
                <div class="wind_spd">Wind Speed ${windspeed}</div>
                <div class="feels">Feels like ${feels}</div>
              </div>`
              loading.style.display='none';
            };
