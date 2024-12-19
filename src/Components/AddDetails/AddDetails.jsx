import React, { useState } from 'react';
import style from "../Component.module.css";
import { IoMdClose } from "react-icons/io";
import { handleInputChangeWithAlphabetAndNumber, handleInputChangeWithAlphabetOnly, handleMobileNumberChange } from '../../DataValidation/DataValidation';

function AddDetails() {
    const custom = true;
    const [customerName, setCustomerName] = useState("");
    const [CustomerMobileNo, setCustomerMobileNo] = useState("");
    const [CustomerAltMobileNo, setCustomerAltMobileNo] = useState("");
    const [CustomerAddress, setCustomerAddress] = useState("");
    return (
        <div className={style.login_page_parent_container}>
            <div className={style.add_details_container}>
                <div className={style.login_page_header}>
                    {custom ? <h2 className={style.login_page_header_title}><span className={style.blue_span}> Custom</span> Dress</h2> :
                        <h2 className={style.login_page_header_title}>Add<span className={style.blue_span}> Details</span></h2>
                    }
                    <h2 className={style.login_page_close_btn}><IoMdClose /></h2>
                </div>
                <form>
                    <div className={style.input_container_parent}>
                        {!custom &&
                            <div className={style.input_container_with_label}>
                                <label>Name</label>
                                <input type='text' placeholder='Devendra Kumar' value={customerName} minLength={3} maxLength={50}
                                    onChange={(e) => handleInputChangeWithAlphabetOnly(e, setCustomerName)} />
                            </div>}
                        {!custom &&
                            <div className={style.input_container_with_label}>
                                <label>Phone Number</label>
                                <input type='tel' placeholder='+918887766767' value={CustomerMobileNo}
                                    onChange={(e) => handleMobileNumberChange(e, setCustomerMobileNo)} />
                            </div>
                        }
                        <div className={style.input_container_with_label}>
                            <label>Alternate Phone Number</label>
                            <input type='tel' placeholder='+918887766767' value={CustomerAltMobileNo}
                                onChange={(e) => handleMobileNumberChange(e, setCustomerAltMobileNo)} />
                        </div>
                        <div className={style.input_container_with_label}>
                            <label>Address</label>
                            <input type='text' placeholder='701 Sec-22A' value={CustomerAddress} minLength={10} maxLength={100}
                                onChange={(e) => handleInputChangeWithAlphabetAndNumber(e, setCustomerAddress)} />
                        </div>
                        {/* <div className={style.input_container_with_label}>
                            <label>Upload Images</label>
                            <input type='file' />
                        </div> */}
                    </div>
                    {!custom && <p className={style.note_details_p_16}>** Note: Only ₹ 100 will be charged now as the  measurements will be taken at you doorstep.</p>}
                    <div className={style.upload_image_btn_and_img_container}>
                        <div className={style.upload_img_and_btn}>
                            {custom &&
                                <div className={style.input_container_with_label}>
                                    <label>Upload Images</label>
                                    <input type='file' />
                                </div>}

                            <div className={style.add_details_button_container}>
                                <button className={style.login_page_btn}>{custom ? "Proceed  to Add Details" : "Proceed  to payment"}</button>
                            </div>
                        </div>
                        {custom &&
                            <div>
                                <img src='CustomDressFormRightImage.svg' />
                            </div>}

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDetails