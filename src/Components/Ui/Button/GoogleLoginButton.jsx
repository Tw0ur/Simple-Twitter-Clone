import React from 'react'

const GoogleLoginButton = () => {
    const divRef = React.useRef()
    React.useEffect(() => {
        if (divRef.current) {
            window.google.accounts.id.initialize({
                client_id: "YOUR_CLIENT_ID_GOES_HERE",
                callback: (res, error) => {
                    // This is the function that will be executed once the authentication with google is finished
                },
            });
            window.google.accounts.id.renderButton(divRef.current, {
                theme: 'filled_blue',
                size: 'medium',
                type: 'standard',
                text: 'continue_with',
            });
        }
    }, [divRef.current]);
    return (
        <>
            <div
                id="g_id_onload"
                data-client_id="XXXXXX"
                data-auto_prompt="false"
            ></div>
            <div
                className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
                ref={divRef}
            ></div>
        </>
    );
}

export default GoogleLoginButton;