import {faHamburger} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const TrendsInfo = (props) => {
    return (
        <div className="block blockS">
            <div className="flex flex-col h-full py-3 px-4 ">
                <div className="relative ">
                    <div className="flex h-full">
                        <div className="h-full ">
                            <span className="Trendstitle ">{props.trends}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className=" TrendsT">{props.title}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="Trendstitle">{props.tweet}</span>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="ml-4">
                            <div className="h-8 w-8 flex justify-center items-center ham">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-current w-5 ">
                                    <g>
                                        <path
                                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                    </g>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendsInfo;
