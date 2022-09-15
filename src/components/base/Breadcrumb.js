
import React from 'react';
import CrumbArrow from "../../Assets/crumbArrow.svg"

function Breadcrumb({links,end}) {
    const breads = links.map((links, i) =>{
        return (
            <div className={`cursor-pointer flex`}>
                <a className={`${links.link=="" || links.ends==true ? "text-brown-77 font-semibold":"text-black-30 font-normal"} text-xs lg:text-[22px]`} href={links.link}>{links.name}</a>
                <img className={`${links.link=="" || links.ends==true ? "hidden" : "block"} mx-4`} src={CrumbArrow}/>
            </div>
        );
    }); 
    return (
        <div className="flex">{breads}</div>
    );
}

export default Breadcrumb;