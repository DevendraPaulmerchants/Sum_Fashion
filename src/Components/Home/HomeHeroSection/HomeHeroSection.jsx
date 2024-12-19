import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from '../../../Components/Component.module.css';

const herocontent = [
    {
        title1: "CUSTOM",
        title2: "TAILORING",
        title3: "AT DOOR STEP",
        bannerImage: "1st.svg",
        btnText: "Explore"
    },
    {
        title1: "CUSTOM",
        title2: "TAILORING",
        title3: "AT DOOR STEP",
        bannerImage: "2nd.svg",
        btnText: "Shop Now"
    },
    {
        title1: "CUSTOM",
        title2: "TAILORING",
        title3: "AT DOOR STEP",
        bannerImage: "3rd.svg",
        btnText: "Shop Now"
    },
    {
        title1: "CUSTOM",
        title2: "TAILORING",
        title3: "AT DOOR STEP",
        bannerImage: "4th.svg",
        btnText: "Shop Now"
    }
]

function HomeHeroSection() {
    const [position, setPosition] = useState(0);
    const next = () => {
        if (position < herocontent.length - 1) {
            setPosition(position + 1)
        }
        else {
            setPosition(0)
        }
    }
    const back = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
        else {
            setPosition(herocontent.length - 1)
        }
    }
    return <>
        <div className={style.hero_section_parent}>
            <div className={style.overlay}></div>
            <div><IoIosArrowBack className={style.hero_section_back_forward_arrow} onClick={back} /></div>

            <div className={style.hero_section_title_img}>
                <div className={style.hero_section_left_container}>
                    <h2 className={style.hero_section_title1}>{herocontent[position].title1}</h2>
                    <h2 className={style.hero_section_title2}>{herocontent[position].title2}</h2>
                    <h2 className={style.hero_section_title1}>{herocontent[position].title3}</h2>
                    <button className={style.hero_section_btn}>{herocontent[position].btnText}</button>
                </div>
                <div className={style.hero_section_img}>
                    <img src={herocontent[position].bannerImage} alt='Ladies Dress' />
                </div>
            </div>
            <div><IoIosArrowForward className={style.hero_section_back_forward_arrow} onClick={next} /></div>
        </div>
    </>
}

export default HomeHeroSection