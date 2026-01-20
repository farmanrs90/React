import React from 'react'


export const ProductCard = ({ name, price, category, description }) => {
  return (

    <div className="card">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>{description}</p>
    </div>

  )
}
