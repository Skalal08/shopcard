import React from 'react'
import './Shop.css' // Optional if already in index.css

const products = [
  { id: 1, name: 'Red Shoes', price: '$49.99', img: '/images/product1.jpg' },
  { id: 2, name: 'Jacket', price: '$89.99', img: '/images/product2.jpg' },
  { id: 3, name: 'Smart Watch', price: '$129.99', img: '/images/product3.jpg' },
  { id: 4, name: 'Headphones', price: '$59.99', img: '/images/product4.jpg' },
  { id: 5, name: 'Backpack', price: '$39.99', img: '/images/product5.jpg' },
  { id: 6, name: 'Sunglasses', price: '$19.99', img: '/images/product6.jpg' },
  { id: 7, name: 'Sneakers', price: '$69.99', img: '/images/product7.jpg' },
  { id: 8, name: 'Gaming Mouse', price: '$29.99', img: '/images/product8.jpg' }
]

export default function Shop() {
  return (
    <div className="shop-container">
      <h1 className="shop-title">🛍️ Our Best Sellers</h1>
      <div className="shop-grid">
        {products.map(p => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <div className="card-content">
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <a className="button" href="#">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
