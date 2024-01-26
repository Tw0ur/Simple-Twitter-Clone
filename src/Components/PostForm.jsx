import {useCallback, useState} from "react";
import {useRef} from "react";
import React from "react";
import MyButton from "./Ui/Button/MyButton";
import MyInput from "./Ui/Input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""});

    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", body: ""});
    };


    return (
        <form>
            <MyInput
                onChange={(e) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название для заголовка"
                className="border-slate-950 border-2"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Название для заголовка"
                className="border-slate-950 border-2"
            />

            {/* Неуправляемый компонент */}
            {/* <MyInput
        ref={bodyInputRef} 

         type='text' 
         placeholder='Описание для заголовка'
  className='border-slate-950 border-2'/> */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};
export default PostForm;
