import React from 'react';
import style from "../../Components/Component.module.css";
import WomenFashionCard from '../../Components/Home/WomenFashionCard/WomenFashionCard';
const cardWomenContent = [
    {
        Id: 1,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Devendra Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1200,
        Image: "WomenPic1.svg"
    },
    {
        Id: 2,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1400,
        Image: "WomenPic1.svg"
    },
    {
        Id: 3,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1300,
        Image: "WomenPic1.svg"
    },
    {
        Id: 4,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1500,
        Image: "WomenPic1.svg"
    },
    {
        Id: 5,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1800,
        Image: "WomenPic1.svg"
    },
    {
        Id: 6,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 1600,
        Image: "WomenPic1.svg"
    },
    {
        Id: 7,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Shiny Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 2000,
        Image: "WomenPic1.svg"
    },
    {
        Id: 8,
        OrderId: "1234",
        Status: "Stitching",
        Title: "Vikas Dress",
        Description: "Made from premium fabrics that exude luxury, such as fine wool, soft cashmere, or smooth silk blends. The blazer not only radiates elegance but also ensures comfort and durability.",
        Price: 800,
        Image: "WomenPic1.svg"
    },
];

function PreviousOrder() {
    return (
        <div className={style.previous_order_parent}>
            <h2 className={style.Previous_order_header_h2}><span className={style.blue_span}>Previous</span> Order</h2>
            <div>
                <WomenFashionCard cardContent={cardWomenContent} />
            </div>
        </div>
    )
}

export default PreviousOrder;