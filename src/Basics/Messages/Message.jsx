import React from "react";
import s from "./Messages.module.css";

const Message = (props) => {
    const [isContextMenuVisible, setContextMenuVisible] = React.useState(false);
    const [contextMenuPosition, setContextMenuPosition] = React.useState({
        x: 0,
        y: 0,
    });

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenuVisible(true);
        setContextMenuPosition({x: event.clientX, y: event.clientY});
    };
    const handleMenuItemClick = () => {
        // Обработка клика по пункту меню
        setContextMenuVisible(false);
    };
    const handleMenuLeave = () => {
        setContextMenuVisible(false);
    };
    const handleCurrentId = () => {
        console.log(props.id);
        props.setCurrentMessage(props.id)
        setContextMenuVisible(false);
    }
    const sortDeleteItemClick = (idMessages) => {
        props.sortDelete(idMessages, props.userId, 3)
        setContextMenuVisible(false);
    }

    const style = {
        top: `${contextMenuPosition.y - 100}px`,
        left: `${contextMenuPosition.x - 1000}px `,
    };


    const menu = () => {
        return (
            <div className={`absolute flip-card`} style={style}>
                <div className={s.flipContextMenu} onMouseLeave={handleMenuLeave}>
                    <div onClick={handleMenuItemClick} className="pt-2">
                        <div className={s.contextHover}>
                            <span>Переслать</span>
                        </div>
                    </div>
                    <div onClick={handleCurrentId}>
                        <div className={s.contextHover}>
                            <span>Ответить</span>
                        </div>
                    </div>
                    <div onClick={() => {
                        sortDeleteItemClick(props.id)
                    }} className="pb-2 text">
                        <div className={s.contextHover}>
                            <span>Удалить</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
// console.log(props);

    const m =
        props.uid === props.messageUser ? (
            <div className={s.divYou}>

                <div className={s.itsYou}>{props.message}</div>
            </div>
        ) : (
            <div className={s.Me}>

                <div className={s.flexMe}>

                    {props.currentAnswerMessage && <div className={s.palka}>
                        <div className={s.itsAnswer}>{props.currentAnswerMessage}</div>
                    </div>}


                    <div className={s.itsMe}>{props.message}</div>
                </div>
            </div>
        );

    return (
        <div onContextMenu={handleContextMenu} onMouseLeave={handleMenuLeave}>
            {m}
            {isContextMenuVisible && menu()}
        </div>
    );
};
export default Message;
