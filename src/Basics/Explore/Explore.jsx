import React from "react";
import TrendsInfo from "../Trends/TrendsInfo";
import Trends from "../Trends/Trends";
import TrendsTitle from "../Trends/TrendsTitle";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";

const Explore = (props) => {
    ComponentWithCustomTitle("Explore")
    return (
        <div className="flex flex-row w-full justify-between  h-full">
            <div className="">
                <div className="homePage Border ">
                    <div className=" sticky z-10 top">
                        <div className="bg"></div>
                    </div>
                    <div>
                        <TrendsTitle name="Trends for you"/>
                    </div>
                    <div>
                        <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                        <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                        <TrendsInfo trends="technology" title="Web3" tweet=""/>
                        <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                        <TrendsInfo trends="technology" title="Web3" tweet=""/>
                    </div>
                    <div className="blockS p-4 showMore">
                        <div>
                            <span>Show more</span>
                        </div>
                    </div>
                </div>
            </div>

            <Trends for="fol"/>

        </div>
    );
};
export default Explore;
