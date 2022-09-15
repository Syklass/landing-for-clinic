import React from "react";
import ButtonCustom from "../base/ButtonCustom";
import ModalInput from "../base/Input";
import { useState } from "react";
import SuckSess from "./SuckSess";

import vector from "../../Assets/Vector.svg"



 function WriteToUs  ({onClose}){
    const [isSucces, setIsSucces] = useState(false)
    return (
        <div className="animate__animated animate__fadeInDown relative  rounded-xl mx-4 bg-white">
            <div className={`${isSucces ? "hidden":"flex"} flex flex-col justify-around items-center w-12/12 sm:w-[700px] pt-24 px-2 sm:px-24 pb-10`}>
                <img onClick={onClose} src = {vector}
                className = "absolute right-10 top-10 cursor-pointer"/>
                <p className="modal_title mb-6">Записаться на прием</p>
                <ModalInput className="dealModal" req={true} placeholder={"Имя*"}/>
                <ModalInput className="dealModal" req={true} placeholder={"Фамилия*"}/>
                <ModalInput className="dealModal" req={true} placeholder={"Ваш телефон*"}/>
                <ButtonCustom onClick={() => {
                    let values = document.querySelectorAll(".dealModal")
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
                }} className={"btnModal w-[196px] h-[62px] mb-3"}> Записаться </ButtonCustom>
                <p className=" text-gray-600 text-xs text-center w-3/5">Нажимая на кнопку «Записаться», я даю согласие
                на <a className=" text-blue-300 underline">обработку персональных данных</a></p>
            </div>
            <div className={`${isSucces?"block":"hidden"}`}>
                <SuckSess onClose={onClose}/>
            </div>
        </div>
    )
}

 export default WriteToUs