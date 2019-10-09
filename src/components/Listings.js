import React from 'react';
import Flight from "./Flight";
import './Listings.css';

function Listings(props) {
  const { allFlights, onSelect} = props;
  return (
    <div className="container listings mt-sm-5 mt-md-1 mb-6">
        <div className="row listings__head">
          <div className="listings__head-content">
              <div className="listings__head-col">ONE WAY TRIP</div>
              <div className="listings__head-col"></div>
              <div className="listings__head-col"></div>
              <div className="listings__head-col">
                <div>SAVER</div>
                <div className="listings__head-label">Lowest Fare</div>
              </div>
              <div className="listings__head-col">
                <div> FLEXI</div>
                <div className="listings__head-label"> Unlimited Rescheduling</div>
              </div>
          </div>
        </div>
        {allFlights.map((ele, i) => {
          return  <Flight flightData={ele} onSelect={onSelect} key={ele.id}></Flight>
        })}
    </div>
  );
}

export default Listings;