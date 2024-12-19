import React, { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import style1 from "./WomenFashion.module.css";
import style from '../../Components/Component.module.css';
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
const cardWomenContent = [
    {
        Id:1,
        Title: "Devendra Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:2,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:3,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:4,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:5,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:6,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:7,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:8,
        Title: "Vikas Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
];
function WomenFashion() {
    const [dressName, setDressName] = useState("");
    const handleDressNameChange = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();
        setDressName(inputValue);
    };
    const filteredCard = cardWomenContent?.filter((dress) =>
        dress.Title.toLowerCase().includes(dressName)
    );
    const cardAfterFilter = filteredCard?.length > 0 ? filteredCard : cardWomenContent;
    return (
        <div className={style1.women_fashion_parent}>
            <div className={style1.women_fashion_title_and_search_container}>
                <div>
                    <h2 className={style.customer_feedback_header_title}>
                        <span className={style.blue_span}>Women </span>Fashion
                    </h2>
                    <p className={style.new_arrival_description}>
                        Explore our latest collection of women's fashion, designed with elegance and style for every occasion.
                    </p>
                </div>
                <div className={style1.women_search_container}>
                    <RiSearch2Line color="#4F4F4F" />
                    <input type="text" placeholder="Search for a dress..." onChange={handleDressNameChange} />
                </div>
            </div>
            <div className={style1.women_card_container_parent}>
                <WomenFashionCard cardContent={cardAfterFilter} />
            </div>
        </div>
    );
}

export default WomenFashion;
