import React from "react";
// import vk from "../../Assets/icons/vk.svg"
// import tg from "../../Assets/icons/tg.svg"
// import inst from "../../Assets/icons/inst.svg"

import vk from "../../Assets/nlg/vkll.svg"
import tg from "../../Assets/nlg/logos_telegram.svg"
import inst from "../../Assets/nlg/inr.svg"


function MoreLinks({textColor,center}) {
    return (  
        <div className={`items-center flex flex-col`}>
            <span className={`${textColor} mb-3 font-medium text-[14px] lg:text-[22px]`}>Больше новостей:</span>
            <div className={` flex items-center`}>
                <a className="mr-5 w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={vk}></img>
                </a>
                <a className="w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={inst}></img>
                </a>
                {/* <a className="lg:mx-1 mr-3 w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={tg}></img>
                </a> */}
            </div>
        </div>
    );
}

export default MoreLinks;