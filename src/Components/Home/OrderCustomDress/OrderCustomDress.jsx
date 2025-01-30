import React, { useState } from 'react';
import style from '../../Component.module.css';
import './OrderCustomDress.css';
import AddDetails from '../../AddDetails/AddDetails';

function OrderCustomDress() {
    const [isOrderCustomDress, setIsOrderCustomDress] = useState(false);
    const handleCustomDress = () => {
        setIsOrderCustomDress(true)
    }
    const closeCustomDress = () => {
        setIsOrderCustomDress(false)
    }
    return <>
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
                <button className={style.new_category_list_btn_active} id='custom-dress-button'
                    onClick={handleCustomDress}
                >Order Custom Dress</button>
            </div>
            <div className={style.scissors_image}>
                <img src='scissors.svg' alt='Scissors' />
            </div>
        </div>
       {isOrderCustomDress && <AddDetails close={closeCustomDress} custom="true" />} 
    </>
}

export default OrderCustomDress;