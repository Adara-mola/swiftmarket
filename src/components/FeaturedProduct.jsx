import React from 'react'
import SectionTitle from './sectionTitle'
import ProductGrid from './ProductGrid'

const FeaturedProduct = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products'/>
    <ProductGrid/>
    </div>
  )
}

export default FeaturedProduct