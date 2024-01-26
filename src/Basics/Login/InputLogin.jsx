import React from 'react'

const InputLogin = (props) => {
    const {type, text, setText, btnLogin} = props;
    const [inputFocus, setInputFocus] = React.useState(false);
    const onChangeType = (e) => {
        setText(e.target.value);
    };
    return (
        <div className="relative rounded borderInput my-4">
            <div className="absolute  w-full h-full flex ">
                <div
                    className={` ${
                        inputFocus || text ? "inputFocus" : "noInputFocus"
                    } labelInput`}
                    style={{
                        color: inputFocus
                            ? "rgb(19,155,240)"
                            : "rgb(113, 118, 123)",
                    }}
                >
                    {type === 'password' ? 'Введите пароль' : 'Номер телефона ,адрес электронной почты или имя пользователя'}
                </div>
            </div>
            <div className="text-white w-full mt-4 pt-3 pb-2 px-2 z-[1]">
                <input
                    required
                    type={type === 'password' ? 'password' : 'text'}
                    onClick={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    className="inputLogin "
                    value={text}
                    onChange={onChangeType}
                    onKeyDown={(event) => {
                        if (type === 'password' && event.keyCode === 13) {
                            btnLogin(event)
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default InputLogin;