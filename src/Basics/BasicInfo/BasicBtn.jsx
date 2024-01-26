// BasicBtn компонент
import React from "react";


const BasicBtn = (props) => {
    const HomeBtn = [
        {id: 1, name: "for you"},
        {id: 2, name: "following"}
    ];

    const handleClick = (btnId) => {
        props.onButtonClick(btnId); // Передача идентификатора выбранной кнопки обратно в другой компонент
    };

    const map = HomeBtn.map((btn) => {
        const isActive = btn.id === props.selectedBtn ? "active" : ""; // Проверка, является ли кнопка активной

        return (
            <div className="flex w-full" key={btn.id}>
                <div
                    className={`text-white px-4 w-full flex justify-center items-center hoverlink ${isActive}`}
                    onClick={() => handleClick(btn.id)} // Обработчик клика на кнопке
                >
                    <span className="activeBtn">{btn.name}</span>
                </div>
            </div>
        );
    });

    return (
        <div className="relative border flex w-full heights">
            {map}
        </div>
    );
};

export default BasicBtn;
