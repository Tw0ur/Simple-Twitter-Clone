import React from "react";
import TrendsFollow from "../Trends/TrendsFollow";

const BasicPost = (props) => {
    const post = [
        {id: 1, info: "#1 Source of Memes to show your Grandma!", button: "true"},
        {id: 2, info: "#1 Source of Memes to show your Grandma!", button: "true"},
        {id: 3, info: "#1 Source of Memes to show your Grandma!", button: "true"},
        {id: 4, button: "true"},
        {id: 5, button: "true"},

    ];
    const map = post.map((el) => {
        return <TrendsFollow info={el.info} button={el.button}/>
    })
    return (
        <div>
            {map}
        </div>
    );
};
export default BasicPost;
