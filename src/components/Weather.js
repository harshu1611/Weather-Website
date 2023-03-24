import React from 'react'


export default function weather(props) {
    const weather=props.weather;
    const heading=props.heading;
    const feels=props.feels;
    const min=props.min;
    const max=props.max;
    const humidity=props.humidity;
    const wind=props.wind;
    const main=props.main;

  return (
    <div>
        <h1 id="heading">{heading}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4" id="weatherCards">
  <div className="col">
    <div className="card-bs-card-color">
      <img src="/Weather-Website/temperature.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Temperature:</h5>
        <p className="card-text">{weather} °Celsius</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card-bs-card-color">
      <img src="/Weather-Website/feels.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Feels Like</h5>
        <p className="card-text">{feels} °Celsius</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card-bs-card-color">
      <img src="/Weather-Website/minimum.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Minimum Temperature</h5>
        <p className="card-text">{min} °Celsius</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card-bs-card-color">
      <img src="/Weather-Website/maximum.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Maximum Temperature</h5>
        <p className="card-text">{max} °Celsius</p>
      </div>
    </div>
  </div>
</div>

<div className="row row-cols-1 row-cols-md-2 g-2" id="weatherCards2">
  <div className="col">
    <div className="card-bs-card-color-humidity">
      <img src="/Weather-Website/humidity.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Humidity:</h5>
        <p className="card-text">{humidity} %</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card-bs-card-color">
      <img src="/Weather-Website/wind.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Wind Speed</h5>
        <p className="card-text">{wind} Km/h</p>
      </div>
    </div>
  </div>
  
  
</div>

    </div>
  )
}
