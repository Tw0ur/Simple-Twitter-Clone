import React, {useMemo} from "react";
import "../Trends/Trends.css";
import Message from "./Message";
import s from "./Messages.module.css";
import TrendsFollowContainer from "../Trends/TrendsFollow";
import {findIndexUser} from "../../Redux/user-reducers";

const YesMessages = (props) => {
    const count = props.user.id * 3 * 10;
    const messageData = props.prop.messageData;
    const [currentMessage, setCurrentMessage] = React.useState(null);
    const [text, setText] = React.useState(props.prop.messageChat);

    const sortMessages = (idMessages) => {
        props.deleteMessage(idMessages, props.user.id, 3);
        props.sortMessages(props.user.id, 3);
    };

    const targetElement = messageData.find((el) => count === el.uid);
    const message = useMemo(() => {

        return targetElement.messages.map((e) => {
            const currentAnswer = targetElement.messages.find((current) => {
                return e.currentAnswerId === current.id;
            });

            return (
                <Message
                    uid={findIndexUser.id}
                    userId={props.user.id}
                    key={e.id}
                    {...e}
                    currentId={e.id}
                    currentAnswerMessage={currentAnswer && currentAnswer.message}
                    sortDelete={sortMessages}
                    setCurrentMessage={setCurrentMessage}
                />
            );
        });
    }, [messageData, count, props.infoMessage, sortMessages]);

    const onBtnMessage = (e) => {
        e.preventDefault();
        props.addMessage(props.user.id, findIndexUser.id, currentMessage);
        setCurrentMessage(null);
        setText("");
    };

    const onMesChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageText(body);
        setText(body);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            onBtnMessage(event);
        }
    };

    return (
        <div className="w-full h-full max-h-screen flex flex-col  relative transform">
            <div>

                <TrendsFollowContainer
                    condition={count}
                    verifyNoRandom="Yes"
                    term="1"
                    notCard
                    simpleCard
                    message={props.user.id ? props.user.id : targetElement.userid}
                    user={props.user}
                />

            </div>
            <div className="flex flex-col justify-around h-screen">
                <div className="relative overflow-x-hidden h-full ">
                    <div className={s.overflow} style={{padding: '14px'}}>
                        <div>{message}</div>
                    </div>
                </div>
                <div className="max-w-full ">
                    <div className="relative flex items-end top-0 w-full "
                         style={{borderTopWidth: '1px', borderTopColor: "rgb(47, 51, 54)"}}>
                        <div className="flex w-full bg-black px-4">
                            <div className="inputTs  pt-1 w-full">
                                <div></div>
                                <div className="borderIs flex flex-col  w-full py-1" style={{borderRadius: '16px'}}>
                                    {targetElement &&
                                        targetElement.messages.map((e) => {
                                            if (e.id === currentMessage) {
                                                return (
                                                    <div className=" pl-6 hoverMessage">
                                                        <div className="w-full maxHeight60">
                                                            <div className="currentMessage ">

                                                                <div
                                                                    className="pl-3 pr-6 text-sm w-full overflowMessage h-full">

                                                                    {e.message}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                    <div className="flex items-center" style={{minHeight: '20px', maxHeight: '100px'}}>
                                        <div className=" flex justify-center items-center iconS w-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                 className="w-5 text-white opacity-50 fill-current">
                                                <g>
                                                    <path
                                                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="inputInM flex h-full items-center ">
                      
                      <textarea
                          value={text}
                          onKeyDown={handleKeyDown}
                          onChange={onMesChange}
                          className="w-full px-3 textArea inputT text-white placeholder:icon checked::bg-green-400 vertical"
                      ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="inputTs pt-2 flex items-center ml-5 mr-4 ">
                <button className="buttonBlue" onClick={onBtnMessage}>
                  <span>Send</span>
                </button>
              </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YesMessages;
