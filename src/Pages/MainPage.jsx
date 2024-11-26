import React from 'react'
import BrowseCategories from '../Components/BrowseCategories'
import BrowseCart from '../Components/BrowseCart'
import ManCategorieNavBar from '../Components/ManCategorieNavBar'
import ManCategoriesCart from '../Components/ManCategoriesCart'
import DiscountSection from '../Components/DiscountSection'
import EmailSection from '../Components/EmailSection'
import PrivactPolicy from '../Components/PrivactPolicy'


function MainPage() {
 
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
