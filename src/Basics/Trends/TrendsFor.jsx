import React from "react";
import "./Trends.css";
import TrendsInfo from "./TrendsInfo";
import TrendsTitle from "./TrendsTitle";
import TrendsFollow from "./TrendsFollow";
import {NavLink} from "react-router-dom";

const TrendsFor = (props) => {
    return (
        <div>
            <div className="TrendsFor">
                {props.name ? (
                    <div>
                        <div>
                            <TrendsTitle name="Trends for you"/>
                        </div>
                        <div>
                            <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                            <TrendsInfo trends="technology" title="Web3"/>
                        </div>
                        <NavLink to="/i/trends">
                            <div className="blockS p-4 showMore">
                                <div>
                                    <span>Show more</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <div>
                            <TrendsTitle name="Who to follow"/>
                        </div>
                        <div>
                            <TrendsFollow
                                button="true"
                                condition={props.condition}
                                term="3"
                                link="trends"


                            />
                        </div>
                        <NavLink to={"/i/connect_people"}>
                            <div className="blockS px-4 py-3 showMore">
                                <div>
                                    <span>Show more</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )}

                {/* <div className="blockS p-4 showMore"></div> */}
            </div>
        </div>
    );
};

export default TrendsFor;
