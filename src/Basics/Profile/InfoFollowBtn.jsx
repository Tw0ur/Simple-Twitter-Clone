import React from 'react'
import {NavLink} from 'react-router-dom'

const InfoFollowBtn = ({link, count}) => {
    return (
        <div className="flex tweet py-1.5">
            <div className="mr-5 follow">
                <NavLink to={`/${link}/following`}>
                    <div>
                        <span className="text-white">{count.following}</span>{" "}
                        following
                    </div>
                </NavLink>
            </div>

            <div className="follow">
                <NavLink to={`/${link}/followers`}>
                    <div>
                        <span className="text-white">{count.follow}</span> followers
                    </div>
                    <div className='trendsCount'> {count.follow}</div>
                </NavLink>
            </div>
        </div>
    )
}

export default InfoFollowBtn