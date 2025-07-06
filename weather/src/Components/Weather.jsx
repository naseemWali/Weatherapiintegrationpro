import { FaSearch } from "react-icons/fa";
import sun from '../assets/sun.jpg'
import { WiHumidity } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";


const Weather = () => {
    return (
      <div className='place-self-center p-40 flex  items-center flex-col'>
      <div className='flex items-center gap-3'>
      <input type="text" placeholder='Search' className="border-2 md:h-18  md:w-100   w-60 h-12 rounded-full  outline text-black text-4xl bg-white"/>
      <span className="md:w-12 md:h-12  h-10 w-10 rounded-full bg-white  fleex items-center justify-center flex"><FaSearch/></span>
        </div>    

        <div className="">
       <img src={sun} alt="sun"  className="w-[150px] rounded-2xl mt-8"/>
        </div>
        <h2 className="text-5xl">16°C</h2>
        <p className="text-6xl">London</p>

        <div className="  w-[100%] mt-1.5 flex justify-between">
        <div className="flex">
         <WiHumidity className="h-20 w-20"/>
         <div>
          <h2 className="text-3xl">91%</h2>
          <span className="text-2xl">Humidity</span>
         </div>

        </div>  

        <div className=" flex">
        <WiWindy className="h-20 w-30"/>
         <div>
          <p className="text-3xl">3.6 km/h</p>
          <span className="text-2xl">wind speed</span>
         </div>

        </div>  

       </div>

      
       
          </div>
    );
} 

export default Weather;
