import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Model from "react-modal";
import style from '../../../Components/Component.module.css';
import LogIn from '../../LogIn/LogIn';
import { useCart } from '../../Context/Context';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  const { isLogIn, setIsLogIn } = useCart();
  const location = useLocation();
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [userMenuClick, setUserMenuClick] = useState(false);
  const [isClickBurgurIcon,setIsClickBurgurIcon]=useState(false);
  const clickBurgurIcon=()=>{
    setIsClickBurgurIcon(!isClickBurgurIcon);
  }
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
    overlay: {
      backgroundColor: 'transparent',
    },
    content: {
      position: "fixed",
      top: "250px",
      right: "-130px",
      left: "auto",
      bottom: "auto",
      padding: "0",
      transform: "translate(-50%, -50%)",
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
        <div className={style.navbar_btn}>
          {isLogIn ? <button id='user_icon' onClick={openUserIcon}><img src='/UserIcon.svg' alt='User Icon' height={30} /></button> : <button onClick={() => setOpenLoginPage(true)}>Log In</button>}
        </div>
      </div>
      {/* <div className={style.navbar_btn}>
        {isLogIn ? <button id='user_icon' onClick={openUserIcon}><img src='/UserIcon.svg' alt='User Icon' height={30} /></button> : <button onClick={() => setOpenLoginPage(true)}>Log In</button>}
      </div> */}
    </div>
    <div className='mobile-navbar-parent'>
      <div className='mobile-navbar-burgur-and-logo'>
        {!isClickBurgurIcon ? <RxHamburgerMenu fontSize={40} onClick={clickBurgurIcon} /> : <IoMdClose fontSize={40} onClick={clickBurgurIcon} />}
        <Link to='/'><img src='/Sum_fashion_logo.svg' alt='Sum Fashion' /></Link>
      </div>
      <div className={isClickBurgurIcon ? 'mobile-navbar-list' :'display-none'}>
        <Link to="/" className={location.pathname === '/' ? `${style.list_active}` : ""} >Home</Link>
        <Link to="/women-fashion" className={location.pathname === '/women-fashion' ? `${style.list_active}` : ""} >Women Fashion</Link>
        <Link to='/mens-fashion' className={location.pathname === '/mens-fashion' ? `${style.list_active}` : ""} >Men Fashion</Link>
        <Link to="/accessories" className={location.pathname === '/accessories' ? `${style.list_active}` : ""} >Accessories</Link>
        <div className={style.navbar_btn}>
          {isLogIn ? <button id='user_icon' onClick={openUserIcon}><img src='/UserIcon.svg' alt='User Icon' height={30} /></button> : <button onClick={() => setOpenLoginPage(true)}>Log In</button>}
        </div>
      </div>
    </div>
    {openLoginPage && <LogIn close={closeLoginPage} />}
    {userMenuClick &&
      <Model
        isOpen={userMenuClick}
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
        <Link to="/previous_order" onClick={closeUserIcon}>
          <div className='previous_order_icon_and_text'>
            <div className="previous_order_icon">
              <img src='/Previous_icon_order.svg' alt='Previous order' />
            </div>
            <div className="previous_order_text">
              <h4>Previous Order</h4>
            </div>
          </div>
        </Link>
        <Link to="address" onClick={closeUserIcon}>
          <div className='previous_order_icon_and_text'>
            <div className="previous_order_icon">
              <img src='/SavedAddress.svg' alt='Saved Address' />
            </div>
            <div className="previous_order_text">
              <h4>Saved Address</h4>
            </div>
          </div>
        </Link>
        <Link to="/" onClick={() => { setIsLogIn(false); closeUserIcon() }}>
          <div className='previous_order_icon_and_text'>
            <div className="previous_order_icon">
              <img src='/LogOut_Icon.svg' alt='Log Out' />
            </div>
            <div className="previous_order_text">
              <h4>Log Out </h4>
            </div>
          </div>
        </Link>
      </Model>
    }
  </>
}

export default Navbar;