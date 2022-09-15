import React from "react";
import mis1 from "../../Assets/mission/mission1.png"
import mis2 from "../../Assets/mission/mission2.png"
import mis3 from "../../Assets/mission/mission3.png"

function Missions() {
    return (  
        <div id="aboutUs" className="flex mdlx:flex-col-reverse mdlx:justify-center items-stretch ">
            <div className="max-h-[626px] flex mdlx:!w-full sup:w-8/12 w-6/12 mmdsr:justify-start justify-center">
                <img className="mr-5 crd:w-1/2 h-full object-cover" src={mis1}></img>
                <div className="crd:w-1/2 flex flex-col justify-between">
                    <img className="object-cover w-full" src={mis2}></img>
                    <img className="object-cover w-full" src={mis3}></img>
                </div>
            </div>
            <div className="flex sm:min-h-full justify-between flex-col items-center sm:items-start mdlx:!w-full mdxxl:w-4/12 w-5/12 mbl:mb-12">
                <div className="mdxxl:w-auto w-3/4 mb-[20px]">
                    <h3 className="tracking-casing font-semibold text-2xl sm:text-[45px] mb-[14px] mdxxl:text-center lg:-ml-[2px]">МИССИЯ КЛИНИКИ</h3>
                    <p className="tracking-casing font-semibold text-base mdxxl:text-center">Как не сееялся бы мир, одна вещь остаётся незыблемой- это человеческий ресурс.  Всё хотят иметь море энергии и ясный ум. Ритм жизни современного человека, постоянные стрессы и не стабильная мировая обстановка истощают ресурсы здоровья.
                        При этом, истощение ресурса приводит к уязвимости к болезням.</p>
                </div>
                <div className="mdxxl:w-auto w-3/4 mb-[50px]">
                    <p className="mdxxl:text-center tracking-casing font-normal text-lg text-bronse-50 mb-[15px]">Мы занимаемся превентивными мерами, которыми возможно выявить и предотвратить развитие болезней, заложенных конституциональными особенностями организма и генетикой.<br/>
                        Превентивная медицина является тем самым ключом к здоровью.  Многие заболевания можно было бы предотвратить, если вовремя диагностировать предвестники.
                        <br/>Проблему нужно решать до её проявления.<br/>
Одна из наших целей: ранняя диагностика за счёт продуманный чекап листов, создающихся индивидуально, под каждого пациента.<br/>
Мы поможем предупредить развитие заболеваний направив ресурс организма в нужное русло, поможем  соблюдать нужный режим питания и образа жизни.<br/>
У нас пользуются большой популярностью программы  по снижению уровня стресса, которые помогают жить размеренно и счастливой жизнью в условиях современного ритма жизни.<br/>
Сейчас людям нужны проводники к здоровому образу жизни и хорошему собственному ресурсу личности.<br/>
Мы с командой, работая десятки лет, собирая информацию, методики лечения для  восстановления жизненного ресурса человека в России,  Франции, США, Индии и других регионах с современными иновационными методиками и древними знаниями, передающимися из поколения в поколение.<br/>
Сегодня мы несём наш опыт в мир, тот инструментарий, который позволяет восполнить свой жизненный ресурс-  жить здоровой жизнью, иметь море энергии и ясный ум.
У нас вы сможете позаботиться о собственном здоровье, используя нашу целостную систему.
                        </p>
                </div>
                <div className="w-full mt-4 text-center mdlxm:text-start">
                    <p className="tracking-casing text-bronse-50 text-base font-normal mb-[14px] ">Генеральный директор:</p>
                    <p className="tracking-casing text-bronse-50 text-xl font-semibold mb-5">Миронова Анна</p>
                </div>
            </div>
        </div>
    );
}

export default Missions;