import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Loader from "./components/Loaders/Loader";
import ErrorCard from "./components/ErrorCard/ErrorCard";
import useAxios from "./Utils/useAxios/useAxios";
import { iconImage } from "./Utils/IconCodes/iconsCodes";

function App() {
  const [details, setDetails] = useState([]);
  const [cityName, setCityName] = useState("mumbai");
  const { data, loading, error } = useAxios(cityName);

  useEffect(() => {
    // this condition set so that we data is there then run
    if (data && data.coord) {
      setDetails({
        "name": data.name,
        'coord': {
          'lat': data.coord.lat,
          'lon': data.coord.lon,
        },
        'weather': data.weather[0].description,
        'icon': iconImage[`${data.weather[0].icon}`],
        'humidity': data.main.humidity,
        'temp': data.main.temp,
        'feels': data.main.feels_like,
        'speed': data.wind.speed,
      });
    }
  }, [data]);

  if (error) {
    return <ErrorCard />;
  }

  return (
    <>
      <div className="bg-Background w-full bg-no-repeat bg-cover bg-center h-screen flex justify-center items-center  ">
        {loading ? <Loader /> : <WeatherCard details={details} cityNameHandler={setCityName}/>}
      </div>
    </>
  );
}

export default App;
