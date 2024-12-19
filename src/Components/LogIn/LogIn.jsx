import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import style from '../Component.module.css';
import VerifyOTP from './VerifyOTP';
import { useCart } from '../Context/Context';
import { handleMobileNumberChange } from '../../DataValidation/DataValidation';

function LogIn({ close }) {
    // document.body.style.overflow='hidden';
    const {isLogIn, setIsLogIn}=useCart();
    // console.log(isLogIn);
    const [getOTPPageOpen, setGetOTPPageOpen] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    // const handleMobileNumberChange = (e) => {
    //     const mobile = e.target.value;
    //     if (mobile.length > 10) {
    //         alert("Mobile number should not exceed 10 digits.");
    //         return;
    //     }
    //     if (!/^\d*$/.test(mobile)) {
    //         alert("Please enter numbers only.");
    //         return;
    //     }
    //     setMobileNumber(mobile);
    // };
    
    const closeOTPPage = () => {
        setGetOTPPageOpen(false);
        close();
    }
    const handlleGetOtp = () => {
       const confirm= window.confirm("are yousure");
        if(confirm){

        }
        else {
            
        }
        if(mobileNumber.length < 10){
            alert("Please check Mobile number");
            return;
        }
        else {
            setGetOTPPageOpen(true);
        }
    }
    return <>
        <div className={style.login_page_parent_container}>
            <div className={style.login_page_parent}>
                <div className={style.login_page_header}>
                    <h2 className={style.login_page_header_title}>Log<span className={style.blue_span}> In</span></h2>
                    <h2 onClick={close} className={style.login_page_close_btn}><IoMdClose /></h2>
                </div>
                <div className={style.login_page_left_and_right_container}>
                    <div className={style.login_page_left_container}>
                        <p>Find your favorite style and get it custom tailored</p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handlleGetOtp();
                        }}>
                            <label>Enter Mobile Number</label>
                            <input type="number"
                                value={mobileNumber}
                                onChange={(e)=>handleMobileNumberChange(e,setMobileNumber)}
                                className={style.login_page_left_container_input}
                                placeholder="+91-1234567890"
                                required />
                            <div className={style.login_page_term_and_condition}>
                                <input type='checkbox' required />
                                <p>I agree to all Terms & Conditions</p>
                            </div>
                            <button className={style.login_page_btn}>Get OTP</button>
                        </form>
                    </div>
                    <div className={style.login_page_right_container}>
                        <img src='/Login.svg' alt='Log In' />
                    </div>
                </div>
            </div>
        </div>
        {getOTPPageOpen && <VerifyOTP closeOtp={closeOTPPage} mobileNumber={mobileNumber} />}
    </>
}

export default LogIn;