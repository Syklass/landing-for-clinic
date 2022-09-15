import React from "react";
import Layout from "../layouts/Layout";
import Breadcrumb from "../base/Breadcrumb";
import { useState } from "react";
import dv1 from "../../Assets/devices/dev1.png"
import dv2 from "../../Assets/devices/dev2.png"
import dv3 from "../../Assets/devices/dev3.png"
import dv4 from "../../Assets/devices/dev4.png"
import Devices from "../base/Devices"

function DevicesPage() {
    const [isClicked, setIsClicked] = useState(false)
    const Content = (
        <div className="pt-3 lg:pt-7">
            <Breadcrumb links={[{ name: "Главная", link: "/", }, { name: "Оснащение клиники", link: "/devices", ends: true, },]} />
            <h3 className="text-black-30 my-7 lg:my-14 text-[32px] lg:text-[45px] font-semibold tracking-casing text-center lg:text-start">Оснащение клиники</h3>
            <div className="flex flex-col">
                <Devices
                head="Аппарат Icoone"
                desc="Coone ® Laser- это единственный аппарат в мире, который осуществляет мульти-микро-альвеолярную стимуляцию (MMAS) и обеспечивает видимые результаты уже после самого первого сеанса. Инновационная технология Roboderm ® позволяет устранять эстетические дефекты кожи, глубоко и эффективно стимулируя соединительную ткань."
                img={dv1}/>
                <span className="w-full h-[1px] block bg-white-e3"></span>
                <Devices
                head="Аппарат Btl emsella"
                desc="BTL EMSELLA — это отличный вариант для женщин любого возраста, ищущих решения проблемы недержания мочи и желающих улучшить качество интимной жизни"
                img={dv2}/>
                <span className="w-full h-[1px] block bg-white-e3"></span>
                <Devices
                head="Аппарат Btl emsculpt"
                desc="EMSCULPT - единственная процедура, которая помогает женщинам и мужчинам укреплять мышцы и сжигать жировые отложения. Кроме того, EMSCULPT предлагает первую в мире неинвазивную процедуру лифтинга ягодиц."
                img={dv3}/>
                <span className="w-full h-[1px] block bg-white-e3"></span>
                <Devices
                head="Аппарат Btl xwave "
                desc="BTL X-WAVE использует энергию акустических волн, предлагая наилучшие результаты в улучшении текстуры кожи. BTL X-WAVE поможет достичь эстетических улучшений, не меняя ваш привычный образ жизни. Легкие физические упражнения, например ходьба, будут способствовать достижению лучшего результата."
                img={dv4}/>
                <span className="w-full h-[1px] block bg-white-e3"></span>
            </div>
        </div>

    );


    return <Layout content={Content} />;
}

export default DevicesPage;