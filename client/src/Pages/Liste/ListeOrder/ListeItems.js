import React from 'react'

const ListeItems = ({product}) => {

  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.quantity}</h2>
      
      

    </div>
  )
}

export default ListeItems