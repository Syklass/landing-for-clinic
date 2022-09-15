import React from "react";
import tgw from "../../Assets/icons/tgw.svg"
// import vk from "../../Assets/icons/vk.svg"
// import tg from "../../Assets/icons/tg.svg"
// import inst from "../../Assets/icons/inst.svg"

import vk from "../../Assets/nlg/vkll.svg"
import tg from "../../Assets/nlg/logos_telegram.svg"
import inst from "../../Assets/icons/whatwhite.svg"


function SocialLinks({textColor,center, classd}) {
    return (  
        <div className={`${classd} items-center flex lg:items-start  flex-col`}>
            <span className={`${textColor} mb-3`}>Социальные сети:</span>
            <div className={` flex items-center`}>
                <a className="lg:mx-1 mr-3 w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={vk}></img>
                </a>
                <a className="lg:mx-1 mr-3 w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={inst}></img>
                </a>
                <a className="lg:mx-1 mr-3 w-7 h-7 bg-blue-b5c flex items-center justify-center rounded-[5px] hover:bg-blue-85 transition-all" href="#">
                    <img className={`w-[18px] h-[18px] `} src={tg}></img>
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;