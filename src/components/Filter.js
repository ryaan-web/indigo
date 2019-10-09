import React from 'react';
import './Filter.css';
import APP_CONSTANTS from '../constants/AppConstants';


function Filter(props) {
    const {onSort, onFilter} = props;
    return (
        <div className="container filter">
            <div className="row filter__content">
                <div className="btn-group filter__filter-by" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light filter__btn--light" onClick={() => {onFilter(APP_CONSTANTS.FILTER_BY.NON_STOP)}}>Non-stop</button>
                    <button type="button" className="btn btn-light filter__btn--light" onClick={() => {onFilter(APP_CONSTANTS.FILTER_BY.ALL)}}>All</button>
                </div>

                <div className="btn-group filter__sort-by" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light filter__btn--light" onClick={() => {onSort(APP_CONSTANTS.SORT_BY.DURATION)}}>Duration</button>
                    <button type="button" className="btn btn-light filter__btn--light" onClick={() => {onSort(APP_CONSTANTS.SORT_BY.PRICE)}}>Price</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;