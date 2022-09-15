import React from "react";
import ListImg from "../../Assets/slider/list/li.svg"

function ListItem({text}) {
    return (  
        <div className="flex items-center mb-[14px]">
            <span className="min-w-[29px] min-h-[29px] flex items-center justify-center rounded-full border-[5px] border-blue-b5c border-opacity-50">
                <span className="min-w-[11px] min-h-[11px] bg-blue-87 block m-1 rounded-full"></span>
            </span>
            <p className="ml-3">{text}</p>
        </div>
    );
}

export default ListItem;