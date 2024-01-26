import React from "react";
import TrendsFollow from "../Trends/TrendsFollow";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/messages/" + props.id}>
                <TrendsFollow verifyNoRandom="Yes" id={props.id} user={props.info} button={props.button}
                              title={props.title}/>
            </NavLink>
        </div>
    );
};
export default DialogItem;