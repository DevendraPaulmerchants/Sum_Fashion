import React, { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import style1 from "../WomenFashion/WomenFashion.module.css";
import style from '../../Components/Component.module.css';
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
import { useCart } from '../../Components/Context/Context';

function MensFashion() {
    const {dress} =useCart();
    const [dressName, setDressName] = useState("");
    const handleDressNameChange = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();
        setDressName(inputValue);
    };
    const filteredCard = dress?.filter((dress) =>
        dress.dressName?.toLowerCase().includes(dressName)
    );
    const cardAfterFilter = filteredCard?.length > 0 ? filteredCard : dress;
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

export default MensFashion;