/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import UserInput from "../UserInnput/UserInput";
import humidity from "../../assets/humidity.png";
import wind from "../../assets/wind.png";
function WeatherCard({ details,cityNameHandler }) {
  return (
    <>
      <div className="card glass w-96 h-[60%] text-[#484848] shadow-2xl">
        <UserInput cityNameHandler={cityNameHandler} />
        <div className="relative w-full h-[60%]">
          <figure className="w-[50%] absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <img className="w-full h-full" src={details.icon} alt="car!" />
          </figure>
          <div className="text-center absolute bottom-[0%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h2 className="text-4xl text-[#3f3f3f]">{details.temp}°C</h2>
            <h1 className="text-2xl">{details.name}</h1>
          </div>
        </div>
        <div className="card-body ">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-3">
              <img src={humidity} alt="humidity" />
              <div className="">
                <p>{details.humidity}%</p>
                <h3>Humidity</h3>
              </div>
            </div>
            <div className="flex items-center gap-3"> 
              <img src={wind} alt="wind" />
              <div className="">
                <p>{details.speed} Km/h</p>
                <h3>Wind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
