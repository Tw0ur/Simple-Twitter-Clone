import React from "react";
import "./Nav.css";
import NavMenu from "./NavMenu";
import {findIndexUser} from "../../Redux/user-reducers";

const Nav = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const NavIcon = [
        {
            id: 1,
            link: "/home",
            nav: 'notext',
            verify: true,
            svg: {
                true: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>),
                false: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>)
            }
        },
        {
            id: 2,
            name: "Home",
            link: "/home",
            verify: true,
            svg: {
                true: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                    </g>
                </svg>),
                false: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
                    </g>
                </svg>)
            }
        },
        {
            id: 3, name: "Explore",
            link: "/explore",
            verify: false,
            svg: {
                true: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
                    </g>
                </svg>),
                false: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </g>
                </svg>),

            }
        },
        {
            id: 4,
            name: "Messages",
            link: "/messages",
            verify: false,
            svg: {
                true: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                    </g>
                </svg>),
                false: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                    </g>
                </svg>)
            }
        },
        {
            id: 5,
            name: "Profile",
            verify: false,
            svg: {
                true: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                    </g>
                </svg>),
                false: (<svg viewBox="0 0 24 24" aria-hidden="true" className="iconSvg">
                    <g>
                        <path
                            d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </g>
                </svg>)
            }
        },
    ];

    const check = props.store.getState().follow.users
    const memoizedNavMenus = React.useMemo(() => {
        return NavIcon.map((e) => {

            if (!e.nav && e.id !== 5) {
                return (
                    <NavMenu {...e} key={e.id}/>

                );
            } else if (e.id === 5) {
                return check.map((user) => {
                    if (user.isAuthenticated) {
                        return (
                            <NavMenu
                                name="Profile"

                                link={`/${user.info.ref}`}
                                key={user.id}
                                {...e}
                            />
                        );
                    }
                });
            }
        });
    }, [NavIcon, check]);


    console.log(findIndexUser);
    const {info} = findIndexUser;
    return (
        <div className="Nav">
            <div className="NavWidth ">
                <div className="fixed top-0 h-full">
                    <div className="flex flex-col justify-between NavWidth px-2 h-full ">
                        <div className="w-full">
                            {NavIcon.map((e) => {
                                if (e.nav) {
                                    return (<div className=" CenterItem " key={e.id}>
                                        <NavMenu {...e}/>
                                    </div>)
                                }
                            })}


                            <div className="mt-0.5 mb-1 w-full CenterItem ">{memoizedNavMenus}</div>
                            <div></div>
                        </div>
                        <div className="flex px-4 py-3">
                            <div>
                                {/* <div>
                  {info.name}
                </div>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-current text-white w-5 "><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;
