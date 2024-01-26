import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import FollowBtn from './unFollow'
import MainBtn from './MainBtn'
import {createHtmlMarkup} from '../../Redux/user-reducers';
import InfoFollowBtn from './InfoFollowBtn';


function InfoUserProfile({count, data, info, title, link}) {
    const htmlMarkup = createHtmlMarkup(title);
    console.log(info);
    const fullName = `${info.name} ${info.subname}`;
    return (
        <div className=" py-3 px-4">
            <div>
                <div>
                    <div className="profileName text-white">{fullName}</div>
                    <div className="tweet mt-0.5  textTitle mb-3">{info.link}</div>
                    <div>
                        {title ? <div className="pb-3 textTitle">{htmlMarkup}</div> : <></>}
                    </div>
                    <div>
                        <div className="tweet text-base">
                            <FontAwesomeIcon
                                icon="fa-solid fa-calendar-days"
                                className="mr-2.5 text-sm "
                            />
                            <span>Joined {`${data.month} ${data.year}`}</span>
                        </div>
                    </div>
                    <InfoFollowBtn link={link} count={count}/>
                </div>
            </div>
        </div>
    );
}

const ProfileInfo = (props) => {
    const check = props.check
    return (
        <div className="display">
            <div className="display-item">
                <div className="card seamus">
                    <div className="card-top"></div>
                    <div className="card-profile">
                        <div className="profile-image">
                            <img
                                src={
                                    check.info.profileImage
                                        ? check.info.profileImage
                                        : "https://i.pinimg.com/736x/3f/6d/26/3f6d26bdb59adce4b73f0b7e3061540e.jpg"
                                }
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="editProfile">
                            {check.isAuthenticated === true ? (
                                <>
                                    <div className="btnProfile">
                                        <div>Edit profile</div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="buttonProfile ellip p-2">
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             className="text-white fill-current  h-5">
                                            <g>
                                                <path
                                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <FollowBtn t={check}/>
                                </>
                            )}
                        </div>
                    </div>
                    <InfoUserProfile
                        info={check.info}
                        count={check.count}
                        data={check.data}
                        title={check.title}
                        link={check.info.ref}
                    />
                    <MainBtn link={check.info.ref} check={true}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo