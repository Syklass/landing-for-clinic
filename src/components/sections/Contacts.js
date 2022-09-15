import React from "react";
import DualLinks from "../base/DualLinks";
import SocialLinks from "../base/SocialLinks";
import PhoneNumber from "../base/PhoneNumber";

function Contacts() {
    return (  
        <div id="conts" className="lg:pl-16 flex flex-col">
            <div className="flex lg:flex-row flex-col">
                <div className='w-full lg:w-3/6 mbl:pr-0 pt-8 lg:pt-16 pr-5 lg:block flex items-center flex-col mbl:text-center'>
                    <div className="sm:mb-20 mb-10">
                        <h3 className="font-semibold sm:text-[45px] text-4xl tracking-casing mb mb-6 lg:text-start text-center">КОНТАКТЫ</h3>
                        <p className="tracking-casing text-2xl font-normal">Связаться с нами можно следующим образом</p>
                    </div>
                    <div className="flex flex-col sm:flex-row mb-8 flex-wrap sm:max-w-[500px] justify-between md:mr-0 lg:mr-[12%]">
                        
                            <DualLinks
                            classList="mb-4"
                            child1="E-mail:"
                            child2="atfxolavld@mail.com"

                            style2="text-black font-medium"/>
                            
                            <DualLinks
                            classList="sm:mt-0 relative sm:left-16"
                            child1="Адрес клиники:"
                            child2="г. Москва, Петровский пр. 2"
                            style2="text-black font-medium"/>
                            <SocialLinks
                            classd = "mt-4 sm:mr-[1.1rem] sm:mt-8"
                            textColor="text-gray-ad"
                            center={window.innerWidth<1024 ? true : false }/>
                        
                            <DualLinks
                            classList="flex flex-col sm:mt-8 mt-4"
                            child1="Телефон для связи:"
                            child2={<PhoneNumber/>}
                            style2="text-black font-medium"/>
                        
                    </div>
                </div>
                <iframe className="w-full lg:w-3/6" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae42fd583a407471608f1db072834279a4f7c2aa2fa4cf11657b0ee2999b3e9f9&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default Contacts;