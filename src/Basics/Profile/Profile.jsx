import React from "react";
import "./Profile.css";
import Trends from "../Trends/Trends";
import {Route, Routes, useNavigate} from "react-router-dom";
import TrendsTweet from "../Trends/TrendsTweet";
import ProfileMedia from "./ProfileMedia";
import ProfileLikes from "./ProfileLikes";
import ProfFollow from "./ProfFollow";
import ProfileInfo from "./ProfileInfo";

const ProfileTitle = (props) => {
    const BooleanTitle =
        window.location.pathname !== "/" + props.link + "/following" &&
        window.location.pathname !== "/" + props.link + "/followers";
    const tweet = `${props.tweets} Tweets`;
    return (
        <div className=" sticky z-10 Top ">
            <div className="profileBg">
                <div className="flex flex-row heights px-4 ">
                    <div className="mr-9 mt-1 flex items-center">
                        <div
                            className="h-9 w-9 flex justify-center items-center profileBtn"
                            onClick={() => props.navigate(-1)}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 text-white fill-current">
                                <g>
                                    <path
                                        d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="text-white">
                        <div>
                            <div className="mt-1.5 profileName">
                                <div>{props.fullName}</div>
                            </div>

                            <div className="tweet text-sm">
                                <div>{BooleanTitle ? tweet : props.linkRef}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Profile = (props) => {
    const check = props.check;
    const fullName = `${check.info.name} ${check.info.subname}`;
    const navigate = useNavigate();
    const customTitle = `${fullName} (${check.info.link})`;
    const customReplies = `Tweets with replies by ${customTitle}`;
    const customMedia = `Media Tweets by ${customTitle}`;
    const customLikes = `Tweets liked by ${customTitle}`;
    const titleFollowing = "/" + check.info.ref + "/following";
    const titleFollowers = "/" + check.info.ref + "/followers";

    const verifyLink = () => {
        if (
            window.location.pathname !== titleFollowing &&
            window.location.pathname !== titleFollowers
        ) {
            return (
                <div>
                    <div className="container">
                        <ProfileInfo {...props} profile={true}/>
                    </div>
                    <div className="flex">
                        <Routes>
                            <Route
                                index
                                element={
                                    <TrendsTweet condition={check.id} customTitle={customTitle}/>
                                }
                            />
                            <Route
                                path="/with_replies"
                                element={
                                    <TrendsTweet
                                        condition={check.id}
                                        customTitle={customReplies}
                                    />
                                }
                            />
                            <Route
                                path="/media"
                                element={<ProfileMedia customTitle={customMedia}/>}
                            />
                            <Route
                                path="/likes"
                                element={<ProfileLikes customTitle={customLikes}/>}
                            />
                        </Routes>
                    </div>
                </div>
            );
        } else {
            return (
                <ProfFollow
                    check={check}
                    store={props.store}
                    customTitle={`People ${
                        window.location.pathname !== titleFollowing
                            ? "following"
                            : "followed by"
                    } ${customTitle}`}
                />
            );
        }
    };

    return (
        <div className="flex flex-row w-full justify-between min-h-full">
            <div className="homePage ">
                <ProfileTitle
                    tweets={check.count.tweets}
                    navigate={navigate}
                    fullName={fullName}
                    link={check.info.ref}
                    linkRef={check.info.link}
                />
                {verifyLink()}
            </div>
            <Trends for="rof" condition={check.id}/>
        </div>
    );
};

export default Profile;
