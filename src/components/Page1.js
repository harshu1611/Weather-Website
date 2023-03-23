import React, { useState }  from 'react'
import  {component} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import Weather from './Weather';
import{
  Link
} from "react-router-dom";




export default function Page1() {
  
  const[form,setForm]=useState("");
  const handleonChange=(event)=>{
    setForm(event.target.value);
  }
  const[entered,setEntered]=useState("");
  
  const Submit=()=>{
    if(form===""){
  
      alert('Please enter City');

    }
    setEntered(form);
  }
  const[mode,setMode]=useState('light');
  const[modeTitle,setModeTitle]=useState('Light');
  const[weather,setWeather]=useState("City Not Entered");
  const[feels,setFeels]=useState("City Not Entered");
  const[min,setMin]=useState("City Not Entered");
  const[max,setMax]=useState("City Not Entered");
  const[humidity,setHumidity]=useState("City Not Entered");
  const[wind,setWind]=useState("City Not Entered");
  const[main,setMain]=useState('');


  let url=`https://api.openweathermap.org/data/2.5/weather?q=${form}&units=metric&appid=cbb5ff06d459a15d93e615ba2cbe7613`;
  
  const[heading,setHeading]=useState("Please Enter City");
  const getHeading=()=>{
    if(form!==""){
      document.getElementById("heading").style.marginLeft="-8vw";
      setHeading(`Weather Report For ${form} is:`);
    }
  }
  const changeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setModeTitle('Dark');
      document.body.style.backgroundColor="white";
      // document.body.style.color="black";
      document.getElementById("headingPage1").style.color="black";
      document.getElementById("formLabel").style.color="black";
      document.getElementById("heading").style.color="black";

      document.getElementById("weatherCards").style.color="black";
      document.getElementById("weatherCards2").style.color="black";
      document.getElementById("exampleFormControlInput1").style.backgroundColor="#282c34";
      document.getElementById("exampleFormControlInput1").style.color="white";
      document.getElementById("footer").style.backgroundColor="#282c34";
      document.getElementById("footer").style.color="white";


  }
  if(mode==='dark'){
    setMode('light');
    setModeTitle('Light');
    document.body.style.backgroundColor="#282c34";
    // document.body.style.color="black";
    document.getElementById("headingPage1").style.color="white";
    document.getElementById("formLabel").style.color="white";
    document.getElementById("heading").style.color="white";

    document.getElementById("weatherCards").style.color="white";
    document.getElementById("weatherCards2").style.color="white";
    document.getElementById("exampleFormControlInput1").style.backgroundColor="white";
    document.getElementById("exampleFormControlInput1").style.color="black";
    document.getElementById("footer").style.backgroundColor="white";
      document.getElementById("footer").style.color="black";
}
}

  const getApi=()=>{
    Submit();
    getHeading();
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setWeather(data.main.temp);
      setFeels(data.main.feels_like);
      setMin(data.main.temp_min);
      setMax(data.main.temp_max);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setMain(data.weather[0].main);
    })
    .catch=(err)=>{
      console.log("Server Down",err);
    }
   

  }

 
  return (
    <div>
      <button type="button" className="btn btn-primary" id="modeButton"onClick={changeMode}>{modeTitle} Mode</button>        
        
        <h1 id="headingPage1"> Weather On GO </h1>
        <label htmlfor="exampleFormControlInput1" className="form-label" id="formLabel">Enter City to Get Weather</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter City" value={form} onChange={handleonChange}></input>
        <button type="button" className="btn btn-primary" onClick={getApi}>Get Weather</button>      
      <Weather weather={weather} heading={heading} feels={feels} min={min} max={max} humidity={humidity} wind={wind} main={main}/>

      <div className="footer" id="footer">
        <p1>Designed and Maintaned by <a href="https://github.com/harshu1611" target="_blank">Harsh Agrawal</a></p1>
        <p id="reference">Powered by: https://openweathermap.org/</p>
      </div>
    </div>
      )
}
