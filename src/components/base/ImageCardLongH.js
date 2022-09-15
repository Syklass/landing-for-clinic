import React from "react";

function ImageCardLongH({className,img,headText}) {
    return (  
        <div className={`${className} sm:rounded-[20px] rounded-[5px] relative 
        md:min-h-longHCard w-[98%] sm:min-w-[540px] max-h-longHCard min-h-[368px]  
        md:max-w-longHCard md:max-h-longHCard bg-black bg-opacity-25 flex items-center justify-center`}>
            <img className="sm:rounded-[20px] rounded-[5px] absolute -z-10 object-cover w-full h-full" src={img}></img>
            <div className="flex items-center justify-center 
            max-h-[368px] min-w-[280px]]
            md:min-h-longHCard md:min-w-longHCard md:max-w-longHCard
            md:max-h-longHCard h-full w-[99%]">
                <h2 className="w-full text-center text-white font-semibold text-[28px] lg:text-[45px] tracking-casing">{headText}</h2>
            </div>
        </div>
    );
}

export default ImageCardLongH;