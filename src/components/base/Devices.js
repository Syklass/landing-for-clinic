import React from "react";
import ArrowB from "../../Assets/icons/arrowB.svg"

function Devices({img,head,desc,link}) {
    return (  
        <a href={link} className="py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row items-center">
                <img src={img} className="
                lg:w-[402px] lg:h-[258px]
                mb-5 lg:mr-5 lg:mb-0
                "></img>
                <div className="max-w-[402px] lg:max-w-none lg:w-full">
                    <h1 className="text-base font-semibold 
                    lg:text-[32px] tracking-casing">
                        {head}
                    </h1>
                    <p className="lg:w-3/4 mmdsr:w-2/3 text-sm font-normal 
                    lg:text-lg tracking-casing my-6 lg:my-8">
                        {desc}
                    </p>
                    <img className="" 
                    src={ArrowB}></img>
                </div>
            </div>
        </a>
    );
}

export default Devices;