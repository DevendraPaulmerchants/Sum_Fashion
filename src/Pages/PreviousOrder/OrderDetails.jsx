import React from 'react';
import style from "../../Components/Component.module.css";
import { IoMdClose } from "react-icons/io";

function OrderDetails({ close, selectedDress }) {
    console.log(selectedDress);
    return <>
        <div className={style.login_page_parent_container}>
            <div className={style.add_details_container}>
                <div className={style.login_page_header}>
                    <h2 className={style.login_page_header_title}>Order <span className={style.blue_span}>Details</span></h2>
                    <h2 className={style.login_page_close_btn} onClick={close}><IoMdClose /></h2>
                </div>
                <div className={style.order_details_image_and_details}>
                    <div className={style.order_details_image_container}>
                        <img src={`/${selectedDress.Image}`} alt={selectedDress.Title} />
                    </div>
                    <div className={style.order_details_details}>
                        <div className={style.card_orderId_and_status} style={{padding:"0"}}>
                            <div><p className={style.card_orderId_and_status_p}>Order ID: <b>{selectedDress.OrderId}</b></p></div>
                            <div><p className={style.card_orderId_and_status_p}>Status: <b className={style.card_order_status}>{selectedDress.Status}</b></p></div>
                        </div>
                        <div className={style.dress_details_title_description}>
                            <h2 className={style.dress_details_dress_name}>{selectedDress.Title}</h2>
                            <p className={style.dress_details_dress_category}>{selectedDress.Description}</p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Name: <span>Suman</span></p>
                            <p>Phone Number : <span>+91 999999999</span></p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Address : <span>123 Sector 23 Chandigarh</span></p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Amount : <span>₹ {selectedDress.Price}</span></p>
                            <p>Measurements : <span>C-12</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default OrderDetails;