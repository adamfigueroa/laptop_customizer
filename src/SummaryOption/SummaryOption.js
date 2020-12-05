import React from 'react'


function SummaryOption(props) {

    return (
        <div className="summary__option">
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{props.selectedOption}</div>
            <div className="summary__option__cost">{props.cost}</div>
        </div>
        
    )
};

export default SummaryOption