import React from 'react';
import './Flight.css';

function Flight(props) {
    const { flightData, onSelect } = props;
    return (
        <div className="row listings__body px-3 px-md-0">
            <div className="listings__body-content">
                <div className="listtings__body-col li">
                    <span className="listings__body-text listings__body-text--inline">{flightData.D_TIME} - {flightData.A_TIME}</span>
                    {flightData.IS_REVISED && <span className="listings__body-text listings__body-text--inline listings__body-text--bg-grey">REVISED TIME</span>}
                    {flightData.IS_REVISED && <del className="listings__body-text listings__body-text--grey">01:05 - 03:15</del>}
                    <span className="listings__body-text--grey listings__body-text--light">{flightData.TYPE==='non-stop'?flightData.TYPE:''}</span>
                    <a href="#" className="listings__body-text listings__body-link">Flight Details</a>
                </div>
                <div className="listings__body-col listings__body-text d-none d-lg-block">
                    <span className="vertical-middle">{flightData.FLIGHT_ID}</span>
                </div>
                <div className="listings__body-col listings__body-text d-none d-lg-block">
                    <span className="vertical-middle">{flightData.DURATION} Hrs</span>
                </div>
                <div className="listings__body-col listings__body-text">
                    <div className="text-center pdt-22">
                        <input type="radio" name="cost" onClick={(e) => {onSelect(flightData, false)}} selected/>
                    </div>
                    <div>
                        <label className="block-text" htmlFor="blankRadio1">Rs. {flightData.COST}</label>
                    </div>
                </div>
                <div className="listings__body-col listings__body-text">
                    <div className="text-center pdt-22">
                        <input type="radio" name="cost" onClick={(e) => {onSelect(flightData, true)}}/>
                    </div>
                    <div>
                        <label className="block-text" htmlFor="blankRadio1">RS. {flightData.COST_WITH_RESCHEDULING}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flight;