import React from 'react';
import air_filter from "./images/air_filter.jpg";
import break_pad from "./images/break_pad.jpg";
import clutch_bearing from './images/clutch_bearing.jpg';
import clutch_plate from './images/clutch_plate.jpg';
import door_handle from './images/door_handle.jpg';
import engine_oil from './images/engine_oil.jpg';
import ignition from './images/ignition_switch.jpg';
import shock_observer from './images/shock_observer.webp';
import spark_plug from './images/spark_plug.jpg';
import './index.css'

const Parts = () => {
  const parts = [
    { name: 'Air Filter', img: air_filter },
    { name: 'Brake Pad', img: break_pad },
    { name: 'Clutch Bearing', img: clutch_bearing },
    { name: 'Clutch Plate', img: clutch_plate },
    { name: 'Door Handle', img: door_handle },
    { name: 'Engine Oil', img: engine_oil },
    { name: 'Ignition Switch', img: ignition },
    { name: 'Shock Observer', img: shock_observer },
    { name: 'Spark Plug', img: spark_plug },
  ];

  return (
    <div className="parts-container">
      <h1>Parts</h1>
      <div className="cards-container">
        {parts.map((part, index) => (
          <div key={index} className="part-card">
            <img src={part.img} alt={part.name} className="part-img" />
            <h2>{part.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
