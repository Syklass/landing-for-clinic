import React from "react";
import Logo from "../../Assets/logos/LogoFooter.svg"

import DualLinks from "../base/DualLinks";
import PhoneNumber from "../base/PhoneNumber";
import SocialLinks from "../base/SocialLinks";
import ButtonCustom from "../base/ButtonCustom";
import ModalWindow from "../base/ModalWindow";
import { useState } from "react";
import WannaWithUs from "../blocks/WannaWithUs";

function Footer() {
    const [isModal, setIsModal] = useState(false);
    const handleClickModal = () => {
        setIsModal(!isModal);
    }
    return (  
        <div className="padding-x py-8 bg-gray-62">
            <div className="flex lg:flex-row flex-col items-center mdlm:items-start lg:justify-between ">
                <div className="flex mdlm:w-2/5 flex-col lg:justify-between items-center mdlm:items-start mdlm:flex-row">
                    <div className="mdlm:w-1/3">
                        <img className="min-w-[172px] min-h-[59px] mdlm:mr-12" src={Logo}></img>
                    </div>
                    <nav className="mbl:text-center flex mdlm:flex-row flex-col w-2/3 mdlm:justify-center mdlm:items-start items-center">
                        <div className="flex flex-col mbl:mt-8">
                            <a href="/#linkSales" className="font-normal text-[22px] text-white mb-4 mdlm:text-start text-center">Акции</a>
                            <a href="/#aboutUs" className="font-normal text-[22px] text-white mb-4 mdlm:mb-0  mdlm:text-start text-center">О нас</a>
                        </div>
                        <div className="mdlm:ml-16 flex flex-col">

                        <a href="/#conts" className="font-normal text-[22px] text-white !mb-4 mdlm:mb-0  mdlm:text-start text-center">Контакты</a>
                            <a href="/#vidos" className="font-normal text-[22px] text-white mb-4 mdlm:text-start text-center">Пациентам</a>
                        </div>
                    </nav>
                </div>
                <div className="flex mdlm:w-4/5 justify-end">
                    <div className="mbl:flex-col-reverse mt-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:w-10/12 lg:items-start items-center">
                        <div className="w-1/3 flex flex-col-reverse items-center lg:mr-24">
                            <ButtonCustom onClick={()=>{
                            handleClickModal();
                            }}
                            className={`btnHead min-w-[200px] lg:w-[200px] h-[50px] mt-8 mb-8 lg:mb-0 lg:mt-0`} children="Хочу работать у Вас"/>
                            <a href="#" className="mb-4 text-white flex-col items-center text-center lg:text-center lg:items-start font-semibold text-[22px]">
                                Политика<br/>конфиденциальности
                                <span className="mt-2 h-[1.5px] w-full bg-white block"></span>
                            </a>
                        </div>
                        <div className="flex flex-col mb-12 text-center">
                            <DualLinks
                            classList="mb-4 lg:mb-7 text-center sm:text-start hidden sm:block"
                            style1="mb-2 text-social text-center lg:text-start"
                            style2="text-white text-center lg:text-start"
                            child1="E-mail:"
                            child2="atfxolavld@mail.com"/>
                            <DualLinks
                            classList="text-center sm:text-start mb-4 lg:mb-0 hidden sm:block"
                            style1="mb-2 text-social text-center lg:text-start"
                            style2="text-white text-center lg:text-start"
                            child1="Адрес клиники:"
                            child2="г. Москва, Петровский пр. 2"/>
                            <DualLinks
                            classList="sm:hidden"
                            child1="Телефон для связи:"
                            child2={<PhoneNumber/>}
                            style1="mb-2 text-social"
                            style2="text-white"/>
                    
                        </div>
                        <div className="my-4">
                        </div>
                        
                        <SocialLinks
                        center={window.innerWidth<1024 ? true : false }
                        textColor="text-social"/>

                        <DualLinks
                            classList="text-center sm:text-start mb-4 lg:mb-0 sm:hidden"
                            style1="mb-2 text-social"
                            style2="text-white"
                            child1="Адрес клиники:"
                            child2="г. Москва, Петровский пр.,2"/>

                        </div>
                </div>
            </div>
            <span className="h-[1px] bg-white-a2 w-full block mt-10 mb-10"></span>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="font-semibold text-lg text-white">© Re Source 2022</div>
                <div className="font-semibold text-lg text-white">Разработано Cleverra</div>
            </div>
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
                    {/* <SuckSess
                    onClose={() => {
                        handleClickModal();
                    }}/> */}
                    <WannaWithUs onClose={() => {
                        handleClickModal();
                    }}/>
                </div>
            }
            className="left-0 top-0"/>
        </div>
    );
}

export default Footer;