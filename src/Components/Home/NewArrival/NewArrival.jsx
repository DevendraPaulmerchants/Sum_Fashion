import React, { useState } from 'react';
import style from '../../Component.module.css';
import WomenFashionCard from '../WomenFashionCard/WomenFashionCard';
const cardWomenContent = [
    {
        Id:1,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:2,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:3,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id:4,
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    }
]
const cardMensContent = [
    {
        Id:1,
        Title: "Shiny Blazer",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "MensBlazer1.svg"
    },
    {
        Id:2,
        Title: "Shiny Blazer",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "MensBlazer1.svg"
    },
    {
        Id:3,
        Title: "Shiny Blazer",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "MensBlazer1.svg"
    },
    {
        Id:4,
        Title: "Shiny Blazer",
        Description: "Made from premium fabrics that exude luxury , such as fine wool, soft cashmere, or smooth silk blends, the blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "MensBlazer1.svg"
    },
]

function NewArrival() {
    const [state, setState] = useState(1);
    return <>
        <div className={style.new_arrival_container}>
            <div className={style.new_arrival_title_dec}>
                <h1 className={style.new_arrival_title}><span className={style.blue_span}>New </span>Arrivals</h1>
                <p className={style.new_arrival_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.</p>
            </div>
            <div className={style.new_category_list_parent}>
                <div className={style.new_category_list}>
                    <button onClick={() => setState(1)}
                        className={state === 1 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
                    >Women’s Fashion</button>
                    <button onClick={() => setState(2)}
                        className={state === 2 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
                    >Blazer</button>
                    <button onClick={() => setState(3)}
                        className={state === 3 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
                    >Popular</button>
                    <button onClick={() => setState(4)}
                        className={state === 4 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
                    >Men Accessories</button>
                    <button onClick={() => setState(5)}
                        className={state === 5 ? `${style.new_category_list_btn_active}` : `${style.new_category_list_btn}`}
                    >Discount Deals</button>
                </div>
            </div>
        </div>
        <div className={style.women_card_container_parent}>
            {state === 1 && <WomenFashionCard cardContent={cardWomenContent} />}
            {state === 2 && <WomenFashionCard cardContent={cardMensContent} />}
        </div>
    </>

}

export default NewArrival;