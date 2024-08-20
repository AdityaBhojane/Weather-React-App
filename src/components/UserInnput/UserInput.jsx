import { useState } from "react";

/* eslint-disable react/prop-types */
function UserInput({cityNameHandler}) {
  const [cityName,setCityName] = useState('')
  return (
    <>
      <label className="input input-primary border-[1px] border-[#444444] text-[#5c5c5c] flex items-center gap-2 m-5 mx-10 bg-transparent text-xl">
        <input 
        value={cityName}
        onChange={(e)=>setCityName(e.target.value)}
        type="text" 
        className="grow placeholder:text-[#5c5c5c] " 
        placeholder="Search" />
        <svg
          onClick={()=>{
            if(cityName == ''){
              alert("Please enter city name");
              return
            }
            cityNameHandler(cityName)
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 opacity-70 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );
}

export default UserInput;
