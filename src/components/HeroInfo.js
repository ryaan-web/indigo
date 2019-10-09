import React from 'react';
import './HeroInfo.css';

function HeroInfo(props) {
    const { selectedFlight } = props;
    return (
        <div className="hero-info d-none d-xs-none d-sm-none d-md-block">
            <div className="container hero-info__container">
                <div className="row">
                    <div className="col-md-3 hero-info__item">
                        <div className="hero_info__item-text">08 oct</div>
                        <div className="hero_info__item-label">TUESDAY</div>
                    </div>
                    <div className="col-md-3 hero-info__item">
                        <div className="hero_info__item-text">DEL-BOM</div>
                        <div className="hero_info__item-label">DELHI - MUMBAI</div>
                    </div>
                    <div className="col-md-3 hero-info__item">
                        <div className="hero_info__item-text">1 Adult(s)</div>
                        <div className="hero_info__item-label">PASSENGERS</div>
                    </div>
                    <div className="col-md-3 hero-info__item">
                        <div className="hero_info__item-text">Rs. {selectedFlight.IS_FLEXI? selectedFlight.COST_WITH_RESCHEDULING: selectedFlight.COST}</div>
                        <div className="hero_info__item-label">PER PERSON</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroInfo;