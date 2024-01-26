import React from 'react'
import {NavLink} from 'react-router-dom';

const MainBtn = ({link, check}) => {
    const InfoBtn = [
        {id: 1, name: "tweets", link: ""},
        {id: 2, name: "replies", link: "/with_replies"},
        {id: 3, name: "media", link: "/media"},
        {id: 4, name: "likes", link: "/likes"},
    ];
    const FollowBtn = [
        {id: 5, name: "followers", link: "/followers"},
        {id: 6, name: "following", link: "/following"},
    ];
    const Btn = () => {
        if (check) {
            return InfoBtn.map((e) => {
                return (
                    <div className="flex w-full" key={e.id}>
                        <NavLink
                            to={"/" + link + e.link}
                            end={true}
                            className="text-white px-4 w-full flex justify-center items-center hoverlink"
                        >
                            <span className="activeBtn">{e.name}</span>
                        </NavLink>
                    </div>
                );
            });
        } else {
            return FollowBtn.map((e) => {
                return (
                    <div className="flex w-full" key={e.id}>
                        <NavLink
                            to={"/" + link + e.link}
                            end={true}
                            className="text-white px-4 w-full flex justify-center items-center hoverlink"
                        >
                            <span className="activeBtn">{e.name}</span>
                        </NavLink>
                    </div>
                );
            });
        }
    };
    const ProfileBn = Btn();
    return <div className="relative border flex w-full heights">{ProfileBn}</div>;
};

export default MainBtn