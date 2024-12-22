import React,{useState} from 'react';
import style from "../../Components/Component.module.css";
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";
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
    const handleSelectedId = (Id) => {
        setSelectedId(Id);
        if (selectedId === Id) {
            setSelectedId();
        }
    };
    return (
        <div className={style.faq_container}>
            {questionAndAnswer?.map((ques, id) => {
                return (
                    <div className={style.faq_questions_container}>
                        <h2 onClick={() => handleSelectedId(ques.Id)}>
                            {ques.Ques}
                            {selectedId === id + 1 ? (
                                <span><IoIosArrowDown/></span>
                            ) : (
                                <span><IoIosArrowForward/></span>
                            )}
                        </h2>
                        <p className={selectedId === id + 1 ? style.show : style.hidden}>
                            {ques.Ans}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}

export default FAQ;



