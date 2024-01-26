import React from "react";
import s from "./Messages.module.css";
import TrendsFollowContainer from "../Trends/TrendsFollow";
import {findIndexUser} from "../../Redux/user-reducers";
import {newMessage} from "../../Redux/dialog-reducer";

const filteredUsers = (searchText, users) => {
    if (searchText) {
        const searchTextWithoutSpaces = searchText
            .replace(/\s+/g, "")
            .toLowerCase();

        return users.filter(({info, isAuthenticated}) => {
            if (!isAuthenticated) {
                const fullNameWithoutSpaces = `${info.name}${info.subname}`.toLowerCase();
                return fullNameWithoutSpaces.includes(searchTextWithoutSpaces);
            }
        });
    }
};
const ComposeCurrentUser = (props) => {
    return (
        <div className="flex flex-wrap p-1">
            {props.updateUsers?.map((user) => (
                <div
                    className="rounded-full overflow-hidden flex m-1"
                    style={{
                        border: "1px solid rgb(51, 54, 57)",
                        maxWidth: "calc(100%-16px)",
                        minHeight: "32px",
                    }}
                >
                    <div className={s.composeCurrentUser}>
                        <div className="h-6 w-6 mr-2 rounded-full overflow-hidden">
                            <img
                                src={user.info.profileImage}
                                alt="avatar"
                                className="h-full w-full object-cover "
                            />
                        </div>
                        <div
                            className="ligthFont font-bold text-white"
                            style={{fontSize: "15px", lineHeight: "20px"}}
                        >
                            {user.info.name} {user.info.subname}
                        </div>
                        <svg
                            onClick={() => props.deleteBtnUser(user)}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="fill-current ml-2 h-5"
                            style={{color: "rgb(19,155,240)"}}
                        >
                            <g>
                                <path
                                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};
const Compose = (props) => {
    const [text, setText] = React.useState();
    const [click, setClick] = React.useState(false);
    const [users, setUsers] = React.useState(props.users);
    const [updateBtn, setUpdateBtn] = React.useState(false);
    const [progressive, setProgressive] = React.useState(false);
    const [updateUsers, setUpdateUsers] = React.useState([]);
    const btnInput = () => {
        setClick(true);
    };
    const onChange = (event) => {
        setText(event.target.value);
    };
    const inputRef = React.useRef(null);
    const btnSet = () => {
        props.btnSet((e) => !e);
    };
    const updateBtnUser = (user) => {
        setUpdateBtn(true);
        if (!updateUsers.some((u) => u.id === user.id)) {
            setUpdateUsers((prevUsers) => [...prevUsers, user]);
        }
        setText("");
    };
    const updateLink = (e) => {

        updateUsers.map((user, index) => {
            console.log(props.state);
            newMessage(props.state, findIndexUser.id, user.id);
            if (index === 0) {
                e.preventDefault();
                window.location.pathname = 'messages/' + findIndexUser.id * 10 * user.id
                console.log(window.location.pathname);
            }
        })
    }
    const deleteBtnUser = (user) => {
        // const currentUpdate = updateUsers.find((u) => u.id === user.id)
        // console.log(currentUpdate);
        setUpdateUsers((prevUsers) => [
            ...prevUsers.filter((u) => u.id !== user.id),
        ]);
        if (updateUsers.length <= 1) {
            setUpdateBtn(false);
        }
    };
    React.useEffect(() => {
        const timeoutBar = () =>
            setTimeout(() => {
                setProgressive(true);
            }, 1000);
        if (text && users) {
            timeoutBar();
        }

        const debounce = setTimeout(() => {
            const filteredUser = filteredUsers(text, props.users);
            setProgressive(false);
            setUsers(filteredUser);
        }, 1000);

        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                // Вызывайте вашу функцию здесь
                setClick(false);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            clearTimeout(debounce);
            clearTimeout(timeoutBar);
        };
    }, [text, props.users, progressive, users]);

    const style = {
        height: "650px",
        width: "600px",
    };

    const map = () => {
        const filteredMessages = props.messageData.filter(
            (mes) =>
                findIndexUser.id === mes.userId || findIndexUser.id === mes.userid
        );

        return filteredMessages?.map((mes) => {
            return props.users.map((user) => {
                if ((!user.isAuthenticated) && (user.id === mes.userId || user.id === mes.userid)) {
                    return (
                        <div
                            className="text-white w-full"
                            onClick={() => {
                                updateBtnUser(user);
                            }}
                            key={user.id}
                        >
                            <TrendsFollowContainer
                                id={user.id}
                                notCard
                                disabledLink
                                verifyNoRandom="Yes"
                                user={user}
                            />
                        </div>
                    );
                }
            });
        });
    };
    const funcMap = map()
    return (
        <div className="absolute inset-0">
            <div
                className="relative h-full w-full z-[5]
        0"
                style={{backgroundColor: "rgba(91, 112, 131, 0.4)"}}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center ">
                <div
                    className=" bg-black flex flex-col items-center z-[40] rounded-2xl"
                    style={style}
                >
                    <div
                        className="w-full px-4 flex items-center"
                        style={{height: "53px "}}
                    >
                        <div
                            className="flex flex-col items-start justify-center self-stretch relative h-full"
                            style={{minWidth: "56px", minHeight: "32px"}}
                        >
                            <div
                                onClick={btnSet}
                                className="flex flex-col  justify-center relative rounded-full escHover items-center cursor-pointer"
                                style={{minWidth: "36px", minHeight: "36px"}}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="fill-current w-5 text-white"
                                    style={{color: "rgb(239, 243, 244);"}}
                                >
                                    <g>
                                        <path
                                            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="h-full flex items-center pb-0.5 w-full">
                            <div
                                className="lightFont font-bold text-white"
                                style={{fontSize: "20px", lineHeight: "24px"}}
                            >
                                New Messages
                            </div>
                        </div>
                        <div className="justify-end">

                            <button
                                className={`px-4 ml-3 rounded-full lightFont font-semibold ${
                                    updateBtn ? s.composeBtn : s.composeBtnDisabled
                                } `}
                                onClick={(event) => {
                                    event.preventDefault();
                                    props.btnSet((e) => !e);
                                    updateLink(event)
                                }}
                                style={{border: "1px solid black", minHeight: "32px"}}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="flex relative flex-1 w-full flex-col">
                        <form action="">
                            <div style={{borderBottom: "1px solid rgb(51, 54, 57)"}}>
                                <div
                                    className="flex w-full relative"
                                    style={{
                                        height: "42px",
                                    }}
                                >
                                    <div className={`flex items-center justify-end `}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className={`ml-3 relative w-5 h-5 fill-current ${
                                                click ? s.composeSvg : s.composeSvgDisabled
                                            } `}
                                            style={{minWidth: "32px"}}
                                        >
                                            <g>
                                                <path
                                                    d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="flex w-full lightFont">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            onChange={onChange}
                                            placeholder="Search People"
                                            onClick={btnInput}
                                            ref={inputRef}
                                            className={s.composeInput}
                                            value={text}
                                        />
                                    </div>
                                </div>
                                {updateBtn && (
                                    <ComposeCurrentUser
                                        updateUsers={updateUsers}
                                        deleteBtnUser={deleteBtnUser}
                                    />
                                )}
                            </div>
                            <div className="h-full w-full flex flex-col">
                                <div className="h-0.5 w-full relative overflow-hidden">
                                    <div className={progressive && s.progressive}></div>
                                </div>

                                {text
                                    ? users?.map((user) => (
                                        <div
                                            className="text-white w-full"
                                            onClick={() => {
                                                updateBtnUser(user);
                                            }}
                                            key={user.id}
                                        >
                                            <TrendsFollowContainer
                                                condition={user.id}
                                                id={user.id}
                                                notCard
                                                disabledLink
                                                verifyNoRandom="Yes"
                                                user={user}
                                            />
                                        </div>
                                    ))
                                    : funcMap}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compose;
