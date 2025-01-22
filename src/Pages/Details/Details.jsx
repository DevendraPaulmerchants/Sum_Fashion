import React, { useEffect, useState } from 'react';
import style from "./Details.module.css";
import style1 from "../../Components/Component.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
import { useParams } from "react-router-dom";
import AddDetails from '../../Components/AddDetails/AddDetails';
import { useCart } from '../../Components/Context/Context';

function Details() {
    const { dress, isLoading, setIsLoading } = useCart();
    const { id } = useParams();
    const [isBookNowBtnClicked, setIsBookNowBtnClicked] = useState(false);
    const [selectedDress, setSelectedDress] = useState(null)
    const handleBookNowBtn = () => {
        setIsBookNowBtnClicked(true)
    }
    const handleCloseBookNowBtn = () => {
        setIsBookNowBtnClicked(false)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        fetch(`https://www.sumfashion.in/api/app/dress/${id}`, {
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'cors',
        }).then((res) => res.json())
            .then((data) => {
                setSelectedDress(data.response);
                setIsLoading(false);
            })
            .catch((err) => {
                alert(err);
                setIsLoading(false);
            })
    }, [id]);

    return <>
        {isLoading ? <div className={style1.loader_container}><div className={style1.loader}></div></div> :
            <>
                <div className={style.dress_details_top_container}>
                    <div className={style.dress_images_container_parent}>
                        <div className={style.dress_image_container}>
                            <div className={style.dress_details_back_arrow}><IoIosArrowBack /></div>
                            {/* <img src='/DressDetailsImage1.svg' /> */}
                            <div className={style.dress_details_parent_img}><img src={selectedDress?.dressImageUrl} /></div>
                            <div className={style.dress_details_forward_arrow}><IoIosArrowForward /></div>
                        </div>
                    </div>
                    <div className={style.dress_details_container}>
                        <h2 className={style.dress_details_dress_name}>{selectedDress?.dressName}</h2>
                        <p className={style.dress_details_dress_category}>Women Fashion</p>
                        <div className={style.dress_details_dress_price_and_btn}>
                            <div className={style.dress_details_dress_price}>
                                <h2 className={style.dress_details_dress_name}>₹ {selectedDress?.price}
                                    <sub className={style.dress_details_dress_category}>+GST</sub></h2>
                            </div>
                            <div className={style.dress_details_dress_price_btn}>
                                <button onClick={handleBookNowBtn}>BUY NOW</button>
                            </div>
                        </div>
                        <h4 className={style.dress_details_description}>Description</h4>
                        <p className={style.dress_details_dress_category}>{selectedDress?.description}</p>
                        {/* <p className={style.dress_details_dress_category}></p> */}
                    </div>
                </div>
                <div className={style.dress_details_more_dress_parent}>
                    <div className={style.dress_details_more_dress}>
                        <h2>You May also <span className={style1.blue_span}>Like</span></h2>
                        <p className={style.dress_details_dress_category}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    </div>
                    <div className={style.dress_details_more_dress_card_parent}>
                        <WomenFashionCard cardContent={dress} />
                    </div>
                </div>
            </>
        }
        {isBookNowBtnClicked && <AddDetails close={handleCloseBookNowBtn} custom="false" />}
    </>
}

export default Details;