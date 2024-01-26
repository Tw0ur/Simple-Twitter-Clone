import React from "react";
import './Trends.css'

const TrendsTitle = (props) => {
    return (
        <div className="">
            <h2 className="py-3 px-4 text-white TrendsTitle">{props.name}</h2>
        </div>
    );
};
export default TrendsTitle
