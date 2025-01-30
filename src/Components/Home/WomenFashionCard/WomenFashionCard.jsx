import React, { useState } from 'react';
import style from '../../Component.module.css';
import { useNavigate } from "react-router-dom";
import OrderDetails from '../../../Pages/PreviousOrder/OrderDetails';
import { useCart } from '../../Context/Context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function WomenFashionCard({ cardContent }) {
    const { isLoading } = useCart();
    const navigate = useNavigate();
    const [isDressSelect, setIsDressSelect] = useState(false);
    const [selectedDress, setSelectedDress] = useState(null);

    const getSelectedDressDeatils = (val) => {
        if (val.OrderId) {
            setIsDressSelect(true);
            setSelectedDress(val);
        }
        else {
            console.log(val);
            navigate(`/details/${val.id}`);
        }
    }
    const closeOrderDetailsPage = () => {
        setIsDressSelect(false);
    }

    return <div className={style.women_card_container}>
        {isLoading ? <div className={style.loader}></div> :
            cardContent?.length > 0 ? (
                <>
                    {cardContent?.map((val, id) => {
                        return <div className={style.women_caerd_parent} key={id}
                            onClick={() => getSelectedDressDeatils(val)}>
                            <div className={style.women_card_image}>
                                <img src={`${val.dressImageUrl}`} alt={val.dressName} />
                            </div>
                            <h2 className={style.card_title}>
                                {val.dressName?.split(" ").length > 2 ? val.dressName?.split(" ").slice(0, 2).join(" ") + "..." : val.dressName}
                            </h2>
                            <p className={style.card_description}>
                                {val.description?.split(" ").slice(0, 10).join(" ") + " ..."}
                            </p>
                            {!val.OrderId && <h3 className={style.card_price}><span className={style.price_lineThrough}>₹ {val.mrp}</span><span className={style.blue_span}>₹ {val.price}</span></h3>}
                        </div>
                    })}
                </>
            ) : <h2>not item</h2>
        }
        {isDressSelect && <OrderDetails close={closeOrderDetailsPage} selectedDress={selectedDress} />}
    </div>
}
export default WomenFashionCard;