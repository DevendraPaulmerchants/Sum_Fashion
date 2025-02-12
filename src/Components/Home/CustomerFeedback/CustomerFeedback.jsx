// import React, { useEffect, useState } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import style from '../../Component.module.css';
// function CustomerFeedback() {
//     const [state, setState] = useState(0);
//     const [customerFeedback, setCustomerFeedback] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     useEffect(() => {
//         setIsLoading(true)
//         fetch("https://www.sumfashion.in/api/app/v1/testimonials", {
//             headers: {
//                 // 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             },
//             method: 'GET',
//             mode: 'cors',
//         }).then((res) => res.json())
//             .then((data) => {
//                 setCustomerFeedback(data.response);
//                 console.log(data.response);
//                 setIsLoading(false)
//             })
//             .catch((err) => {
//                 alert(err);
//                 setIsLoading(false);
//             })
//     }, []);
//     const next = () => {
//         if (state < customerFeedback?.length-1) {
//             setState(state + 1)
//         }
//         else {
//             setState(0)
//         }
//     }
//     const back = () => {
//         if (state > 0) {
//             setState(state - 1)
//         }
//         else {
//             setState(0)
//         }
//     }
//     useEffect(() => {
//         setTimeout(() => {
//             next()
//         }, 5010)
//     }, [state]);

//     return (
//         <div className={style.customer_feedback_parent}>
//             <div className={style.customer_feedback_header}>
//                 <h2 className={style.customer_feedback_header_title}>This Is What Our <span className={style.blue_span}>Customers </span>Say</h2>
//                 <p className={style.new_arrival_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
//             </div>
//             {isLoading ? <div className={style.loader_container}><div className={style.loader}></div></div> :
//                 <div className={style.feedback_container}>
//                     <div className={style.feedback_image_container}>
//                         <img src={customerFeedback?.[state]?.profilePictureUrl} alt={customerFeedback?.[state]?.name} />
//                     </div>
//                     <div className={style.feedback_text_and_name}>
//                         <p className={style.feedback_text}>"{customerFeedback?.[state]?.message}"</p>
//                         <div>
//                             <p className={style.border_line}></p>
//                             <p className={style.feedbak_person_name}>{customerFeedback?.[state]?.name}</p>
//                             <p className={style.feedback_text}>{customerFeedback?.[state]?.profession}</p>
//                         </div>
//                     </div>
//                 </div>
//             }

//             <div className={style.feedback_back_next_btn_container}>
//                 <div><IoIosArrowBack className={style.hero_section_back_forward_arrow} onClick={back} /></div>
//                 <div><IoIosArrowForward className={style.hero_section_back_forward_arrow} onClick={() => {
//                     // pauseAnimation();
//                     next();
//                 }} /></div>
//             </div>
//         </div>
//     )
// }

// export default CustomerFeedback;

// -------------------------------------
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "../../Component.module.css";

const CustomerFeedback = () => {
    const [state, setState] = useState(0);
    const [customerFeedback, setCustomerFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://www.sumfashion.in/api/app/v1/testimonials", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
            mode: "cors",
        })
            .then((res) => res.json())
            .then((data) => {
                setCustomerFeedback(data.response);
                console.log(data.response);
                setIsLoading(false);
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            });
    }, []);

    const next = () => {
        setState((prev) => (prev < customerFeedback?.length - 1 ? prev + 1 : 0));
    };

    const back = () => {
        setState((prev) => (prev > 0 ? prev - 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setState(state + 1);
            if(state >= customerFeedback?.length - 1){
                setState(0)
            }
        }, 5010);
        return () => clearInterval(interval);
    }, [state]);

    return (
        <div className={style.customer_feedback_parent}>
            <div className={style.customer_feedback_header}>
                <h2 className={style.customer_feedback_header_title}>
                    This Is What Our <span className={style.blue_span}>Customers </span>Say
                </h2>
                <p className={style.new_arrival_description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                </p>
            </div>
            {isLoading ? (
                <div className={style.loader_container}>
                    <div className={style.loader}></div>
                </div>
            ) : (
                <div className={style.feedback_container}>
                    <div className={style.feedback_image_container}>
                        <img
                            src={customerFeedback?.[state]?.profilePictureUrl}
                            alt={customerFeedback?.[state]?.name}
                        />
                    </div>
                    <div className={style.feedback_text_and_name}>
                        <p className={style.feedback_text}>"{customerFeedback?.[state]?.message}"</p>
                        <div>
                            <p className={style.border_line}></p>
                            <p className={style.feedbak_person_name}>{customerFeedback?.[state]?.name}</p>
                            <p className={style.feedback_text}>{customerFeedback?.[state]?.profession}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className={style.feedback_back_next_btn_container}>
                <div>
                    <IoIosArrowBack className={style.hero_section_back_forward_arrow} onClick={back} />
                </div>
                <div>
                    <IoIosArrowForward
                        className={style.hero_section_back_forward_arrow}
                        onClick={() => {
                            next();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;



