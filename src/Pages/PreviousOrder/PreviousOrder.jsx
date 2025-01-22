import React, { useEffect, useState } from 'react';
import style from "../../Components/Component.module.css";
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./PreviousOrder.css";
import OrderDetails from './OrderDetails';
import { useCart } from '../../Components/Context/Context';

function PreviousOrder() {
    const {isLogIn}=useCart();
    const [preOrder, setPreOrder] = useState(null);
    const navigate = useNavigate();
    const [isDressSelect, setIsDressSelect] = useState(false);
    const [selectedDress, setSelectedDress] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    useEffect(() => {
        // if(isLogIn){
            setIsLoading(true)
            fetch("https://www.sumfashion.in/api/app/orders", {
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'GET',
                mode: 'cors',
            }).then((res) => res.json())
                .then((data) => {
                    setPreOrder(data.response);
                    console.log(data.response);
                    setIsLoading(false)
                })
                .catch((err) => {
                    alert(err);
                    setIsLoading(false);
                })
        // }
        // else {
        //     navigate("/")
        // }
    }, []);

    const getSelectedDressDeatils = (val) => {
        // if (val.OrderId) {
        //     setIsDressSelect(true);
        //     setSelectedDress(val);
        // }
        // else {
        //     console.log(val);
        //     navigate(`/details/${val.id}`);
        // }
        setSelectedDress(val);
        setIsDressSelect(true);
    }
    const closeDressDetails=()=>{
        setIsDressSelect(false)
    }

    return <>
        <div className={style.previous_order_parent}>
            <h2 className={style.Previous_order_header_h2}><span className={style.blue_span}>Previous</span> Order</h2>
            <div>
                {/* <WomenFashionCard cardContent={cardWomenContent} /> */}
                {isLoading ? <div className={style.loader}></div>:
                <Slider {...settings}>
                    {preOrder?.map((val, id) => (
                        <div className='crousel_card'
                            onClick={() => getSelectedDressDeatils(val)}
                        >
                            <div className='crousel_image'>
                                <img src={val.dressImage} alt={val.dressName} />
                            </div>
                            <div className={style.card_orderId_and_status}>
                                <div><p className={style.card_orderId_and_status_p}>Order ID: <b>{val.OrderId}</b></p></div>
                                <div><p className={style.card_orderId_and_status_p}>Status: <b className={style.card_order_status}>{val.status}</b></p></div>
                            </div>
                            <div className='dress_details'>
                                <h2>{val.dressName}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                }
            </div>
        </div>
        {isDressSelect && <OrderDetails selectedDress={selectedDress} close={closeDressDetails} />}
    </>
}

export default PreviousOrder;