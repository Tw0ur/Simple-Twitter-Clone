import React from "react";
import YesMessagesContainer from "./YesMessagesContainer";
import {ComponentWithCustomTitle} from "../Main/ComponentWithCustomTitle";
import {Route, Routes} from "react-router-dom";
import BasicNoPost from "../BasicInfo/BasicNoPost";
import Header from "../Main/Header";
import ComponentMes from "./ComponentMes";
import Compose from "./Compose";
import {findIndexUser} from "../../Redux/user-reducers";

const Messages = (props) => {
    ComponentWithCustomTitle("Messages");
    const messageData = props.store.getState().messageData.messageData;
    const users = props.store.getState().follow.users;
    const [btnCompose, setBtnCompose] = React.useState(false);
    const [addMessage, setAddMessage] = React.useState(null);

    const map = () => {
        const filteredMessages = messageData.filter(
            (mes) =>
                findIndexUser.id === mes.userId || findIndexUser.id === mes.userid
        );
        if (filteredMessages) {
            return filteredMessages?.map((mes) => {
                return users.map((user) => {
                    if (
                        (user.id === mes.userId || user.id === mes.userid) &&
                        !user.isAuthenticated
                    ) {
                        return <ComponentMes key={mes.id} mes={mes} e={user}/>;
                    }
                });
            });
        } else {
            return (
                <div className="flex h-full justify-center items-center px-1">
                    <BasicNoPost selectedInfo="3" btnSet={setBtnCompose}/>
                </div>
            );
        }
    };
    const funcMap = map();
    return (
        <div className="flex h-full">
            <div className="h-full">
                <div className="homeHeight h-full">
                    <div className="top   z-5">
                        <div className="bc">
                            <Header name="Messages" messageHeader btnSet={setBtnCompose}/>
                        </div>
                    </div>
                    <div>{funcMap}</div>
                </div>
            </div>
            {btnCompose && (
                <Compose
                    btnSet={setBtnCompose}
                    users={users}
                    state={props.store.getState().messageData}
                    messageData={messageData}
                />
            )}
            <div className="flex h-full">
                <div className="homeWidth2 flex h-full">
                    <Routes>
                        <Route
                            index
                            element={
                                <div className="flex h-full justify-center items-center">
                                    <BasicNoPost selectedInfo="2" btnSet={setBtnCompose}/>
                                </div>
                            }
                        />
                        {users.map((e) => {
                            const count = e.id * 3 * 10;
                            return (
                                <Route
                                    path={"/" + count}
                                    key={e.id}
                                    element={
                                        <div>
                                            {/* это переданный параметр объекта с App.js */}
                                            <YesMessagesContainer
                                                user={e}
                                                setAddMessage={setAddMessage}
                                            />
                                        </div>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default Messages;
