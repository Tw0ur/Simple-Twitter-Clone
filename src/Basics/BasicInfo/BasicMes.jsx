import React from "react";
import BasicRealPost from "./BasicRealPost";
import BasicNoPost from "./BasicNoPost";
import TrendsTweet from "../Trends/TrendsTweet"
import Trends from "../Trends/Trends";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";

const BasicMes = (props) => {
    const Post = props.user
        ? props.user.map((index) => {
            return <BasicRealPost user={index} key={index.id}/>;
        }) : null
    const PostFunc = () => {
        ComponentWithCustomTitle("Home")
        return Post
    }

    let newPostEl = React.createRef();
    const newPost = (e) => {
        e.preventDefault();
        props.addPost();
        // props.dispatch(addPostActionCreator())
    };
    const onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    };
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            // 13 - код клавиши "Enter"
            newPost(event);
        }
    };

    return (
        <div>
            <div className="px-4 py-1  border ">
                <div className="flex ">
                    <div className="post">
                        <div className="imgAvatar">
                            <div className="avatar">
                                <img src="" alt=""/>
                                <span>A</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full pl-1">
                        <div className=" pb-3  pt-5">
              <textarea
                  type="text"
                  placeholder="What`s happening?"
                  className="input resize-none  w-full"
                  value={props.message}
                  ref={newPostEl}
                  onChange={onPostChange}
                  onKeyDown={handleKeyDown}
              />
                        </div>
                        <div className=" h-12 flex justify-between items-end">
                            <div>

                            </div>
                            <div>
                                <button className="buttonBlue" onClick={newPost}>
                                    <span>Tweet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.selectedBtn === 1 ?
                <>
                    <TrendsTweet titleBool="true" showMore customTitle="Home"/>
                    {/* <BasicNoPost selectedInfo="1" /> */}
                </>
                : Post ? (
                    PostFunc()
                ) : (
                    <BasicNoPost selectedInfo="1"/>
                )}
        </div>
    );
};
export default BasicMes;
