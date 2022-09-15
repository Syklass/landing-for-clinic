import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import 'animate.css';


import arrB from "../../Assets/icons/arrowB.svg"

import ImageCard from "../base/ImageCard";
import ImageCardLongW from "../base/ImageCardLongW";
import ImageCardLongH from "../base/ImageCardLongH";

import Deals1 from "../../Assets/deals/sales/deal1.png"
import Deals2 from "../../Assets/deals/sales/deal2.png"
import Deals3 from "../../Assets/deals/sales/deal3.png"
import Deals4 from "../../Assets/deals/sales/deal4long.png"
import Deals5 from "../../Assets/deals/sales/deal5.png"

import Ways1 from "../../Assets/deals/targets/child.png"
import Ways2 from "../../Assets/deals/targets/zubi.png"
import Ways3 from "../../Assets/deals/targets/kargio.png"

function Deals() {
    const [isActiveSales, setIsActiveSales] = useState(true)
    const [isActiveWays, setIsActiveWays] = useState(false)
    const [isActiveProg, setIsActiveProg] = useState(false)
    const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnDotsHover:true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
			{
				breakpoint: 1782,
				settings: {
					slidesToShow: 2.8,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1682,
				settings: {
					slidesToShow: 2.6,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1582,
				settings: {
					slidesToShow: 2.4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1482,
				settings: {
					slidesToShow: 2.2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1382,
				settings: {
					slidesToShow: 2.0,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1282,
				settings: {
					slidesToShow: 1.8,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1182,
				settings: {
					slidesToShow: 1.7,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1082,
				settings: {
					slidesToShow: 1.6,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 982,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1.4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 891,
				settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 791,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 691,
				settings: {
					slidesToShow: 1.9,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.5,
				}
			},
			{
				breakpoint: 485,
				settings: {
					slidesToShow: 1.1,
				}
			},
			{
				breakpoint: 367,
				settings: {
					slidesToShow: 1,
				}
			},
        ]
    }
    return (  
        <div  className="flex flex-col items-center sm:mt-16">
            <div>
                <h2 id="linkSales" className="tracking-casing font-semibold text-2xl lg:text-[45px] sm:mt-16 mb-4 sm:mb-8 mbl:text-center">ЧТО МЫ ПРЕДЛАГАЕМ</h2>
            </div>
            <nav className="flex justify-center w-full md:w-2/3 ">
                <span id="salesClick" onClick={() => {setIsActiveSales(true)
                setIsActiveWays(false)
                setIsActiveProg(false)
                }} className={`${isActiveSales? "mb:text-center font-semibold text-black-30  border-b-[5px] border-blue-b5":"text-white-CC font-normal border-b-2 border-white-border"} mb:text-center px-3 lg:px-10 mb:mb-4 cursor-pointer select-none
                text-[15px] sm:text-[26px] tracking-casing pb-[10px]`}>
                    Акции
                </span>

                <span className="block w-2 sm:w-6 border-b-2 border-white-border pb-[10px] mb:mb-4"></span>
                <span onClick={() => {setIsActiveWays(true)
                setIsActiveSales(false)
                setIsActiveProg(false)
                }} className={`${isActiveWays?"mb:text-center font-semibold text-black-30  border-b-[5px] border-blue-b5":"text-white-CC font-normal border-b-2 border-white-border"} mb:text-center px-3 lg:px-10 mb:mb-4 cursor-pointer select-none
                text-[15px] sm:text-[26px] tracking-casing pb-[10px]`}>
                    Направления
                </span>
                <span className="block w-2 sm:w-6 border-b-2 border-white-border pb-[10px] mb:mb-4"></span>
                <span  onClick={() => {setIsActiveProg(true)
                setIsActiveSales(false)
                setIsActiveWays(false)
                }} className={`${isActiveProg?"mb:text-center font-semibold text-black-30  border-b-[5px] border-blue-b5":"text-white-CC font-normal border-b-2 border-white-border"} mb:text-center px-3 lg:px-10 mb:mb-4 cursor-pointer select-none
                text-[15px] sm:text-[26px] tracking-casing pb-[10px]`}>
                    Программы
                </span>
            </nav>
            <div  className={`${isActiveSales?"flex animate__animated animate__fadeIn":"hidden animate__animated animate__fadeOut"}  sm:w-auto mt-5 flex-col items-center w-full`}>
                <div className="flex flex-col lg:flex-row items-center w-full sm:w-auto mdsr:flex-col">
                    <ImageCard img={Deals1}
                    className="my-4 lg:my-0 mdsr:mb-4"
                    headText="Кислородная мезотерапия"
                    descText="Тестовый текст"/>
                    <ImageCard img={Deals1}
                    className="lg:mx-5 mdsr:mb-4"
                    headText="Кислородная мезотерапия"
                    descText="Тестовый текст"/>
                    <ImageCard img={Deals1}
                    className="lg:my-0 "
                    headText="Кислородная мезотерапия"
                    descText="Тестовый текст"/>
                </div>
                <div id="showMoreSales" className="hidden lg:flex lg:mt-[14px] w-full flex-col lg:flex-row items-center mdsr:justify-center mdsr:flex-col-reverse">
                    <ImageCardLongW
                    className="mmdsr:mr-5 mdrs:mr-0"
                    img={Deals4}
                    headText="Лабораторная для сдачи анализов"
                    descText="Сдаете часто анализы?"
                    descText2="Повышенный кешбэк 10%"/>
                    <ImageCard img={Deals1}
                    className="my-4 lg:my-0 mdsr:mb-4"
                    headText="Кислородная мезотерапия"
                    descText="Тестовый текст"/>
                </div>
                <span onClick={(el)=>{
                    document.getElementById("showMoreSales").classList.remove("hidden")
                    document.getElementById("showMoreSales").classList.add("flex")
                    el.target.classList.remove("block")
                    el.target.classList.add("hidden")
                }}
                className={`block lg:hidden pb-1 border-b-[1px] border-bronse-78 text-bronse-78 mt-[22px] text-[16px] font-medium tracking-spacing`}>Показать еще</span>
            </div>
            <div className={`${isActiveWays?"flex animate__animated animate__fadeIn":" hidden animate__animated animate__fadeOut"} w-full mt-5 flex-col`}>
                <div className="w-full">
                    <Slider className="pb-6 md:pb-3" {...settings}>
                        <div>
                            <ImageCardLongH
                            img={Ways1}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Терапия"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            img={Ways2}
                            headText="Эндокринология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways3}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Неврология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways1}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Гинекология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways2}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Урология"/>
                        </div>
                        {/* <div>
                            <ImageCardLongH
                            img={Ways3}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Дерматовенерология"/>
                        </div> */}
                        <div>
                            <ImageCardLongH
                            img={Ways1}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Косметология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways2}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Трихология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways3}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Флебология"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways1}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Физиотерапия"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways2}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Массаж"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways3}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Остеопатия"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways1}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Рефлексотерапия"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways2}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Психиатрия"/>
                        </div>
                        <div>
                            <ImageCardLongH
                            img={Ways3}
                            className="!min-w-[280px] !mb:min-h-[368px] !mb:max-h-[368px] !h-[500px]"
                            headText="Педиатрия"/>
                        </div>
                    </Slider>
                </div>
                <div className="flex">
                    
                    
                    
                </div>
            </div>
            <div className={`${isActiveProg?"flex animate__animated animate__fadeIn":" hidden animate__animated animate__fadeOut"} sm:w-auto w-full mdl:flex-col items-center justify-center mt-5 mdsr:flex-col`}>
                <div className="mdl:flex mbl:!flex-col mdl:items-center !w-[100%] sm:!w-full mdsr:flex mdl:flex-col">
                    <ImageCard img={Deals1}
                    className="mb-3 mdsr:mx-4 !min-w-[0px] w-full"
                    headText="Check up Ресурс организма"
                    descText="Тестовый текст"/>
                    <a href="/program" className="hidden mdl:px-10 lg:flex w-full min-h-smallCard max-h-smallCard flex items-start justify-center flex-col">
                        <p>+15 ПРОГРАММ</p>
                        <p>ПОСМОТРЕТЬ ВСЕ ПРОГРАММЫ</p>
                        <img className="ml-[50%]" src={arrB}></img>
                    </a>
                    
                </div>
                <div className="mdsr:mb-3 !w-[100%] sm:w-auto flex items-center justify-center">
                    <ImageCardLongH
                    className="mt-1 lg:mx-5 mdl:mb-3"
                    img={Ways1}
                    headText="Мужское здоровье"/>
                </div>
                <div id="showMoreProgs" className="mdl:flex mbl:!flex-col mdl:items-center !w-[100%] sm:!w-full mdsr:flex mdl:flex-col">
                    <ImageCard img={Deals1}
                    className="mb-3 mdsr:mx-4 !min-w-[0px] w-full"
                    headText="Check up Ресурс организма"
                    descText="Тестовый текст"/>
                    <ImageCard img={Deals1}
                    className="mdl:mb-3"
                    headText="Женское здоровье"
                    descText="Тестовый текст"/>
                </div>
                <a href="/program" className={`block lg:hidden pb-1 border-b-[1px] border-bronse-78 text-bronse-78 mt-[22px] text-[16px] font-medium tracking-spacing`}>Показать еще</a>
            </div>
        </div>
    );
}

export default Deals;