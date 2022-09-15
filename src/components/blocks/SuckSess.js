import React from "react";
import Button from "../base/Button";
import ModalInput from "../base/Input";
import ok from "../../Assets/ok.svg"
import MoreLinks from "../base/MoreLinks";

import vector from "../../Assets/Vector.svg"



function SuckSess ({onClose}){
    return (
        <div className="relative flex flex-col justify-around items-center min-w-[320px] max-w-full lg:w-[700px] mx-4 pt-24 px-2 sm:px-24 pb-10 rounded-xl bg-white">
            <img onClick={onClose} src = {vector}
                className = "absolute right-10 top-10 cursor-pointer"/>
            <div className="lg:mb-12 mb-6 w-[92px] h-[92px] bg-blue-87 rounded-full flex items-center justify-center">
                <img src={ok} className="h-[26px] w-[35px]"></img>
            </div>
            <p className="lg:mb-8 mb-4 font-semibold lg:text-[28px] text-[20px] text-bronse-78">Заявка отправлена</p>
            <p className="lg:mb-14 mb-8 lg:text-[18px] text-[14px] font-normal text-black-30 text-center">Спасибо за заявку! Мы свяжемся <br></br>с Вами в ближайшее время.</p>
            <MoreLinks
            textColor="text-black-30"/>
        </div>
    )
}

export default SuckSess