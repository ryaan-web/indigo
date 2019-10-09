import React from 'react';
import './Footer.css';

function Footer(props) {
    const { selectedFlight } = props;
    return (
        <div className="footer page-footer fixed-bottom">
            <div className="container footer__container">
                <div className="row footer-content">
                    <div className="col-md-3 col-sm-4">
                        <div className="footer__text--bold">
                            DEL-BOM @ Rs {selectedFlight.IS_FLEXI? selectedFlight.COST_WITH_RESCHEDULING: selectedFlight.COST}
                        </div>
                        <div>
                            <span>{selectedFlight.FLIGHT_ID} . {selectedFlight.D_TIME} - {selectedFlight.A_TIME} </span>
                            <a href="#">Details</a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-3 col-sm-4 d-none d-sm-none d-lg-block">
                        <div>Total Fare</div>
                        <div>
                            {!selectedFlight.IS_FLEXI && <span className="footer__text--bold">Rs. {selectedFlight.COST} </span>}
                            {selectedFlight.IS_FLEXI && <span className="footer__text--bold">Rs. {selectedFlight.COST_WITH_RESCHEDULING} </span>}
                            <a href="#s">Details . </a>
                            <a href="#s">Baggage</a>
                        </div>
                    </div>
                    <div className="col-3 d-none d-sm-none d-lg-block">
                        <div>
                            <button className="btn btn-light footer__btn--light">Add Return Flight</button>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <div>
                            <button className="btn btn-primary footer__btn--primary">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;