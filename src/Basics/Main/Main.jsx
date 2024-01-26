import React from "react";
import "./Basic.css";
import "../../App.css"
import Messages from "../Messages/Messages";
import I from "../i/i";
import Home from "./Home";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Explore from "../Explore/Explore";


const Main = (props) => {

    const componentContentMap = {
        Home: <Home/>,
        Messages: <Messages store={props.store}/>,
        Explore: <Explore/>,
        I: <I/>,
        Profile: <Profile profile check={props.check} store={props.store.getState().follow.users}/>,
    };

    return (
        <div className="App flex">
            <Nav store={props.store}/>
            <div className="float-right main flex ">
                <div style={{width: "990px"}}>
                    {componentContentMap[props.verifyComponent]}
                </div>
            </div>
        </div>
    );
};
export default Main;
