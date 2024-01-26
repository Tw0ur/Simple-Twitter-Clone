import React from "react";
import {NavLink} from "react-router-dom";

const BasicNoPost = (props) => {
    const infoNoPost = [
        {
            id: 1,
            idText: "1",
            name: "Welcome to Twitter",
            info: "This is the best place to see what’s happening in your world. Findsome people and topics to follow now.",
            button: "Let`s go!",
            link: "/i/connect_people"
        },
        {
            id: 2,
            idText: "2",
            name: "Select a message",
            info: "Choose from your existing conversations, start a new one, or just keep swimming.",
            button: "New message",

        },
        {
            id: 3,
            idText: "3",
            name: "Welcome to your inbox",
            info: "Drop a line, share Tweets and more with private conversations between you and others on Twitter. ",
            button: "Write a message",
        }

    ];
    const map = infoNoPost.map(e => {
        return (
            <>
                {e.idText === props.selectedInfo &&
                    <div className="noPost px-9 " key={e.id}><h1 className="textH1 mb-2 ">{e.name}!</h1>
                        <p className="color  mb-6 lightFont">{e.info}</p>
                        {e.link ?
                            <NavLink to={e.link}>
                                <button className="btnBlue  ">
                                    <span>{e.button}</span>
                                </button>
                            </NavLink>
                            :
                            <button className="btnBlue  " onClick={() => props.btnSet(e => !e)}>
                                <span>{e.button}</span>
                            </button>}
                    </div>}
            </>

        )
    })
    return (
        <div className="flex justify-center w-full my-8 relative">
            {map}

        </div>
    );
};
export default BasicNoPost;
