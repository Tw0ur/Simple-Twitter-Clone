import React from "react";
import {ComponentWithCustomTitle} from "./ComponentWithCustomTitle";
import SvgTwitter from "./svgTwitter";
import "./Basic.css";
import LoginProfile from "../Login/LoginProfile";
import {findIndexUser} from "../../Redux/user-reducers";

const Login = () => {
    ComponentWithCustomTitle("Твиттер. Здесь обсуждают все, что происходит.");
    const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
    const [login, setLogin] = React.useState(false)

    // Функция для обновления состояния высоты экрана при изменении размера окна
    const handleResize = () => {
        setScreenHeight(window.innerHeight);
    };

    // Добавление слушателя события изменения размера окна при монтировании компонента
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Отписка от события при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [findIndexUser]);

    const btnLogin = () => {
        setLogin((e) => !e)
    }
    return (
        <div className="max-h-screen min-h-screen relative flex">
            {login && <LoginProfile setLogin={setLogin}/>}
            <div className=" relative flex flex-col w-full  pointer-events-auto flex-1"
                 style={{pointerEvents: login && 'none'}}>
                <div
                    className="w-full h-full flex flex-row-reverse relative "
                    style={{
                        flex: "1 1 auto",
                        minHeight: "auto",
                    }}
                >
                    <div className="max-h-full loginMain flex justify-center flex-col relative">
                        <div className="login w-full flex flex-col items-start relative">

                            <div
                                className="my-12  font-bold"
                                style={{
                                    fontSize: "64px",
                                    lineHeight: "84px",
                                    letterSpacing: "-1.2px",
                                    wordWrap: "break-word",
                                    color: "rgb(231, 233, 234)",
                                }}
                            >
                <span className="text-inherit heavyFont">
                  В курсе происходящего
                </span>
                            </div>
                            <div
                                className="mb-8 text-3xl font-semibold heavyFont"
                                style={{fontSize: "31px", color: "rgb(231, 233, 234)"}}
                            >
                                <span>Присоединяйтесь сейчас!</span>
                            </div>
                            <div className="text-white lightFont">
                                <div className="currentWidth staticWidth currentWidth">
                                    <div className="relative ">
                                        <div></div>
                                    </div>
                                </div>
                                <div
                                    role="button"
                                    data-testid="apple_sign_in_button"
                                    className="currentWidth staticWidth bg-white rounded-full "
                                    style={{borderColor: "rgb(51, 54, 57)"}}
                                >
                                    <div style={{color: "rgb(15, 20, 25)"}}
                                         className="flex items-center justify-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            style={{color: "rgb(15, 20, 25)", fill: "currentcolor"}}
                                            className="h-5 mr-1"
                                        >
                                            <g>
                                                <path
                                                    d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                                            </g>
                                        </svg>
                                        <span className=" font-bold font15">
                      <span>Зарегистрироваться с Apple ID</span>
                    </span>
                                    </div>
                                </div>
                                <div className="flex my-1 currentWidth">
                                    <div className="w-full flex justify-evenly my-1 ">
                                        <div className="w-full flex items-center mx-1">
                                            <div style={{height: '1px', backgroundColor: "rgb(47, 51, 54)"}}
                                                 className="w-full "></div>
                                        </div>
                                        <div className="flex flex-col justify-center mx-1 font15">
                                            <div style={{color: 'rgb(231,233,234)'}}>
                                                <span>или</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center mx-1">
                                            <div style={{height: '1px', backgroundColor: "rgb(47, 51, 54)"}}
                                                 className="w-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="currentWidth staticWidth mb-2 rounded-full hoverBlueBg">
                                    <div
                                        className="h-full w-full flex justify-center items-center font-bold text-white"
                                        style={{fontSize: "15px", lineHeight: "20px",}}>
                    <span>
                      <span>Зарегистрироваться</span>
                    </span>
                                    </div>
                                </div>
                                <div style={{color: 'rgb(113, 118, 123)', fontSize: "11px", lineHeight: "12px"}}
                                     className="pb-5 currentWidth">
                                    Регистрируясь, вы соглашаетесь с{" "}
                                    <a
                                        href="https://twitter.com/tos"
                                        className="hover:underline"
                                        style={{color: "rgb(29, 155, 240)"}}
                                    >
                                        <span>Условиями предоставления услуг</span>
                                    </a>{" "}
                                    и{" "}
                                    <a
                                        href="https://twitter.com/privacy"
                                        className="hover:underline"
                                        style={{color: "rgb(29, 155, 240)"}}
                                    >
                                        <span>Политикой конфиденциальности</span>
                                    </a>
                                    , а также с{" "}
                                    <a
                                        href="https://help.twitter.com/rules-and-policies/twitter-cookies"
                                        className="hover:underline"
                                        style={{color: "rgb(29, 155, 240)"}}
                                    >
                                        <span>Политикой использования файлов cookie</span>
                                    </a>
                                    .
                                </div>
                                <div className="mt-10 flex flex-col">
                                    <div className=" mb-5 currentWidth font-bold font17">
                                        <span>Уже зарегистрированы?</span>
                                    </div>
                                    <div
                                        className="currentWidth staticWidth mb-2 rounded-full hoverGrayBg"
                                        style={{border: "1px solid rgb(83, 100, 113)"}}
                                        onClick={btnLogin}
                                    >
                                        <div
                                            style={{color: "rgb(29, 155, 240)"}}
                                            className="h-full w-full flex justify-center items-center font-bold text-white"
                                        >
                      <span>
                        <span>Войти</span>
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loginImg h-full relative" style={{flex: "1"}}>
                        <div className="flex justify-center flex-col absolute inset-0">
                            <div
                                className="imgLogin absolute inset-0 flex flex-col  justify-center items-stretch"></div>
                            <SvgTwitter
                                height={"50%"}
                                maxHeight={"380px"}
                                maxWidth={"100%"}
                                flex={true}
                                padding="32px"
                            />
                        </div>
                        {/* <img src={registerFormImg} alt="" className='imgLogin'/> */}
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            color: "rgb(113, 118, 123)",
                            fontSize: "12.5px",
                            lineHeight: "16px",
                        }}
                    >
                        <nav
                            aria-label="Нижний колонтитул"
                            role="navigation"
                            className="flex flex-wrap justify-center py-3 px-4"
                        >
                            <a href="https://about.twitter.com" className="pr-4 my-1">
                                <span>О нас</span>
                            </a>
                            <a href="https://help.twitter.com" className="pr-4 my-1">
                                <span>Справочный центр</span>
                            </a>
                            <a href="https://twitter.com/tos" className="pr-4 my-1">
                                <span>Условия предоставления услуг</span>
                            </a>
                            <a href="https://twitter.com/privacy" className="pr-4 my-1">
                                <span>Политика конфиденциальности</span>
                            </a>
                            <a
                                href="https://support.twitter.com/articles/20170514"
                                className="pr-4 my-1"
                            >
                                <span>Политика в отношении файлов cookie</span>
                            </a>
                            <a
                                href="https://help.twitter.com/resources/accessibility"
                                className="pr-4 my-1"
                            >
                                <span>Специальные возможности</span>
                            </a>
                            <a
                                href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo"
                                className="pr-4 my-1"
                            >
                                <span>Информация о рекламе</span>
                            </a>
                            <a href="https://blog.twitter.com" className="pr-4 my-1">
                                <span>Блог</span>
                            </a>
                            <a href="https://status.twitterstat.us" className="pr-4 my-1">
                                <span>Статус</span>
                            </a>
                            <a href="https://careers.twitter.com" className="pr-4 my-1">
                                <span>Работа</span>
                            </a>
                            <a
                                href="https://about.twitter.com/press/brand-assets"
                                className="pr-4 my-1"
                            >
                                <span>Ресурсы бренда</span>
                            </a>
                            <a
                                href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"
                                className="pr-4 my-1"
                            >
                                <span>Реклама</span>
                            </a>
                            <a href="https://marketing.twitter.com" className="pr-4 my-1">
                                <span>Маркетинг</span>
                            </a>
                            <a
                                href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=twitterforbusiness"
                                className="pr-4 my-1"
                            >
                                <span>Твиттер для бизнеса</span>
                            </a>
                            <a href="https://developer.twitter.com" className="pr-4 my-1">
                                <span>Разработчикам</span>
                            </a>
                            <a
                                href="https://twitter.com/i/directory/profiles"
                                className="pr-4 my-1"
                            >
                                <span>Каталог</span>
                            </a>
                            <a href="*" className="pr-4 my-1">
                                <span>Настройки</span>
                            </a>
                            <div className="pr-4 my-1">
                                <span>© 2023 X Corp.</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
