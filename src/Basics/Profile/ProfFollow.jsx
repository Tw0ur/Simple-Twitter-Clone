import React, {useEffect} from "react";
import "./Profile.css";
import MainBtn from "./MainBtn";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";
import ListOfFollow from "./ListOfFollow";

const ProfFollow = (props) => {

    const check = props.check;

    const [listOf, setListOf] = React.useState('')
    useEffect(() => {
        if (window.location.pathname === `/${check.info.ref}/following`) {
            setListOf("Following")
        } else {
            setListOf("Followers")
        }
    }, [check.info.ref]);

    ComponentWithCustomTitle(props.customTitle)
    return (
        <div>
            <div className=" w-full h-full">
                <div>
                    <MainBtn link={check.info.ref}/>
                </div>
                {/* <DialogItem id={check.id} info={check} /> */}
                {/* <BasicMessage
          user={props.store}
          title={true}
          button={true}
          /> */}
                <ListOfFollow listOf={listOf} id={check.id}/>
                <div className="flex justify-end">
                    <div className="forY  text-white text-3xl">
                        <div className="borderY">+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfFollow;
