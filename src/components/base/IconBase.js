import React from "react";

function IconBase({href}) {
    return (  
        <a href={href} className="h-[38px] w-[38px] mr-[10px] bg-white rounded-[5px] p-[6px]">
            <img className="h-[25px] w-[25px]" src={LocationIcon}></img>
        </a>
    );
}

export default IconBase;