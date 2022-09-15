import React from "react";
import Play from "../../Assets/icons/play.svg"
import ToPlay from "../../Assets/icons/ArrowToPlay.svg"
import ModalWindow from "../base/ModalWindow";
import WiretoUs from "../blocks/WiretoUs"
import { useState } from "react";
import Button from "../base/Button";
import Bg from "../../Assets/request/request.png"

function VideoBlock() {
    const [isModal, setIsModal] = useState(false);
    const handleClickModal = () => {
        setIsModal(!isModal);
    }
    return (
        <div id="vidos" className="relative shadow-2xl rounded-l-[20px]">
            <img className="lg: rounded-[20px] absolute -z-10 object-none right-0 w-full h-full" src={Bg}></img>
            <div className="flex bgGrad2 lg:bgGrad rounded-l-[20px] px-4 lg:px-[70px]">
                <div className="w-full lg:w-1/2 py-4 lg:pb-[140px] lg:pt-[90px] mbl:flex mbl:items-center mbl:flex-col">
                    <div className="mb-14">
                        <h3 className="ResTextLogo lg:text-start text-center">Re Source</h3>
                        <p className="text-gray-62 text-sm font-light lg:text-start text-center">КЛИНИКА ИНТЕГРАТИВНОЙ<br/>ВОССТАНОВИТЕЛЬНОЙ МЕДИЦИНЫ</p>
                    </div>
                    <div className="text-[22px] mb-8 lg:mb-20 lg:text-start text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    <Button
                    onClick={()=>{
                        handleClickModal();
                    }}
                    children="Записаться на прием"/>
                </div>
                <div className="w-1/2 items-end justify-center pb-6 hidden lg:flex">
                    <div className="flex justify-end">
                        <p className="relative flex justify-end text-sm font-bold text-white">
                            СМОТРЕТЬ ВИДЕО <br/>ПРО НАШУ КЛИНИКУ 
                            <img className="absolute top-[-20px] right-[-52px]" src={ToPlay}></img>                     
                            <a className="absolute flex left-[148px] bottom-[56px]" href="https://youtu.be/dQw4w9WgXcQ" target="_blank" >
                                <img className="min-w-[159px] min-h-[159px]" src={Play}></img>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <ModalWindow
            isVisible={isModal}
            onClose={() => {
                handleClickModal();
            }}
            modalBody={
                <div className="w-full h-full flex items-center justify-center"
                onClick={(el)=>{
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

export default VideoBlock;