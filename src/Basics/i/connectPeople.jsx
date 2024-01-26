import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import Trends from "../Trends/Trends";
import TrendsTweet from "../Trends/TrendsTweet";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";
import {useNavigate} from "react-router-dom";
import TrendsInfo from "../Trends/TrendsInfo";
import axios from "axios";

const ConnectPeople = ({trends}) => {
    useEffect(() => {
        // axios.get("https://social-network.samuraijs.com/api/1.0/users?page=2&count=3")
        // .then(responce => {
        //   console.log(responce.data.items);
        // })
    }, [])
    const pageSize = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=2&count=3")
            .then(responce => {
                console.log(responce.data.items);
            })
    }
    ComponentWithCustomTitle(trends.name)
    const trendsLogistic = () => {
        if (trends.name === "Trends") {
            return (<>
                <div>
                    <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                    <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                    <TrendsInfo trends="technology" title="Web3" tweet=""/>
                    <TrendsInfo trends="technology" title="Web3" tweet="134k tweet"/>
                    <TrendsInfo trends="technology" title="Web3" tweet=""/>
                </div>
            </>)
        } else if (trends.name === "Connect") {
            return (
                <TrendsTweet
                    titleBool={trends.titleBool}
                    title={trends.title}
                    showMore={trends.showMore}
                />
            )
        }

    }
    const navigate = useNavigate()
    return (
        <>
            <div className="homePage">
                <div>

                    <div className="flex justify-end mr-2">
                        <div className="forY  text-white text-3xl">
                            <div className="borderY">+</div>
                        </div>

                    </div>

                </div>
                <div className="sticky z-10 Top ">
                    <div className="profileBg">
                        <div className="flex flex-row heights px-4 ">
                            <div className="mr-9 mt-2 flex items-center">
                                {trends.backBtn ? (
                                    <div className="h-9 w-9 flex justify-center items-center profileBtn"
                                         onClick={() => {
                                             navigate(-1)
                                         }}>
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-arrow-left"
                                            className="text-white"
                                        ></FontAwesomeIcon>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div
                                className="text-white profileName h-full flex flex-col justify-center w-full text-base ">
                                <div>
                                    <h2 className="cursor-pointer">{trends.name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {trendsLogistic()}
                </div>
            </div>
            <Trends for={trends.for}/>
        </>
    );
};

export default ConnectPeople;
