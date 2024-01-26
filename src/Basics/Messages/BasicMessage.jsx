import React from "react";
import Header from "../Main/Header";
import "../Trends/Trends.css";
import DialogItem from "./DialogItem";


const BasicMessage = (props) => {
    const map = props.user && props.user.map((el) => {
        return <DialogItem key={el.id} id={el.id} info={el} button={props.button} title={props.title}/>
    })


    return (
        <>
            {props.title ? null :
                <div className="top   z-10">
                    <div className="bc">
                        <Header name="Messages"/>
                    </div>
                </div>
            }
            {/* <BasicNoPost name='Welcome to into message' info='Choose from your existing conversations, start a new one, or just
            keep swimming.' button='Write a message'/> */}
            <div>
                {map}
            </div>
        </>
    );
};
export default BasicMessage;
