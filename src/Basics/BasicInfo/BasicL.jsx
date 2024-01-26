import React from "react";
import Header from "../Main/Header";
import BasicBtn from "./BasicBtn";
import BasicMesContainer from "./BasicMesContainer";


const BasicL = () => {
    const [selectedBtn, setSelectedBtn] = React.useState(1); // Состояние для выбранной кнопки

    const handleButtonClick = (btnId) => {
        setSelectedBtn(btnId); // Установка выбранной кнопки

    };
    return (
        <div className="h-full">
            <div className="homePage ">
                <div className="Sticky">
                    <div className="bg">
                        <Header name="Home"/>
                        <BasicBtn selectedBtn={selectedBtn} onButtonClick={handleButtonClick}/>
                    </div>
                </div>
                <BasicMesContainer selectedBtn={selectedBtn}/>
            </div>
        </div>
    );
};
export default BasicL;
