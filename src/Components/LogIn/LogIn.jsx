import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useMask } from "@react-input/mask";
import style from '../Component.module.css';
import VerifyOTP from './VerifyOTP';
import { useCart } from '../Context/Context';
import { handleMobileNumberChange } from '../../DataValidation/DataValidation';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../Firebase/auth';

function LogIn({ close }) {
    const { isLogIn, setIsLogIn } = useCart();
    const [getOTPPageOpen, setGetOTPPageOpen] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const el = document.querySelector("#mobileInput");
        el.focus();
    }, [])
    const inputRef = useMask({
        mask: "+91__________",
        replacement: { _: /\d/ },
    });

    const closeOTPPage = () => {
        setGetOTPPageOpen(false);
        close();
    }

    const sendOtp = () => {
        setIsLoading(true)
        fetch("https://www.sumfashion.in/api/app/v1/sms/new/generateOtp", {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                phone_number: mobileNumber,
                fcm_token: "web"
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data.response);
                setIsLoading(false);
                setGetOTPPageOpen(true);
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            })
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
                        <form onSubmit={(e) => { e.preventDefault(); sendOtp() }}>
                            <label>Enter Mobile Number</label>
                            <input
                                id="mobileInput" required
                                className={style.login_page_left_container_input}
                                ref={inputRef}
                                placeholder="Enter Mobile No."
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            {/* <div className={style.login_page_term_and_condition}>
                                <input type='checkbox' required />
                                <p>I agree to all Terms & Conditions</p>
                            </div> */}
                            {isLoading ? <div className={style.loader_container}><div className={style.loader}></div></div> :
                                <button className={style.login_page_btn} >Get OTP</button>
                            }
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