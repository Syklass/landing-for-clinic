import React from "react";

function Button({onClick, className, children}) {
    return (  
        <button onClick={onClick} className={`${className} 
        btnDoctor w-[274px] h-[69px] font-semibold bg-btn-grad text-white -tracking-[0.01em]
        `}>
            {children}
        </button>
    );
}

export default Button;