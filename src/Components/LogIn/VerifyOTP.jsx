import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import style from '../Component.module.css';
import "./VerifyOtp.css";
import OtpInput from "react-otp-input";
import { useCart } from '../Context/Context';

function VerifyOTP({ closeOtp, mobileNumber }) {
    const { setIsLogIn } = useCart();
    const [otp, setOTP] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const VOTP = document.querySelector("#react_otp");
        VOTP.focus();
    }, [])
    const handleOTP = (e) => {
        e.preventDefault();
        setIsLoading(true)
        fetch("https://www.sumfashion.in/api/app/v1/sms/new/verifyOtp", {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                phone_number: mobileNumber,
                otp_code: otp
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data.response);
                setIsLoading(false);
                setIsLogIn(true);
                closeOtp();
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            })
    }

    return (
        <div className={style.login_page_parent_container} style={{ zIndex: '999' }}>
            <div className={style.login_page_parent}>
                <div className={style.login_page_header}>
                    <h2 className={style.login_page_header_title}>Verify<span className={style.blue_span}> OTP</span></h2>
                    <h2 onClick={closeOtp} className={style.login_page_close_btn}><IoMdClose /></h2>
                </div>
                <div className={style.login_page_left_and_right_container}>
                    <div className={style.login_page_left_container}>
                        <p>Find your favorite style and get it custom tailored</p>
                        <form onSubmit={(e) => { handleOTP(e) }}>
                            <label>Enter OTP</label>
                            <p style={{ fontSize: '14px', marginBottom: '15px' }}>Please enter OTP sent on +91 {mobileNumber} for login.</p>
                            <div className={style.verify_otp_input_container}>
                                <OtpInput
                                    id="react_otp"
                                    value={otp}
                                    onChange={setOTP}
                                    numInputs={6}
                                    inputType="tel"
                                    skipDefaultStyles="true"
                                    renderSeparator={<span>&nbsp;&nbsp;</span>}
                                    renderInput={(props) => <input {...props} id="react_otp" required />}
                                />
                            </div>
                            {isLoading ? <div className={style.loader_container}><div className={style.loader}></div></div> : <button className={style.login_page_btn}>Submit</button>}
                        </form>
                    </div>
                    <div className={style.login_page_right_container}>
                        <img src='/Verifyotp.svg' alt='Log In' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP;