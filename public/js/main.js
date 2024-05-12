


const submitBtn =document.getElementById('submitBtn');



const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const tempreal_valu = document.getElementById('tempreal_valu');
const temp_status = document.getElementById('temp_status');


const datahide = document.querySelector('.middle-layer');

const getinfo = async (event)=>{
    event.preventDefault();
   
    let cityval = cityName.value;

    if(cityval ===""){
       
        city_name.innerText = `Plz write the name before search`;
         datahide.classList.add('data_hide');
    }
    else{
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=6bd3423a2ac24cb1f18aa784336966cc`

      const response = await fetch(url);

      const data = await response.json() //json me data ko krna

      const arrData = [data] 
      //data ko arr me krna

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
       // api me se name or sys me se country ko liya gya
       tempreal_valu.innerText = arrData[0].main.temp; 
       //api 0 index pe ke arry  me main ke andar tepm he use liya gya he 
        const tempmood = arrData[0].weather[0].main //api 0 index pe arry me wether ke aandr main ko le

      if(tempmood === "Clear"){
        temp_status.innerHTML =
        "<img src=../img/sun.png , style=' width: 50px;height: 40px;'>";
        
        

      }
      else if(tempmood === "Cloud"){
        temp_status.innerHTML =
        "<img src=../img/cloud.png , style=' width: 50px;height: 40px;'>";
      }
      else if(tempmood === "Rain"){
        temp_status.innerHTML =
        "<img src=../img/storm.png , style=' width: 50px;height: 40px;'>";
      }
      else{
        temp_status.innerHTML =
        "<img src=../img/sun.png , style=' width: 50px;height: 40px;'>";
      }
      datahide.classList.remove('data_hide');

       }catch{
        city_name.innerText = `Plz write the city name properly`;
        datahide.classList.add('data_hide');
       }

    }
}

submitBtn.addEventListener('click',getinfo);


