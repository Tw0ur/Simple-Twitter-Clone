import React from "react";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="transition-all duration-10000   bg-white hover:bg-black hover:text-white">
            {children}
        </button>
    )
}

export default MyButton;