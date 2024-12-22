import React, { useState } from 'react';
import style from '../../Component.module.css';
import { useNavigate } from "react-router-dom";
import OrderDetails from '../../../Pages/PreviousOrder/OrderDetails';

function WomenFashionCard({ cardContent }) {
    const navigate = useNavigate();
    const [isDressSelect, setIsDressSelect] = useState(false);
    const [selectedDress,setSelectedDress]=useState(null);
    const getSelectedDressDeatils = (val) => {
        if(val.OrderId){
            setIsDressSelect(true);
            setSelectedDress(val)
        }
        else {
            navigate(`/details/${val.Id}`);
        }
    }
    const closeOrderDetailsPage=()=>{
        setIsDressSelect(false);
    }
    return <div className={style.women_card_container}>
        {cardContent?.map((val, id) => {
            return <div className={style.women_caerd_parent} key={id}
                onClick={() => getSelectedDressDeatils(val)}
            >
                <div className={style.women_card_image}>
                    <img src={`/${val.Image}`} alt={val.Title} />
                </div>
                {val.OrderId &&
                    <div className={style.card_orderId_and_status}>
                        <div><p className={style.card_orderId_and_status_p}>Order ID: <b>{val.OrderId}</b></p></div>
                        <div><p className={style.card_orderId_and_status_p}>Status: <b className={style.card_order_status}>{val.Status}</b></p></div>
                    </div>
                }
                <h2 className={style.card_title}>{val.Title}</h2>
                <p className={style.card_description}>
                    {val.Description.split(" ").slice(0, 12).join(" ") + " ..."}
                </p>
                {!val.OrderId && <h3 className={style.card_price}>₹ {val.Price}</h3>}
            </div>
        })}
        {isDressSelect && <OrderDetails close={closeOrderDetailsPage} selectedDress={selectedDress} />}
    </div>
}

export default WomenFashionCard;