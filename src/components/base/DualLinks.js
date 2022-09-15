import React from "react";

function DualLinks({style2,style1,classList,href,child1,child2}) {
    return (  
        <a href={href} className={`${classList} tracking-[0.01em]`}>
            <div className={`${style1} mb-3 font-normal text-base text-gray-ad`}>{child1}</div>
            <div className={`${style2}  text-base font-normal`}>{child2}</div>
        </a>
    );
}

export default DualLinks;