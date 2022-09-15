import React from "react";
import ButtonCustom from "../base/ButtonCustom";
import { useState } from "react";
import ModalInput from "../base/Input";
import SuckSess from "./SuckSess";

import vector from "../../Assets/Vector.svg"



 function WannaWithUs  ({onClose}){
    const [isSucces, setIsSucces] = useState(false)
    return (
        <div className={`animate__animated animate__fadeInDown relative flex rounded-xl mx-4 bg-white`}>
            <div className={`${isSucces ? "hidden":"flex"} flex flex-col pb-10 justify-around items-center w-12/12 lg:w-12/12 sm:w-[700px] pt-24 px-2 sm:px-24`}>
                <img onClick={onClose} src = {vector}
                    className = "absolute right-10 top-10 cursor-pointer"/>
                <p className="modal_title mb-6">Хотите работать у нас?</p>
                <p className=" text-lg font-medium text-center mb-8">Оставьте Вашу заявку и наш менеджер свяжется с Вами в ближайшее время</p>
                <ModalInput className="workModal" req={true} placeholder={"Имя*"}/>
                <ModalInput className="workModal" req={true} placeholder={"Фамилия*"}/>
                <ModalInput className="workModal" req={true} placeholder={"Ваш Email*"}/>
                <ButtonCustom onClick={() => {
                    let values = document.querySelectorAll(".workModal")
                    let isOk = true
                    for (let i = 0; i < values.length; i++) {
                        if (values[i].value=="") {
                            alert("Пожалуйста, заполните все обязательные поля")
                            isOk = false
                            break;
                        }
                    }
                    if (isOk) {
                        setIsSucces(!isSucces)
                    }
                }} className={"btnModal w-[224px] h-[62px] mb-3"}> Отправить заявку </ButtonCustom>
                <p className=" text-gray-600 text-xs text-center w-3/5">Заполняя данную форму вы соглашаетесь с <b>Политикой конфиденциальности</b> данного сайта.</p>
            </div>
            <div className={`${isSucces?"block":"hidden"} w-full h-fu`}>
                <SuckSess onClose={onClose}/>
            </div>
        </div>
    )
}

 export default WannaWithUs