import React from "react";
import {Route, Routes} from "react-router-dom";
import ConnectPeople from "./connectPeople";


const I = (props) => {
    const Trends = {
        name: "Trends",
        backBtn: true,
        settings: true,
        for: "fol",
        showMore: false,
        titleBool: false,
    };
    const Connect = {
        name: "Connect",
        backBtn: true,
        settings: false,
        for: "trends",
        showMore: false,
        titleBool: true,
        title: "suggested for you",
    };

    return (
        <div className="flex justify-between">
            <Routes>
                <Route path="/trends" element={<ConnectPeople trends={Trends}/>}/>
                <Route path="/connect_people" element={<ConnectPeople trends={Connect}/>}/>
            </Routes>
        </div>
    );
};


export default I;
