import React from "react";
import BasicNoPost from "../BasicInfo/BasicNoPost";
import BasicMessage from "./BasicMessage";

const NoMessages = () => {
    return (
        <div className="flex">
            <div className="homePage homeWidth2 flex items-center justify-center">
                <BasicNoPost
                    name="Select message"
                    info="Choose from your existing conversations, start a new one, or just
            keep swimming."
                    button="New message"
                />
            </div>
        </div>
    );
};

export default NoMessages;
