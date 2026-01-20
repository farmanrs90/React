import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
  return (

    <>
      <ProductCard
        name="iPhone 14"
        price="1800"
        category="Electronics"
        description="Latest Apple smartphone"
      />

      <ProductCard
        name="Samsung TV"
        price="2500"
        category="Home Appliances"
        description="4K Smart TV"
      />

      <ProductCard
        name="Nike Shoes"
        price="300"
        category="Fashion"
        description="Comfortable sport shoes"
      />
    </>

  )
}
