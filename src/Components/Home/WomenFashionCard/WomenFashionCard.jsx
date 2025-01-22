import React, { useState } from 'react';
import style from '../../Component.module.css';
import { useNavigate } from "react-router-dom";
import OrderDetails from '../../../Pages/PreviousOrder/OrderDetails';
import { useCart } from '../../Context/Context';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const sliderElement = [
    {
        id: 1,
        name: "Devendra Kumar",
        desc: "This is first description"
    },
    {
        id: 2,
        name: "Sanjay Kumar Yadav",
        desc: "This is second description"
    },
    {
        id: 3,
        name: "Ranjay kumar Yadav",
        desc: "This is third description"
    },
    {
        id: 4,
        name: "Arjun Kumar Yadav",
        desc: "This is fourth description"
    }
]
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

    var settings = {
        dots: false,
        infinite: cardContent?.length > 3,
        speed: 500,
        slidesToShow:Math.min(3, cardContent?.length),
        slidesToScroll: 1,
    };

    return <div className={style.women_card_container}>
        {isLoading ? <div className={style.loader}></div> :
        cardContent?.length > 0 ? (
            <>
                {/* <Slider {...settings}> */}
                    {cardContent?.map((val, id) => {
                        return <div className={style.women_caerd_parent} key={id}
                            onClick={() => getSelectedDressDeatils(val)}>
                            <div className={style.women_card_image}>
                                <img src={`${val.dressImageUrl}`} alt={val.dressName} />
                            </div>
                            {/* {val.OrderId &&
                                <div className={style.card_orderId_and_status}>
                                    <div><p className={style.card_orderId_and_status_p}>Order ID: <b>{val.OrderId}</b></p></div>
                                    <div><p className={style.card_orderId_and_status_p}>Status: <b className={style.card_order_status}>{val.Status}</b></p></div>
                                </div>
                            } */}
                            <h2 className={style.card_title}>{val.dressName}</h2>
                            <p className={style.card_description}>
                                {val.description?.split(" ").slice(0, 12).join(" ") + " ..."}
                            </p>
                            {!val.OrderId && <h3 className={style.card_price}><span className={style.price_lineThrough}>₹ {val.mrp}</span><span className={style.blue_span}>₹ {val.price}</span></h3>}
                        </div>
                    })}
                {/* </Slider> */}
            </>
        ): <h2>not item</h2>
        }
        {isDressSelect && <OrderDetails close={closeOrderDetailsPage} selectedDress={selectedDress} />}
    </div>
}
export default WomenFashionCard;