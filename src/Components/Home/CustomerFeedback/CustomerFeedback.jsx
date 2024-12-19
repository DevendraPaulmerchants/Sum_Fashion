import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from '../../Component.module.css';

const feedback = [
    {
        personImage: "CustomerFeedbackImage1.svg",
        personText: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        personName: "Sunita",
        personProfashion: "Fashion"
    },
    {
        personImage: "CustomerFeedbackImage1.svg",
        personText: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        personName: "Meena",
        personProfashion: "Fashion"
    }, {
        personImage: "CustomerFeedbackImage1.svg",
        personText: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        personName: "Dipeeka",
        personProfashion: "Fashion"
    }
]

function CustomerFeedback() {
    const [state, setState] = useState(0);
    // const [animation, setAnimation] = useState(false);
    // const pauseAnimation = () => {
    //     setAnimation(true)
    // }
    const next = () => {
        if (state < feedback.length - 1) {
            setState(state + 1)
        }
        else {
            setState(0)
        }
    }
    const back = () => {
        // setAnimation(true)
        if (state > 0) {
            setState(state - 1)
        }
        else {
            setState(feedback.length - 1)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            // if (!animation) {
                next()
            // }
        }, 5010)
    }, [state])
    return (
        <div className={style.customer_feedback_parent}>
            <div className={style.customer_feedback_header}>
                <h2 className={style.customer_feedback_header_title}>This Is What Our <span className={style.blue_span}>Customers </span>Say</h2>
                <p className={style.new_arrival_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
            </div>
            <div className={style.feedback_container}
                // style={{ animationPlayState: animation ? "paused" : "running"}}
                >
                <div className={style.feedback_image_container}>
                    <img src={feedback[state].personImage} alt={feedback[state].personName} />
                </div>
                <div className={style.feedback_text_and_name}>
                    <p className={style.feedback_text}>"{feedback[state].personText}"</p>
                    <div>
                        <p className={style.border_line}></p>
                        <p className={style.feedbak_person_name}>{feedback[state].personName}</p>
                        <p className={style.feedback_text}>{feedback[state].personProfashion}</p>
                    </div>
                </div>
            </div>
            <div className={style.feedback_back_next_btn_container}>
                <div><IoIosArrowBack className={style.hero_section_back_forward_arrow} onClick={back} /></div>
                <div><IoIosArrowForward className={style.hero_section_back_forward_arrow} onClick={()=>{
                    // pauseAnimation();
                    next();
                }} /></div>
            </div>
        </div>
    )
}

export default CustomerFeedback;


