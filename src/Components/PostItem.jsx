import React, {useState} from "react";
import MyButton from "./Ui/Button/MyButton";

const PostItem = (props) => {


    return (
        <div className="PostItem">
            <div className='post'>
                <div className='post_connect'>
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post__btns'>
                    <MyButton onClick={() => {
                        props.remove(props.post)
                    }}>Удалить</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;
