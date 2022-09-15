import React from 'react';



import SliderBg from "../../Assets/slider/bg-slider.png"
import SliderBgWoman from "../../Assets/slider/womans.png"
import SliderBgAvm from "../../Assets/slider/avm.png"
import ListItem from './ListItem';
import Button from "../base/Button"


function SliderItem({onClick}) {
    return (  
        <div className="rounded-[10px] lg:rounded-[30px] flex items-center justify-center relative w-[99%] min-h-slider max-h-slider">
            <div className="flex justify-between absolute w-full min-h-[367px] md:min-h-slider max-h-slider">
                <img className="absolute w-full h-full select-none rounded-[10px] lg:rounded-[30px]" src={SliderBg}></img>
                <div className="relative flex flex-col items-center lg:block p-6 md:py-14 md:px-14 lg:py-28 lg:pl-28 mdl:w-full 2xl:w-4/6">
                    <div className="flex flex-col items-center md:block">
                        <h1 className="lg:mb-4 mini:text-2xl flex items-center font-semibold text-bronse-33 text-3xl md:leading-[140%] md:text-[50px] tracking-casing relative">
                            <span className="h-full block bg-blue-a7 rounded-[10px] w-[6px] lg:w-[9px] -left-[14px] absolute"></span>
                            КОСМЕТОЛОГИЧЕСКИЕ <br/> УСЛУГИ В НАШЕЙ КЛИНИКЕ
                        </h1>
                        <p className="lg:mb-10 lg:w-3/4 mt-2 md:mt-[14px] text-bronse-33 tracking-casing text-sm font-normal font-roboto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="flex justify-left w-full flex-wrap sm:max-w-[400px] mt-3 md:mt-1">
                            <div className="flex flex-col mr-8 lg:mr-16">
                                <ListItem
                                text="Чистка"/>
                                <ListItem
                                text="Увлажнение"/>
                                <ListItem
                                text="Омоложение"/>
                            </div>
                            <div className="flex flex-col">
                                <ListItem
                                text="Пилинг"/>
                                <ListItem
                                text="Скрабирование"/>
                            </div>
                        </div>
                        <div className="flex">
                            <Button
                            onClick={()=>{
                                onClick();
                            }}
                            className="mt-4 lg:mt-14 relative z-50"
                            children="Записаться на процедуру"/>
                        </div>
                    </div>
                </div>
                <div className="absolute h-full w-full  mdl:hidden">
                    <img className="absolute z-20 right-0 bottom-0 select-none mdxxl:w-3/6" src={SliderBgWoman}></img>
                    <img className="absolute z-10 -right-32 -bottom-8 blur-md select-none mdxxl:w-3/6" src={SliderBgAvm}></img>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;