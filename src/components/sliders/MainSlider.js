import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../base/SliderItem";
import Arrow from "../../Assets/icons/sliderArrow.svg"
import ModalWindow from "../base/ModalWindow";
import WiretoUs from "../blocks/WiretoUs"
import { useState } from "react";

function MainSlider() {


    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 800,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnDotsHover:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendDots: dots => (
        //     <div>
        //         <ul style={{ margin: "0px" }}> {dots} </ul>
        //     </div>
        // ),
        // customPaging: function (i) {
        //     return (
        //         <span className="min-w-[29px] min-h-[29px] flex items-center justify-center rounded-full border-[5px] border-blue-b5c border-opacity-50">
        //             <span className="min-w-[11px] min-h-[11px] bg-blue-87 block m-1 rounded-full"></span>
        //         </span>
        //     );
        // },



    };
    const [isModal, setIsModal] = useState(false);
    const handleClickModal = () => {
        setIsModal(!isModal);
    }
            
    return (
        
        // <div className="w-full  -mt-10 -mb-28 overflow-hidden sm:mb-0 sm:mt-0">
        <div className="w-full  -mt-10 -mb-28 overflow-hidden lg:overflow-visible sm:mb-0 sm:mt-0">
            <Slider {...settings}>
                <div>
                    <SliderItem onClick={handleClickModal}/>
                </div>
                <div>
                    <SliderItem onClick={handleClickModal}/>
                </div>
                <div>
                    <SliderItem onClick={handleClickModal}/>
                </div>
            </Slider>
            <ModalWindow
            isVisible={isModal}
            onClose={() => {
                handleClickModal();
            }}
            modalBody={
                <div className="w-full h-full flex items-center justify-center"
                onClick={(el)=>{
                    console.log("111")
                }}>
                    {/* <div className="min-w-[280px] min-h-[472px] max-w-[606px] 
                        max-h-[534px] rounded-[20px] relative z-[100000]"
                        onClick={(el)=>{
                            el.stopPropagation()
                        }}>
                        
                    </div> */}
                    <WiretoUs
                    onClose={() => {
                        handleClickModal();
                    }}/>
                </div>
            }
            className="left-0 top-0"/>
        </div>
    );
}

export default MainSlider;