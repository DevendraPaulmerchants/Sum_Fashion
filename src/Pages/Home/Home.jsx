import React from 'react'
import HomeHeroSection from '../../Components/Home/HomeHeroSection/HomeHeroSection'
import NewArrival from '../../Components/Home/NewArrival/NewArrival'
import OrderCustomDress from '../../Components/Home/OrderCustomDress/OrderCustomDress';
import CustomerFeedback from '../../Components/Home/CustomerFeedback/CustomerFeedback';
import Footer from '../../Components/Common/Footer/Footer';
import Instagram from '../../Components/Home/Instagram/Instagram';

function Home() {
  return <>
     <HomeHeroSection/>
     <NewArrival/>
     <OrderCustomDress/>
     <CustomerFeedback/>
     <Instagram/>
  </>
}

export default Home