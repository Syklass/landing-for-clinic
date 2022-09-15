import React from 'react';
import TempImg from "../../Assets/deals/sales/deal1.png"

function ImageCard({className,img,bottomTextPadding,headText,descText}) {
    return (  
        <div className={`${className} rounded-[20px] flex flex-col justify-between items-stretch relative max-h-[200px] min-h-[200px] sm:min-h-smallCard w-full sm:min-w-smallCardRes max-w-smallCard sm:max-h-smallCard bg-black bg-opacity-50`}>
            <img className="rounded-[20px] absolute -z-10 w-full h-full object-cover" src={img}></img>
            <div className="px-6 sm:py-10 py-5 flex flex-col justify-between sm:min-h-smallCard sm:min-w-smallCard max-h-[200px] min-h-[200px] sm:max-w-smallCard sm:max-h-smallCard h-full w-full-">
                <h2 className="text-white font-normal text-base tracking-casing">{headText}</h2>
                <h3 className={`${bottomTextPadding} text-white tracking-casing font-semibold text-[22px]`}>{descText}</h3>
            </div>
        </div>
    );
}

export default ImageCard;