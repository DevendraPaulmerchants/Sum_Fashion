import React from 'react';
import style from "./Details.module.css";
import style1 from "../../Components/Component.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
import { useParams } from "react-router-dom";
const cardWomenContent = [
    {
        Id:1,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:2,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:3,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:4,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    }
]

function Details() {
    const { Id } = useParams();
    console.log(Id)
    return <>
        <div className={style.dress_details_top_container}>
            <div className={style.dress_images_container_parent}>
                <div className={style.dress_image_container}>
                    <div className={style.dress_details_back_arrow}><IoIosArrowBack /></div>
                    <img src='/DressDetailsImage1.svg' />
                    <div className={style.dress_details_forward_arrow}><IoIosArrowForward /></div>
                </div>
            </div>
            <div className={style.dress_details_container}>
                <h2 className={style.dress_details_dress_name}>Shiny Dress</h2>
                <p className={style.dress_details_dress_category}>Women Fashion</p>
                <div className={style.dress_details_dress_price_and_btn}>
                    <div className={style.dress_details_dress_price}>
                        <h2 className={style.dress_details_dress_name}>₹ 1200
                            <sub className={style.dress_details_dress_category}>+GST</sub></h2>
                    </div>
                    <div className={style.dress_details_dress_price_btn}>
                        <button>BUY NOW</button>
                    </div>
                </div>
                <h4 className={style.dress_details_description}>Description</h4>
                <p className={style.dress_details_dress_category}>Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability. Its thoughtful design features often include a single-breasted closure with tasteful buttons, creating a focal point that complements the blazer's overall sophistication.</p>
                <p className={style.dress_details_dress_category}>Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance</p>
            </div>
        </div>
        <div className={style.dress_details_more_dress_parent}>
            <div className={style.dress_details_more_dress}>
                <h2>You May also <span className={style1.blue_span}>Like</span></h2>
                <p className={style.dress_details_dress_category}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </div>
            <div className={style.dress_details_more_dress_card_parent}>
                <WomenFashionCard cardContent={cardWomenContent} />
            </div>
        </div>
    </>
}

export default Details;