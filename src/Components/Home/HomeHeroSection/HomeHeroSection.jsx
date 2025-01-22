import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from '../../../Components/Component.module.css';

const bannerList=[
    {
        name:"devendra"
    },
    {
        name:"devendra"
    },
    {
        name:"devendra"
    },
    {
        name:"devendra"
    },
]
function HomeHeroSection() {
    const [position, setPosition] = useState(1);
    const [banners, setBanners] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const next = () => {
        if (position < bannerList.length - 1) {
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
            setPosition(bannerList.length - 1)
        }
    }
    useEffect(() => {
        setIsLoading(true)
        fetch("https://www.sumfashion.in/api/app/v1/banners", {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors',
        }).then((res) => res.json())
            .then((data) => {
                setBanners(data.response);
                console.log(data.response);
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            })
    }, [])

    return <>
        {isLoading ? <div className={style.loader}></div> :
            <div className={style.hero_section_parent}>
                <div className={style.overlay}></div>
                <div><IoIosArrowBack className={style.hero_section_back_forward_arrow} onClick={back} /></div>

                <div className={style.hero_section_title_img}>
                    <div className={style.hero_section_left_container}>
                        <h2 className={style.hero_section_title1}>{banners?.[position]?.title}</h2>
                        <h2 className={style.hero_section_title2}>{banners?.[position]?.subtitle}</h2>
                        {/* <h2 className={style.hero_section_title1}>{banners[position].title3}</h2> */}
                        {/* <button className={style.hero_section_btn}>{banners[position].btnText}</button> */}
                        <button className={style.hero_section_btn}>Explore</button>
                    </div>
                    <div className={style.hero_section_img}>
                        <img src={banners?.[position]?.imageUrl} alt={banners?.[position]?.title} />
                    </div>
                </div>
                <div><IoIosArrowForward className={style.hero_section_back_forward_arrow} onClick={next} /></div>
            </div>
        }
    </>
}

export default HomeHeroSection