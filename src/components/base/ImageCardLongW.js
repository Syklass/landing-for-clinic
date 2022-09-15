import React from "react";

function ImageCardLongW({className,img,imgClassName,bottomTextPadding,headText,descText,descText2}) {
    return (  
        <div className={`${className} rounded-[20px] relative min-h-longWCard w-full lg:min-w-longWCard lg:max-w-longWCard max-h-longWCard bg-black bg-opacity-25`}>
            <img className={`${imgClassName} rounded-[20px] absolute -z-10 w-full h-full object-cover`} src={img}></img>
            <div className="px-6 py-10 flex flex-col justify-between max-w-[280px] min-w-[280px] min-h-longWCard lg:min-w-smallCard lg:max-w-longWCard lg:max-h-longWCard h-full w-full-">
                <h2 className="text-white font-normal text-base tracking-casing">{headText}</h2>
                <div>
                    <h3 className={`${bottomTextPadding} text-white tracking-casing font-semibold text-[28px] lg:text-[40px]`}>{descText}</h3>
                    <h4 className={`text-white tracking-casing font-semibold text-[18px] lg:text-[26px]`}>{descText2}</h4>
                </div>
            </div>
        </div>
    );
}

export default ImageCardLongW;