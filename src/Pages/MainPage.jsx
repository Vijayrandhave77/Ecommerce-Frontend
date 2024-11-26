import React from 'react'
import BrowseCategories from '../Components/BrowseCategories'
import BrowseCart from '../Components/BrowseCart'
import ManCategorieNavBar from '../Components/ManCategorieNavBar'
import ManCategoriesCart from '../Components/ManCategoriesCart'
import DiscountSection from '../Components/DiscountSection'
import EmailSection from '../Components/EmailSection'
import PrivactPolicy from '../Components/PrivactPolicy'
import Cookies from 'js-cookie'
import { useEffect } from 'react'


function MainPage() {
  useEffect(()=>{
    const token = Cookies.get('jwtToken')
 console.log("main",token)

  },[])
  return (
    <>
      <div className="browser-box">
        <BrowseCategories></BrowseCategories>
        <BrowseCart></BrowseCart>
      </div>
        {/* <ManCategorieNavBar></ManCategorieNavBar> */}
        <ManCategoriesCart></ManCategoriesCart>
        <DiscountSection></DiscountSection>
        <EmailSection></EmailSection>
        <PrivactPolicy></PrivactPolicy>
    </>
  )
}

export default MainPage
