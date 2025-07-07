import { FaSearch } from "react-icons/fa";
import sun from '../assets/sun.jpg'
import { WiHumidity } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";
import { useEffect,useRef,useState } from "react";
import { IoSunny } from "react-icons/io5";
import { BsCloudSunFill } from "react-icons/bs";
import { BsClouds } from "react-icons/bs";
import { BsCloudSlashFill } from "react-icons/bs";
import { BsFillCloudSleetFill } from "react-icons/bs";


const Weather = () => {
    const allicons= {
    "o1d":<IoSunny/>,
     "02d":<BsCloudSunFill/>,
      "03d":<BsClouds/>,
       "o4d":<BsCloudSlashFill/>,
       "05d":<BsFillCloudSleetFill/>
  }

  const useref=useRef();
   const [weather,  setWeather] = useState(false);

const search=async(city)=>{
  if (city==='') {
    alert('Please enter a city name')
    return
  }

  try {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
    const response=await fetch(url)
    const data=await response.json()
    console.log(data);
    setWeather({
      humidity:data.main.humidity,
      temperature:Math.floor(data.main.temp),
      wind:data.wind.speed,
      location:data.name,

    })
  } 
  catch (error) {
    console.log(error,'error');
    
  }
}

useEffect(() => {
  
  
  search('')
}, []);
  

    return (
      <div className='place-self-center p-40 flex  items-center flex-col'>
      <div className='flex items-center gap-3'>
      <input type="text" placeholder='Search' className="border-2 md:h-18  md:w-100   w-60 h-12 rounded-full  outline text-black text-4xl bg-white" ref={useref}/>
      <span className="md:w-12 md:h-12  h-10 w-10 rounded-full bg-white  fleex items-center justify-center flex cursor-pointer"><FaSearch onClick={()=>search(useref.current.value)}/></span>
        </div>    

        <div>
       {/* <img  alt="sun"  className="w-[150px] rounded-2xl mt-8"/> */}
       <div>
{weather.icon}
       </div>

        </div>
        <h2 className="text-5xl">{weather.temperature}°C </h2>
        <p className="text-6xl">{weather.location}</p>

        <div className="  w-[100%] mt-1.5 flex justify-between">
        <div className="flex">
         <WiHumidity className="h-20 w-20"/>
         <div>
          <h2 className="text-3xl">{weather.humidity}</h2>
          <span className="text-2xl">Humidity</span>
         </div>

        </div>  

        <div className=" flex">
        <WiWindy className="h-20 w-30"/>
         <div>
          <p className="text-3xl">{weather.wind}km/h</p>
          <span className="text-2xl">wind speed</span>
         </div>

        </div>  

       </div>

      
       
          </div>
    );
} 

export default Weather;
