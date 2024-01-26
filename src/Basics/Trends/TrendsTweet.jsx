import React from "react";
import TrendsTitle from "./TrendsTitle";
import TrendsFollow from "./TrendsFollow";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";

const TrendsTweet = (props) => {
    ComponentWithCustomTitle(props.customTitle);
    return (
        <div className="w-full">
            <div className="ProfileFor">
                {props.titleBool ? (
                    <div>
                        <TrendsTitle name={props.title ? props.title : "Who to follow"}/>
                    </div>
                ) : (
                    <></>
                )}
                <div>
                    <TrendsFollow button={true} title={true} condition={props.condition}/>
                </div>

                {props.showMore ? (
                    <div className="blockS p-4 showMore">
                        <div>
                            <span>Show more</span>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default TrendsTweet;
