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
    // ----------------- First Approach ------------------
    // const sendO(tp = async () => {
    //     try {
    //         if (!window.recaptchaVerifier) {
    //             window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
    //                 size: 'normal', 
    //                 callback: (response) => {
    //                     console.log("Recaptcha solved:", response);
    //                 },
    //                 'expired-callback': () => {
    //                     console.warn("Recaptcha expired. Please try again.");
    //                 },
    //             });
    //         }
    //         console.log(mobileNumber)
    //         const appVerifier = window.recaptchaVerifier;
    //         console.log("captcha verified:",appVerifier);
    //         const confirmation = await signInWithPhoneNumber(auth, mobileNumber, appVerifier);
    //         console.log("OTP sent:", confirmation);
    //         window.confirmationResult = confirmation;
    //     } catch (err) {
    //         console.error("Error sending OTP:", err);
    //     }
    // };
// ------------------- Second Approach ----------------------------
//    const [verificationId,setVerificationId]=useState("");
//    const recaptchaRef=useRef(null);
//     const sendOtp=()=>{
//         if(recaptchaRef.current){
//             recaptchaRef.current.InnerHtml='<div id="recaptcha"></div>'
//         }
//        const verifier=new RecaptchaVerifier("recaptcha",{
//         size:"invisible",
//        })
//         signInWithPhoneNumber(mobileNumber,verifier)
//        .then(confirmationResult=>{
//         setVerificationId(confirmationResult.verificationId)
//        })
//        .catch(error=>{
//         console.error("Error Sending OTP:- ",error)
//        })
//    }

// ------------------- Third Approach --------------------------
 const sendOtp=()=>{
    console.log(mobileNumber);
    setIsLogIn(true);
    setGetOTPPageOpen(true);
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
                        <form onSubmit={(e) => {e.preventDefault();sendOtp()}}>
                            <label>Enter Mobile Number</label>
                            <input
                                id="mobileInput" required
                                className={style.login_page_left_container_input}
                                ref={inputRef}
                                placeholder="Enter Mobile No."
                                value={mobileNumber}
                                // onChange={(e)=> handleMobileChange(e)}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            <div className={style.login_page_term_and_condition}>
                                <input type='checkbox' required />
                                <p>I agree to all Terms & Conditions</p>
                            </div>
                            {/* <div id='recaptcha' style={{ marginTop: '1rem' }}></div> */}
                            {/* <div ref={recaptchaRef}></div> */}
                            {/* {!captchVerified && <button className={style.login_page_btn} onClick={verifyMobileNumber} >Validate</button>} */}
                            {/* {captchVerified && <button className={style.login_page_btn} onClick={sendOtp} >Get OTP</button>} */}
                            <button className={style.login_page_btn} >Get OTP</button>
                            {/* <input type='number' value={otp} onChange={(e)=>setOtp(e.target.value)}/> */}
                            {/* <button onClick={verifyOtp}>verify Otp</button> */}
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