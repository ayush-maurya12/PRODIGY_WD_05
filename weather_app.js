const apikey="5a6043984607d2235b45893f9beeddeb";
const form=document.querySelector("button");
form.addEventListener('click',(e)=>{
    e.preventDefault();
    const cityname=document.getElementById("city").value;
    getwether(cityname);
})
async function getwether(cityName){
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName},&APPID=${apikey}`;
    console.log("wait");
    const response=await fetch(url);{     
    const data=await response.json();
    showWether(data);
}
}
function showWether(data){
    let imgicon="http://openwethermap.org/img/w/"+data.weather[0].icon+".png";
    console.log(data);
    city.value="";
    document.querySelector("#deg").innerText=Math.round(data.main.temp-273.15)+'°c';
    document.querySelector("#name").innerText=data.name;
    document.querySelector("#wind-km").innerText=data.wind.speed+" km/h";
    document.querySelector("#hum-per").innerText=data.main.humidity+" %";
    if(data.weather[0].main=="Rain"){
        image.src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5626413/cloud-rain-clipart-md.png";
    }else if(data.weather[0].main=="Clouds"){
        image.src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3271173/blue-clouds-icon-md.png";
    }else if(data.weather[0].main=="Clear"){
        image.src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7816601/sun-clipart-md.png";
    }else{
        image.src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47919/sun-behind-rain-cloud-emoji-clipart-sm.png";
    }
}