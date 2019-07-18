const key='ErqeLSbQA6n75Jyhp3BE8bX2hPBvbyMt';
//City Detail
const getCity=async (city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
};
// getCity('varanasi').then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// })
// .catch(err=>console.log(err));

//Get current info
const getWeather=async (id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
}
//getWeather("206681");