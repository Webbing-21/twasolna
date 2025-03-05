import React from 'react'
import CategoriesSection from './_components/CategoriesSection'
import BannerSection from './_components/BannerSection'

export default function page() {
  return (
    <div className='px-4 space-y-20 py-20'>
        <BannerSection />
        <div className='space-y-5'>
            <CategoriesSection/>
            <CategoriesSection/>
            <CategoriesSection/>
        </div>
    </div>
  )
}
