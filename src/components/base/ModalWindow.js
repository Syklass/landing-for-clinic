import React from "react";

function ModalWindow({modalBody, onClose,isVisible = false,className,}) {
    if(isVisible)
        return (  
            
            <div className={`${className} flex justify-center items-center z-50 modal-w w-[100vw] h-[100vh] fixed bg-black bg-opacity-50`}>
                <div className="fixed w-[100vw] h-[100vh]" onClick={()=>{
                    onClose()
                }}></div>
                {modalBody}
            </div>
        );
    return null
}

export default ModalWindow;