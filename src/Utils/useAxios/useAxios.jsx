
import axios from 'axios';
import { useEffect, useState } from 'react';


const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather/',
  });


function useAxios(cityName) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        (async ()=>{
           try {
             setLoading(true)
             const response = await instance.get(`?q=${cityName}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
             setData(response.data)
             setLoading(false)
           } catch (err) {
                setLoading(false);
                setError(true)
                console.log(`Error :- ${err}`)
           }
        })()
    },[cityName, error])

  return {data,loading,error}
  // console.log(data)

}

export default useAxios;