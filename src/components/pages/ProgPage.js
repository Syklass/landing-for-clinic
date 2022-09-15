import React from "react";
import Layout from "../layouts/Layout";
import ImageCard from "../base/ImageCard";
import Breadcrumb from "../base/Breadcrumb";
import deals1 from "../../Assets/deals/prog/prog1.png"
import { useState } from "react";
import ButtonCustom from "../base/ButtonCustom";

function ProgPage() {
    const [isClicked, setIsClicked] = useState(false)
    const Content = (
        <div>
            <Breadcrumb links={[{ name: "Главная", link: "/", }, { name: "Программы", link: "/program", ends: true, },]} />
            <h3 className="text-black-30 my-7 lg:my-14 text-[32px] lg:text-[45px] font-semibold tracking-casing text-center lg:text-start">ПРОГРАММЫ</h3>
            <div className="flex flex-wrap items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <ImageCard img={deals1}
                        className="m-[10px] mb:!max-w-[320px]"
                        headText="Check up Ресурс организма"
                        descText="Тестовый текст" />
                    <div className={`${isClicked ? "flex":"hidden"} flex-wrap items-center justify-center`}>
                        <ImageCard img={deals1}
                            className="m-[10px] mb:!max-w-[320px]"
                            headText="Check up Ресурс организма"
                            descText="Тестовый текст" />
                        <ImageCard img={deals1}
                            className="m-[10px] mb:!max-w-[320px]"
                            headText="Check up Ресурс организма"
                            descText="Тестовый текст" />
                        <ImageCard img={deals1}
                            className="m-[10px] mb:!max-w-[320px]"
                            headText="Check up Ресурс организма"
                            descText="Тестовый текст" />
                        <ImageCard img={deals1}
                            className="m-[10px] mb:!max-w-[320px]"
                            headText="Check up Ресурс организма"
                            descText="Тестовый текст" />
                        <ImageCard img={deals1}
                            className="m-[10px] mb:!max-w-[320px]"
                            headText="Check up Ресурс организма"
                            descText="Тестовый текст" />
                    </div>
                </div>
            </div>
            <ButtonCustom
                    onClick={()=>{
                        setIsClicked(!isClicked)
                    }}
                    className={`${isClicked?"hidden":"flex"} w-[260px] h-[85px] !rounded-[10px] mx-auto my-7 lg:my-14 btnModal items-center justify-center`}
                    children="Загрузить еще"/>
        </div>

    );


    return <Layout content={Content} />;
}

export default ProgPage;