import React, { useState, useEffect } from 'react';
import style from "../Component.module.css";
import { IoMdClose } from "react-icons/io";
import { handleInputChangeWithAlphabetAndNumber, handleInputChangeWithAlphabetOnly, handleMobileNumberChange } from '../../DataValidation/DataValidation';
import { useCart } from '../Context/Context';
import { useMask } from "@react-input/mask";

function AddDetails({ close }) {
    const { editedAddress, setEditedAddress } = useCart();
    const custom = false;
    const [customerName, setCustomerName] = useState(editedAddress.name || "");
    const [CustomerMobileNo, setCustomerMobileNo] = useState(editedAddress.mobileNo || "");
    const [CustomerAltMobileNo, setCustomerAltMobileNo] = useState("");
    const [CustomerAddress, setCustomerAddress] = useState(editedAddress.add || "");
    useEffect(() => {
        const el = document.querySelector("#customerName");
        el.focus();
    },[])
    const inputRef = useMask({
        mask: "+91 ___ -___-__-__",
        replacement: { _: /\d/ },
    });
    return (
        <div className={style.login_page_parent_container}>
            <div className={style.add_details_container}>
                <div className={style.login_page_header}>
                    {(custom && !editedAddress) && <h2 className={style.login_page_header_title}><span className={style.blue_span}> Custom</span> Dress</h2>}
                    {(!custom && !editedAddress) && <h2 className={style.login_page_header_title}>Add<span className={style.blue_span}> Details</span></h2>}
                    {editedAddress && <h2 className={style.login_page_header_title}>Edit<span className={style.blue_span}> Details</span></h2>}
                    <h2 className={style.login_page_close_btn} onClick={close}><IoMdClose /></h2>
                </div>
                <form>
                    <div className={style.input_container_parent}>
                        {!custom &&
                            <div className={style.input_container_with_label}>
                                <label>Name</label>
                                <input id='customerName' type='text' placeholder='Devendra Kumar' value={customerName} minLength={3} maxLength={50}
                                    onChange={(e) => handleInputChangeWithAlphabetOnly(e, setCustomerName)} />
                            </div>}
                        {!custom &&
                            <div className={style.input_container_with_label}>
                                <label>Phone Number</label>
                                {/* <input type='tel' placeholder='+918887766767' value={CustomerMobileNo}
                                    onChange={(e) => handleMobileNumberChange(e, setCustomerMobileNo)} /> */}
                                <input
                                    id="mobileInput" required
                                    className={style.login_page_left_container_input}
                                    ref={inputRef}
                                    placeholder="Enter Mobile No."
                                    value={CustomerMobileNo}
                                    // onChange={(e) => handleMobileNumberChange(e,setMobileNumber)}
                                    onChange={(e) => setCustomerMobileNo(e.target.value)}
                                />
                            </div>
                        }
                        <div className={style.input_container_with_label}>
                            <label>Alternate Phone Number</label>
                            {/* <input type='tel' placeholder='+918887766767' value={CustomerAltMobileNo}
                                onChange={(e) => handleMobileNumberChange(e, setCustomerAltMobileNo)} /> */}
                            <input
                                id="altmobileInput" required
                                className={style.login_page_left_container_input}
                                ref={inputRef}
                                placeholder="Enter Alt. Mobile No."
                                value={CustomerAltMobileNo}
                                // onChange={(e) => handleMobileNumberChange(e,setMobileNumber)}
                                onChange={(e) => setCustomerAltMobileNo(e.target.value)}
                            />
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
                                <button className={style.login_page_btn}>
                                    {(custom && !editedAddress) && "Proceed  to Add Details"}
                                    {(!custom && !editedAddress) && "Proceed  to payment"}
                                    {editedAddress && "Confirm"}
                                </button>
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