import React, {useState} from "react";
import TrendsHover from "./TrendsHover";
import FollowBtn from "../Profile/unFollow";

const CardProfile = (props) => {
    const [stop, setStop] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [set, setSet] = useState(false);
    const [verTimeout, setVerTimeout] = useState(null);

    const check = props.check;


    const handleMove = (e) => {
        if (verTimeout) {
            clearTimeout(verTimeout);
        }
        const newVerTimeout = setTimeout(() => {
            setStop(true);
        }, 1000); // Delay in milliseconds

        setVerTimeout(newVerTimeout);
        if (!props.stop) {

            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
            setHoverTimeout(
                setTimeout(() => {
                    setSet(true);
                }, 1000)
            );
        }
    };

    const handleLeave = () => {
        if (stop === true) {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
            setHoverTimeout(
                setTimeout(() => {
                    setSet(false);
                }, 1000)
            );
        }
    };
    const handleLeaveNew = () => {
        setTimeout(() => setSet(false), 1000)
    };

    return (
        <>
            {/* {!props.notCard ?  set && (
        
        <TrendsHover
          handleLeave={handleLeaveNew}
          handleMove={handleMove}
          {...props}
        />
        
      ) : null} */}


            <div className=" flex justify-between ">

                <div className="p-0.5 mr-3 flex items-center">

                    <div className="h-12 w-12">
                        <img
                            src={
                                props.profileImage
                                    ? props.profileImage
                                    : "https://i.pinimg.com/736x/3f/6d/26/3f6d26bdb59adce4b73f0b7e3061540e.jpg"
                            }
                            alt=""
                            className="followImg"
                            onMouseMove={handleMove}
                            onMouseLeave={handleLeave}
                        />

                    </div>

                </div>
            </div>

            <div className="flex w-full flex-col">
                <div className="flex justify-between">
                    <div className="flex">

                        <div>
                            <div className="">
                                <div className="">
                    <span
                        className="TrendsT capitalize  Before"
                        onMouseMove={handleMove}
                        onMouseLeave={handleLeave}
                    >
                      {props.name}
                    </span>

                                </div>
                            </div>
                            <div className="h-full">
                  <span
                      className="Trendstitle"
                      onMouseMove={handleMove}
                      onMouseLeave={handleLeave}
                  >
                    {props.link}
                  </span>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center">
                        {props.button && <FollowBtn t={check}/>}
                    </div>
                </div>
                <div>{props.verify}</div>
            </div>
        </>
    );
};

export default CardProfile;
