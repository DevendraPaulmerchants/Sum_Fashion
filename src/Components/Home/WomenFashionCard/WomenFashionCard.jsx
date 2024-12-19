import React, { useState } from 'react';
import style from '../../Component.module.css';
import { useNavigate } from "react-router-dom";

function WomenFashionCard({ cardContent }) {
    const navigate = useNavigate();
    const [selectedDress, setSelectedDress] = useState("");
    const getSelectedDressDeatils = (Id) => {
        navigate(`/details/${Id}`);
    }
    return <div className={style.women_card_container}>
        {cardContent?.map((val, id) => {
            return <div className={style.women_caerd_parent} key={id}
                onClick={() => getSelectedDressDeatils(val.Id)}
            >
                <div className={style.women_card_image}>
                    <img src={`/${val.Image}`} alt={val.Title} />
                </div>
                <h2 className={style.card_title}>{val.Title}</h2>
                <p className={style.card_description}>
                    {val.Description.split(" ").slice(0, 12).join(" ") + " ..."}
                </p>
                <h3 className={style.card_price}>₹ {val.Price}</h3>
            </div>
        })}
    </div>
}

export default WomenFashionCard;