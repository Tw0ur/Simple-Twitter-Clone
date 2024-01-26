import React, {useState} from "react";
import {findIndexUser} from "../../Redux/user-reducers";
import {checkFollowing, updateListOfFollow} from "../../Redux/follow-Reducer";

const FollowBtn = (props) => {
    const follower = checkFollowing(props.t.id)
    const [Follow, setFollow] = React.useState(follower);

    const followBtn = () => {
        // toggleFollower(t.id)
        // setFollow((Follow) => !Follow);
        console.log(Follow);
        setFollow((Follow) => !Follow);
        updateListOfFollow(findIndexUser.id, props.t.id)

        checkFollowing(props.t.id)

        console.log(Follow);
        // // console.log(props.t.follower);
        // // console.log(Follow);


    };
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);

    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    const follow = (
        <div className="BtnFollowBtn">
            <button>
                <span>Follow</span>
            </button>
        </div>
    );
    const unFollow = (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
                <div className="UnFollowBtn">
                    <button>
                        <span>Unfollow</span>
                    </button>
                </div>
            ) : (
                <div className="BtnUnFollowBtn">
                    <button>
                        <span>Following</span>
                    </button>
                </div>
            )}
        </div>
    );
    return (
        <div onClick={followBtn} className="BtnFollow">
            {follower ? unFollow : follow}
        </div>
    );
};

export default FollowBtn;
