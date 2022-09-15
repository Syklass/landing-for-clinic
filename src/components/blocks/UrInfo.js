import React from "react";
import ArrowB from "../../Assets/icons/arrowB.svg"
import ArrowW from "../../Assets/icons/arrowW.svg"
import UrInfoZag from "../../Assets/urist/urist.png"


function UrInfo() {
    return (  
        <div className="">
            <h3 className="flex justify-center items-center lg:items-start lg:justify-start font-semibold text-[20px] lg:text-[45px] mb-[30px] lg:mb-[70px] w-full text-center lg:text-start ">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h3>
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    {/* <a href="/devices" className="z-10 relative  flex justify-center h-[200px] sm:h-[280px]">
                        <div className="group transition-all px-5 lg:px-14 z-20 relative w-full h-[200px] sm:h-[280px] flex justify-center bg-inherit hover:bg-black max-w-[1655px]">
                            <img className="UrInfoImage w-full -z-10 absolute h-[200px] sm:h-[280px] opacity-0 transition-all group-hover:opacity-50" src={UrInfoZag}></img>
                            <div className="UrInfoMicroBlock flex items-center w-full justify-around flex-col lg:flex-row">
                                <h3 className="UrInfoText1 w-full lg:w-3/5 sm:w-3/5 transition-all group-hover:text-white text-lg lg:text-[32px] font-semibold">Оборудование и препараты</h3>
                                <p className="lg:ml-3 UrInfoText2 w-full sm:w-3/5 transition-all group-hover:text-white text-base lg:text-2xl font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <div className="w-full lg:w-1/4 flex justify-end mr-5 ml-5">
                                    <img className="w-14 hidden group-hover:block transition-all" src={ArrowW}></img>
                                    <img className="w-14 block group-hover:hidden transition-all" src={ArrowB}></img>
                                </div>
                            </div>
                        </div>
                    </a> */}
                    <a className="z-10 relative  flex justify-center h-[200px] sm:h-[280px]">
                        <div className="group transition-all px-5 lg:px-14 z-20 relative w-full h-[200px] sm:h-[280px] flex justify-center bg-inherit hover:bg-black max-w-[1655px]">
                            <img className="UrInfoImage w-full -z-10 absolute h-[200px] sm:h-[280px] opacity-0 transition-all group-hover:opacity-50" src={UrInfoZag}></img>
                            <div className="UrInfoMicroBlock flex items-center w-full justify-around flex-col lg:flex-row">
                                <h3 className="UrInfoText1 w-full lg:w-3/5 sm:w-3/5 transition-all group-hover:text-white text-lg lg:text-[32px] font-semibold">Сертификаты и лицензия</h3>
                                <p className="lg:ml-3 UrInfoText2 w-full sm:w-3/5 transition-all group-hover:text-white text-base lg:text-2xl font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <div className="w-full lg:w-1/4 flex justify-end mr-5 ml-5">
                                    <img className="w-14 hidden group-hover:block transition-all" src={ArrowW}></img>
                                    <img className="w-14 block group-hover:hidden transition-all" src={ArrowB}></img>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="z-10 relative  flex justify-center h-[200px] sm:h-[280px]">
                        <div className="group transition-all px-5 lg:px-14 z-20 relative w-full h-[200px] sm:h-[280px] flex justify-center bg-inherit hover:bg-black max-w-[1655px]">
                            <img className="UrInfoImage w-full -z-10 absolute h-[200px] sm:h-[280px] opacity-0 transition-all group-hover:opacity-50" src={UrInfoZag}></img>
                            <div className="UrInfoMicroBlock flex items-center w-full justify-around flex-col lg:flex-row">
                                <h3 className="UrInfoText1 w-full lg:w-3/5 sm:w-3/5 transition-all group-hover:text-white text-lg lg:text-[32px] font-semibold">Информация для пациентов</h3>
                                <p className="lg:ml-3 UrInfoText2 w-full sm:w-3/5 transition-all group-hover:text-white text-base lg:text-2xl font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                                <div className="w-full lg:w-1/4 flex justify-end mr-5 ml-5">
                                    <img className="w-14 hidden group-hover:block transition-all" src={ArrowW}></img>
                                    <img className="w-14 block group-hover:hidden transition-all" src={ArrowB}></img>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UrInfo;