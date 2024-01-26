import React from "react";
import {currentParse, findIndexUser} from "../../Redux/user-reducers";
import {useNavigate} from "react-router-dom";
import SvgTwitter from "../Main/svgTwitter";
import "./Login.css";
import InputLogin from "./InputLogin";

const LoginProfile = (props) => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [btn, setBtn] = React.useState(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (findIndexUser) {
            navigate("/home");
        }
    }, [navigate, btn, password]);


    const btnLogin = (e) => {
        e.preventDefault();

        if (login && password) currentParse(login, password);
        setBtn(true);
    };

    return (
        <div className="absolute inset-0">
            <div
                className="relative h-full w-full z-10"
                style={{backgroundColor: "rgba(91, 112, 131, 0.4)"}}
            ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div className="h-[650px] w-[600px] rounded-2xl bg-black flex flex-col items-center z-10 relative">
                    <div className="h-[53px] w-full flex items-center px-4 relative">
                        <div onClick={() => props.setLogin((e) => !e)}>
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="fill-current w-5 h-5 text-[rgb(239, 243, 244)]"
                            >
                                <g>
                                    <path
                                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="absolute flex items-center  left-[47%] h-full">
                            <SvgTwitter height="32px"/>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex flex-col w-[364px] px-8 pb-12 m-auto">
                            <div className="relative w-full py-3 ">
                                <div className="my-5 text-[31px] lightFont font-bold">
                                    Вход в X
                                </div>
                                <div className="my-2 text-lg">
                                    Подсказка
                                </div>
                                <div className="my-2 text-base opacity-50">
                                    Логин: test@mail.ru
                                </div>
                                <div className="my-2 text-base opacity-50">
                                    Пароль: 12345678
                                </div>
                                <InputLogin type='text' text={login} setText={setLogin}/>
                                <InputLogin type='password' text={password} setText={setPassword} btnLogin={btnLogin}/>


                                <div onClick={btnLogin}
                                     className="cursor-pointer w-full rounded-full my-6 text-black flex justify-center items-center px-8 min-h-[52px] font-bold text-lg"
                                     style={{
                                         backgroundColor: (login && password) ? 'white' : '#EFF3F4',
                                         opacity: (login && password) ? '1' : '0.5'
                                     }}>
                                    Войти
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginProfile;
