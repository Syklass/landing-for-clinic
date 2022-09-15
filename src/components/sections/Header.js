import React from "react";
import logo from "../../Assets/logos/Logo.svg"
import PhoneNumber from "../base/PhoneNumber";
import LocationIcon  from "../../Assets/icons/map-marker.svg"
import LocationIconWhite  from "../../Assets/icons/map-marker-white.svg"
import tg from "../../Assets/icons/tgNone.svg"
import whats from "../../Assets/icons/watsNot.svg"
import vk from "../../Assets/icons/vkNone.svg"
import burgerClose from "../../Assets/icons/closeBurger.svg"
import burger from "../../Assets/icons/burger.svg"
import Button from "../base/Button";
import SuckSess from "../blocks/SuckSess";
import ModalWindow from "../base/ModalWindow";
import WannaWithUs from "../blocks/WannaWithUs";

import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (  
        <div className={`flex flex-col padding-x py-6`}>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/4 flex items-center justify-between lg:justify-start">
                    <a href="/" className="lg:w-3/4">
                        <img src={logo}></img>
                    </a>
                    <div onClick={handleClick} className="lg:hidden flex items-center justify-center">
                        <img className="h-8 w-8" src={isOpen ? burgerClose : burger}></img>
                    </div>
                </div>
                <div className="hidden lg:flex w-full justify-end items-center">
                    <div className="flex flex-col mdl:mr-[90px] mr-[180px]">
                        <div className="flex items-center mb-2">
                            <span className="mr-2">Свяжитесь с нами online</span>
                            <span className=" font-comis text-xs px-3 py-[1px]
                            bg-green-8e text-white rounded-[5px]">online</span>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="mr-3 h-[38px] w-[38px] bg-white hover:bg-white-f2 transition-all rounded-[5px] p-[6px]">
                                <img className="w-[25px] h-[25px]" src={whats}></img>
                            </a>
                            <a href="#" className="mr-3 h-[38px] w-[38px] bg-white hover:bg-white-f2 transition-all rounded-[5px] p-[6px]">
                                <img className="w-[25px] h-[25px]" src={tg}></img>
                            </a>
                            <a href="#" className="mr-3 h-[38px] w-[38px] bg-white hover:bg-white-f2 transition-all rounded-[5px] p-[6px]">
                                <img className="w-[25px] h-[25px]" src={vk}></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex items-center mr-10">
                            <span className="h-[38px] w-[38px] mr-[10px] bg-white hover:bg-white-f2 transition-all rounded-[5px] p-[6px]">
                                <img className="h-[25px] w-[25px]" src={LocationIcon}></img>
                            </span>
                            <span>г. Москва, <br/>Петровский пр. 2</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-1">Ежедневно с 10:00 до 20:00</div>
                            <PhoneNumber classd={"!justify-start"}/>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen?"hidden":"flex"} lg:hidden w-full flex-col mb:mt-5 items-center mt`}>
                    <div className="flex items-center mb-2">
                        <span className="mr-2">Свяжитесь с нами online</span>
                        <span className=" font-comis text-xs px-3 py-[1px]
                        bg-green-8e text-white rounded-[5px]">online</span>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={whats}></img>
                        </a>
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={tg}></img>
                        </a>
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={vk}></img>
                        </a>
                    </div>
                </div>
            </div>
            <span className="h-[1px] w-full hidden lg:block bg-gray-d7 mt-5 mb-5"></span>
            <div className={`${isOpen ? "block lg:flex" : "hidden lg:flex"} mt-6 lg:mt-0 flex lg:flex-row flex-col lg:items-center lg:justify-between`}>
                <nav className="flex lg:flex-row flex-col lg:items-center">
                    {/* <div className="mb-4 lg:mr-5 lg:mb-0">
                        <div className="text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all">Все услуги</div>
                    </div> */}
                    <a onClick={()=>{
                        document.getElementById("salesClick").click()
                    }} href="/#linkSales" className="mb-4 lg:mr-5 lg:mb-0 text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all font-roboto">Акции</a>
                    <a href="/#aboutUs" className="mb-4 lg:mr-5 lg:mb-0 text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all font-roboto">О нас</a>
                    <a href="/#vidos" className="mb-4 lg:mr-5 lg:mb-0 text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all font-roboto">Пациентам</a>
                    <a href="/#conts" className="mb-4 lg:mr-5 lg:mb-0 text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all font-roboto">Контакты</a>
                    <a href="/devices" className="mb-4 lg:mr-5 lg:mb-0 text-black-30 hover:text-brown-77 cursor-pointer font-normal text-lg transition-all font-roboto">Оснащение клиники</a>
                </nav>
                
                <div className="lg:hidden flex flex-col">
                        <div className="flex items-center mb-5">
                            <span className="h-[38px] w-[38px] mr-[10px] bg-blue-b5 rounded-[5px] p-[6px]">
                                <img className="h-[25px] w-[25px] fill-white" src={LocationIconWhite}></img>
                            </span>
                            <span>г. Москва, <br/>Петровский пр.,2</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="mb-1">Ежедневно с 10:00 до 20:00</div>
                                <div className="flex items-start"><PhoneNumber/></div>
                            </div>
                        </div>
                </div>
                <div className={`flex lg:hidden w-full flex-col mb:mt-5 items-center mt`}>
                    <div className="flex items-center mb-2">
                        <span className="mr-2">Свяжитесь с нами online</span>
                        <span className=" font-comis text-xs px-3 py-[1px]
                        bg-green-8e text-white rounded-[5px]">online</span>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={whats}></img>
                        </a>
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={tg}></img>
                        </a>
                        <a href="#" className="mr-3 h-[38px] w-[38px] bg-white rounded-[5px] p-[6px]">
                            <img className="w-[25px] h-[25px]" src={vk}></img>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;