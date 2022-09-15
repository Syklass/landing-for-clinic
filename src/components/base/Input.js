import React from "react";


function ModalInput ({placeholder,req=false,className}) {
    return (
        <input className={`${req ? "req" : ""} px-2 ${className} modal_input py-3 text-sm w-2/3 mb-5`} placeholder={placeholder}/>
    )
}


export default ModalInput