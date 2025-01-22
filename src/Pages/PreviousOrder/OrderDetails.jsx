import React from 'react';
import style from "../../Components/Component.module.css";
import { IoMdClose } from "react-icons/io";

function OrderDetails({ close, selectedDress }) {
    console.log(selectedDress)

    return <>
        <div className={style.login_page_parent_container}>
            <div className={style.add_details_container}>
                <div className={style.login_page_header}>
                    <h2 className={style.login_page_header_title}>Order <span className={style.blue_span}>Details</span></h2>
                    <h2 className={style.login_page_close_btn} onClick={close}><IoMdClose /></h2>
                </div>
                <div className={style.order_details_image_and_details}>
                    <div className={style.order_details_image_container}>
                        <img src={`/${selectedDress.dressImage}`} alt={selectedDress.dressName} />
                    </div>
                    <div className={style.order_details_details}>
                        <div className={style.card_orderId_and_status} style={{padding:"0"}}>
                            <div><p className={style.card_orderId_and_status_p}>Order ID: <b>{selectedDress.OrderId}</b></p></div>
                            <div><p className={style.card_orderId_and_status_p}>Status: <b className={style.card_order_status}>{selectedDress.status}</b></p></div>
                        </div>
                        <div className={style.dress_details_title_description}>
                            <h2 className={style.dress_details_dress_name}>{selectedDress.dressName}</h2>
                            <p className={style.dress_details_dress_category}>{selectedDress.desc}</p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Name: <span>{selectedDress.userName}</span></p>
                            <p>Phone Number : <span>+91-{selectedDress.mobileNum}</span></p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Address : <span>{selectedDress.address}</span></p>
                        </div>
                        <div className={style.customer_name_and_mobile_number}>
                            <p>Amount : <span>₹ {selectedDress.amount}</span></p>
                            <p>Measurements : <span>{selectedDress.measures}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default OrderDetails;