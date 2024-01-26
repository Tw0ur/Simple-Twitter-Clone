import React from "react";
import "./Basic.css";
import BasicL from "../BasicInfo/BasicL";
import Trends from "../Trends/Trends";

const Home = (props) => {
    return (
        <div className="flex flex-row w-full justify-between min-h-full">
            <div className="">
                <BasicL/>
            </div>
            <Trends for="for"/>
        </div>
    );
};
export default Home;
