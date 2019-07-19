const cityLocation=document.querySelector('.location');
const cardImage=document.querySelector('.card');
const detail=document.querySelector('.details');
const time=document.querySelector('.time');
const icon=document.querySelector('.icon');

const addImage=(data)=>{
    const details=data.details;
    const weather=data.weather;
    //console.log(details.EnglishName,weather.WeatherText,weather.Temperature.Metric.Value);
    detail.innerHTML=`
         <h5 class="my-3">${details.EnglishName}</h5>
         <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;
        let times=null;
        if(weather.IsDayTime){
            times='img/sunny.png';
        }else{
            times='img/night.png'
        }
        time.setAttribute('src',times);
    //d-none
    if(cardImage.classList.contains('d-none')){
        cardImage.classList.remove('d-none');
    }
}

const updateCity=async (city)=>{
    //console.log(city);
    const details=await getCity(city);
    const weather=await getWeather(details.Key);
    return {
        details,
        weather
    };
};
cityLocation.addEventListener('submit',e=>{
    e.preventDefault();
    const city=cityLocation.city.value.trim();
    cityLocation.reset();

    updateCity(city)
    .then(data=>/*console.log(data)*/ addImage(data))
    .catch(err=>console.log(err));

    localStorage.setItem('city',city);
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>addImage(data))
    .catch(err=>console.log(err));
}

