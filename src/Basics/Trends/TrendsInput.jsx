import React, {useState} from "react";
import "./Trends.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const TrendsInput = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="relative ">
            <div className="w-full ">
                <div className={props.class}>
                    <div
                        className={`borderTs flex items-center h-11 w-full`}
                        onClick={handleClick}
                    >
                        <div className="pl-4 iconS">
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                        <div className="inputIn">
                            <div className="">
                                <input
                                    type="text"
                                    placeholder="Search Twitter"
                                    className="w-full p-3 inputT text-white placeholder:iconS"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendsInput;
