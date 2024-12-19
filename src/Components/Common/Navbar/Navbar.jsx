import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Model from "react-modal";
import style from '../../../Components/Component.module.css';
import LogIn from '../../LogIn/LogIn';
import { useCart } from '../../Context/Context';
import "./Navbar.css";

function Navbar() {
  const { isLogIn } = useCart();
  const location = useLocation();
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [userMenuClick, setUserMenuClick] = useState(false);
  const openUserIcon = () => {
    setUserMenuClick(true);
  }
  const closeUserIcon = () => {
    setUserMenuClick(false);
  }

  const closeLoginPage = () => {
    setOpenLoginPage(false);
  }
  const customStyles = {
    content: {
      position: "fixed",
      top: "200px",
      right: "-100px",
      left: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      // boxShadow: "0 0 10px 10px rgb(38,38,38,0.5)",
      // border: "none",
      borderRadius: "20px",
      backgroundColor: "#fff"
    },
  };
  return <>
    <div className={style.navbar_parent}>
      <div className={style.navbar_logo}>
        <Link to='/'><img src='/Sum_fashion_logo.svg' alt='Sum Fashion' /></Link>
      </div>
      <div className={style.navbar_menu_list}>
        <Link to="/" className={location.pathname === '/' ? `${style.list_active}` : ""} >Home</Link>
        <Link to="/women-fashion" className={location.pathname === '/women-fashion' ? `${style.list_active}` : ""} >Women Fashion</Link>
        <Link to='/mens-fashion' className={location.pathname === '/mens-fashion' ? `${style.list_active}` : ""} >Men Fashion</Link>
        <Link to="/accessories" className={location.pathname === '/accessories' ? `${style.list_active}` : ""} >Accessories</Link>
      </div>
      <div className={style.navbar_btn}>
        {isLogIn ? <button id='user_icon' onClick={openUserIcon}><img src='/UserIcon.svg' alt='User Icon' height={30} /></button> : <button onClick={() => setOpenLoginPage(true)}>Log In</button>}
      </div>
    </div>
    {openLoginPage && <LogIn close={closeLoginPage} />}
    {userMenuClick &&
      <Model
        isOpen={openUserIcon}
        onRequestClose={closeUserIcon}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='userIcon_name_mobile_number'>
          <div className="userIcon">
            <img src='/UserProfileImage.svg' alt='UserName' />
          </div>
          <div className="user_name_mobile_no">
            <h2>MS. Suman</h2>
            <h3>+919999999999</h3>
          </div>
        </div>
        <div className='previous_order_icon_and_text'>
          <div className="previous_order_icon">
            <img src='Previous_icon_order.svg' alt='Previous order'/>
          </div>
          <div className="previous_order_text">
            <h4>Previous Order</h4>
          </div>
        </div>
        <div className='previous_order_icon_and_text'>
          <div className="previous_order_icon">
            <img src='SavedAddress.svg' alt='Previous order'/>
          </div>
          <div className="previous_order_text">
            <h4>Saved Address</h4>
          </div>
        </div>
      </Model>
    }
  </>
}

export default Navbar;