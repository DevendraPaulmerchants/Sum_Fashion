import React from 'react';
import style from "./Footer.module.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.footer_parent}>
        <div className={style.footer_logo_and_links}>
            <div className={style.footer_logo_container}>
                <img src='/Sum_fashion_logo.svg' alt='Logo'/>
            </div>
            <div className={style.footer_links_container}>
                <Link to="/women-fashion">Women Fashion</Link>
                <Link>Blog</Link>
                <Link>FAQ,s</Link>
                <Link>Support Center</Link>
            </div>
        </div>
        <div className={style.footer_copyright_container}>
            <p>Copyright © 2024 SUM-Fashion . All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer