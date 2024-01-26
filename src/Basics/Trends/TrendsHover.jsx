import React from "react";
import InfoFollowBtn from "../Profile/InfoFollowBtn";
import {Link} from "react-router-dom";
import FollowBtn from "../Profile/unFollow";

const TrendsHover = (props) => {
    const check = props.check;
    const link = check.info.ref;

    const style = {
        top: 20,
        left: 30,
        zIndex: 900,
    };

    return (
        <div className="relative w-auto h-auto cursor-default">
            <div
                className="absolute  flip-card-trends"
                style={style}
                onMouseMove={props.handleMove}
                onMouseLeave={props.handleLeave}
            >
                <div>
                    {/* <CardProfile {...props} handle={true} stop={true} /> */}
                    <div className=" flex justify-between ">
                        <div className="p-0.5 mr-3">
                            <Link to={"/" + props.refLink}>
                                <div className="h-12 w-12">
                                    <img
                                        src={
                                            props.profileImage
                                                ? props.profileImage
                                                : "https://i.pinimg.com/736x/3f/6d/26/3f6d26bdb59adce4b73f0b7e3061540e.jpg"
                                        }
                                        alt=""
                                        className="followImg"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <FollowBtn t={check}/>
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Link to={"/" + props.refLink}>
                                    <div>
                                        <div className="">
                                            <div className="">
                        <span className="TrendsT capitalize  Before">
                          {props.name}
                        </span>
                                            </div>
                                        </div>
                                        <div className="h-full">
                                            <span className="Trendstitle">{props.link}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="my-2">{props.verify}</div>
                        <div>
              <span>
                <InfoFollowBtn link={link} count={check.count}/>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendsHover;
