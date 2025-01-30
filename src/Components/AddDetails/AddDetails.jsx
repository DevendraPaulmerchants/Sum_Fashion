import React, { useState, useEffect } from 'react';
import style from "../Component.module.css";
import { IoMdClose } from "react-icons/io";
import { handleInputChangeWithAlphabetAndNumber, handleInputChangeWithAlphabetOnly, handleMobileNumberChange } from '../../DataValidation/DataValidation';
import { useCart } from '../Context/Context';
import { useMask } from "@react-input/mask";

function AddDetails({ close, custom }) {
    const { editedAddress, setEditedAddress } = useCart();
    // const custom = false;
    const [customerName, setCustomerName] = useState(editedAddress?.name || "");
    const [CustomerMobileNo, setCustomerMobileNo] = useState(editedAddress?.mobileNo || "");
    const [CustomerAltMobileNo, setCustomerAltMobileNo] = useState(editedAddress?.mobileNo || "");
    const [CustomerAddress, setCustomerAddress] = useState(editedAddress?.add || "");
    const [isConfirm, setIsConfirm] = useState(false);
    useEffect(() => {
        const el = document.querySelector("#customerName");
        el?.focus();
    }, [])
    const inputRef = useMask({
        mask: "+91__________",
        replacement: { _: /\d/ },
    });
    const inputMRef = useMask({
        mask: "+91__________",
        replacement: { _: /\d/ },
    });
    const handleAddressConfirm = () => {
        if (CustomerAltMobileNo) {
            setIsConfirm(true);
        }
    }
    return (
        <div className={style.login_page_parent_container}>
            <div className={style.add_details_container}>
                <div className={style.login_page_header}>
                    {(custom === "true" && !editedAddress) && <h2 className={style.login_page_header_title}><span className={style.blue_span}> Custom</span> Dress</h2>}
                    {(custom === "false" && !editedAddress) && <h2 className={style.login_page_header_title}>Add<span className={style.blue_span}> Details</span></h2>}
                    {editedAddress && <h2 className={style.login_page_header_title}>Edit<span className={style.blue_span}> Details</span></h2>}
                    <h2 className={style.login_page_close_btn} onClick={close}><IoMdClose /></h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={style.input_container_parent}>
                        {custom === "false" &&
                            <div className={style.input_container_with_label}>
                                <label>Name</label>
                                <input id='customerName' required type='text' placeholder='Devendra Kumar' value={customerName} minLength={3} maxLength={50}
                                    onChange={(e) => handleInputChangeWithAlphabetOnly(e, setCustomerName)} />
                            </div>}
                        {custom === "false" &&
                            <div className={style.input_container_with_label}>
                                <label>Phone Number</label>
                                <input
                                    id="altmobileInput" required
                                    className={style.login_page_left_container_input}
                                    ref={inputMRef}
                                    placeholder="Enter Mobile No."
                                    value={CustomerMobileNo}
                                    onChange={(e) => setCustomerMobileNo(e.target.value)}
                                />
                            </div>
                        }
                        <div className={style.input_container_with_label}>
                            <label>Alternate Phone Number</label>
                            <input
                                id="altmobileInput" required
                                className={style.login_page_left_container_input}
                                ref={inputRef}
                                placeholder="Enter Alt. Mobile No."
                                value={CustomerAltMobileNo}
                                onChange={(e) => setCustomerAltMobileNo(e.target.value)}
                            />
                        </div>
                        <div className={style.input_container_with_label}>
                            <label>Address</label>
                            <input type='text' required placeholder='701 Sec-22A' value={CustomerAddress} minLength={10} maxLength={100}
                                onChange={(e) => handleInputChangeWithAlphabetAndNumber(e, setCustomerAddress)} />
                        </div>
                    </div>
                    {custom === "false" && <p className={style.note_details_p_16}>** Note: Only ₹ 100 will be charged now as the  measurements will be taken at you doorstep.</p>}
                    <div className={style.upload_image_btn_and_img_container}>
                        <div className={style.upload_img_and_btn}>
                            {custom === "true" &&
                                <div className={style.input_container_with_label}>
                                    <label>Upload Images</label>
                                    <input type='file' required />
                                </div>}

                            <div className={style.add_details_button_container}>
                                {(custom === "true" && !editedAddress && !isConfirm) && <button className={style.login_page_btn} onClick={() => {
                                    console.log("proceed");
                                    setIsConfirm(true);
                                }}>Proceed  to Add Details</button>}
                                {(custom === "false" && editedAddress && !isConfirm) && <button className={style.login_page_btn} onClick={handleAddressConfirm}>Confirm</button>}
                                {/* {(isConfirm) && <button className={style.login_page_btn}>Proceed  to payment</button>} */}
                                {custom === "false" && <button className={style.login_page_btn}>Proceed  to payment</button>}
                            </div>
                        </div>
                        {custom === "true" &&
                            <div className={style.custom_dress_image}>
                                <img src='/CustomDressFormRightImage.svg' />
                            </div>}

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDetails