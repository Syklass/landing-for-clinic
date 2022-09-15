import React from "react";

function ButtonCustom({onClick, onMouseEnter, className, children}) {
    return (  
        <button onMouseEnter={onMouseEnter} onClick={onClick} className={`${className} 
        font-semibold bg-btn-grad text-white -tracking-[0.01em]
        `}>
            {children}
        </button>
    );
}

export default ButtonCustom;