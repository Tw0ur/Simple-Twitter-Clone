import React from "react";
import "./Trends.css";
import TrendsInput from "./TrendsInput";
import TrendsFor from "./TrendsFor";

const Trends = (props) => {
    const Proverka = () => {
        if (props.for === "for") {
            return (
                <div className="marginTop">
                    <TrendsFor name="title"/>
                    <TrendsFor condition={props.condition}/>
                </div>
            );
        } else if (props.for === "fol") {
            return (
                <div className="">
                    <TrendsFor condition={props.condition}/>
                </div>
            );
        } else if (props.for === "trends") {
            return (
                <div className="">
                    <TrendsFor name="title"/>
                </div>
            );
        } else if (props.for === "rof") {
            return (
                <div className="marginTop">
                    <TrendsFor condition={props.condition}/>
                    <TrendsFor name="title"/>
                </div>
            );
        }
    };
    return (
        <div className="Trends pb-16 ">
            {props.for === "for" || props.for === "rof" ? (
                <>
                    <div className="">
                        {props.for ? <TrendsInput class="inputTsFixed"/> : <></>}
                    </div>
                    {Proverka()}
                </>
            ) : (
                <div className="max-w-full fixed">
                    <div className="">
                        {props.for ? <TrendsInput class="inputTs"/> : <></>}
                    </div>
                    {Proverka()}
                </div>
            )}
        </div>
    );
};

export default Trends;
