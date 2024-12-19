import React from 'react';
import style from '../../Component.module.css';
import './OrderCustomDress.css';

function OrderCustomDress() {
    return (
        <div className={style.custom_dress_parent}>
            <div className={style.custom_dress_left}>
                <img src='CustomDress1.svg' alt='Custom Dress' />
            </div>
            <div className={style.sewing_machine_and_text}>
                <h2 className={style.card_title}>Get<span className={style.blue_span}> 50% Off</span></h2>
                <div className={style.sewing_machine_container}>
                    <img src='SEWING_MACHINE.svg' alt='SEWING MACHINE ' />
                </div>
            </div>
            <div className={style.custom_dress_btn_container} id='custom_dress_button'>
                <button className={style.new_category_list_btn_active} id='custom-dress-button'>Order Custom Dress</button>
            </div>
            <div>
                <img src='scissors.svg' alt='Scissors' />
            </div>
        </div>
    )
}

export default OrderCustomDress;