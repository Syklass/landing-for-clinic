import React from "react";
import Layout from "../layouts/Layout";

import Missions from "../blocks/Missions";
import Deals from "../blocks/Deals";
import VideoBlock from "../blocks/VideoBlock";
import MainSlider from "../sliders/MainSlider";


function MainPage() {
    const Content = (  
        <div className="">
            <div className="mb-12">
                <MainSlider/>
            </div>
            <div className="pt-12">
                <Missions/>
            </div>
            
            <div className="my-12">
                <Deals/>
            </div>
            <div className="my-12">
                <VideoBlock/>
            </div>
            
            <div className="mbl:-mt-20 lg:mt-12">
                
            </div>
        </div>
    );


    return <Layout content={Content} />;
}

export default MainPage;