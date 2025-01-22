import React from 'react';
import './Instagram.css';
import style from "../../Component.module.css";

function Instagram() {
  return (
    <div className='instagram_page_container'>
        <h2 className={style.customer_feedback_header_title}><span className={style.blue_span}>Follow Us</span> On Instagram</h2>
        <p className={style.new_arrival_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        <div className='instagram_image_container'>
          <div className='instagram_image_15_percent'>
            <img src='/Instagram1.svg' alt='Instagram Image'/>
          </div>
          <div className="instagram_image_12_percent">
             <img src='/Instagram2.svg' alt='Instagram Image'/>
          </div>
          <div className='instagram_image_15_percent'>
            <img src='/Instagram3.svg' alt='Instagram Image'/>
          </div>
          <div className="instagram_image_12_percent">
             <img src='/Instagram4.svg' alt='Instagram Image'/>
          </div>
          <div className='instagram_image_15_percent'>
            <img src='/Instagram5.svg' alt='Instagram Image'/>
          </div>
          <div className="instagram_image_12_percent">
             <img src='/Instagram6.svg' alt='Instagram Image'/>
          </div>
          <div className="instagram_image_15_percent">
             <img src='/Instagram7.svg' alt='Instagram Image'/>
          </div>
        </div>
    </div>
  )
}

export default Instagram