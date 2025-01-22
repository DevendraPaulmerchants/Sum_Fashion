import React, { useEffect, useState } from 'react';
import style from "../../Components/Component.module.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const questionAndAnswer = [
    {
        Id: 1,
        Ques: "What is Lorem Ipsum1?",
        Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        Id: 2,
        Ques: "What is Lorem Ipsum2?",
        Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        Id: 3,
        Ques: "What is Lorem Ipsum3?",
        Ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];
function FAQ() {
    const [selectedId, setSelectedId] = useState();
    const [faqCategory, setFaqCategory] = useState(null);
    const [faqCategoryId, setFaqCategoryId] = useState(null);
    const [faqIssues, setFaqIssues] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingIssues, setIsLoadingIssues] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch("https://www.sumfashion.in/api/app/v1/faqs/categories", {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors',
        }).then((res) => res.json())
            .then((data) => {
                // console.log(data.response);
                setFaqCategory(data.response);
                setIsLoading(false);
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            })
    }, []);
    // Issues on the basis of Selected category ----------------
    useEffect(() => {
        setIsLoadingIssues(true);
        fetch(`https://www.sumfashion.in/api/app/v1/faqs/issues/${faqCategoryId}`, {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors',
        }).then((res) => res.json())
            .then((data) => {
                // console.log(data.response);
                setFaqIssues(data.response);
                setIsLoadingIssues(false);
            })
            .catch((err) => {
                alert(err);
                setIsLoadingIssues(false);
            })
    }, [faqCategoryId]);

    const handleSelectedId = (Id) => {
        setSelectedId(Id - 1);
        setFaqCategoryId(Id);
        if (selectedId === Id - 1) {
            setSelectedId();
        }
    };
    return (
        <div className={style.faq_container}>
            {isLoading ? <div className={style.loader_container}><div className={style.loader}></div></div> :
                <>
                    {faqCategory?.map((val, id) => {
                        return (
                            <div className={style.faq_questions_container} key={val.id}>
                                <h2 onClick={() => handleSelectedId(val.id)}>
                                    {val.title}
                                    {selectedId === id + 1 ? (
                                        <span><IoIosArrowDown /></span>
                                    ) : (
                                        <span><IoIosArrowForward /></span>
                                    )}
                                </h2>
                                {/* <br/> */}
                                <div className={selectedId === id + 1 ? style.show : style.hidden}>
                                    {isLoadingIssues ? <div className={style.loader_container}><div className={style.loader}></div></div> :
                                        <>
                                            {faqIssues?.map((Issues, id) => {
                                                return <div>
                                                    <h3 className={style.question_h3}><b>Q.</b>{id + 1} {Issues?.question}</h3>
                                                    <p><b>Ans:</b> {Issues?.answer}</p>
                                                </div>
                                            })}
                                        </>
                                    }
                                </div>
                            </div>
                        );
                    })}
                </>
            }
        </div>
    )
}

export default FAQ;



