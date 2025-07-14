import React from 'react'
import './Home.css' // optional if not using index.css

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to MBET Shop</h1>
      <p className="home-subtitle">
        Your one-stop destination for fashion, gadgets, and lifestyle products.
      </p>

      <div className="home-highlights">
        <div className="highlight-card">
          <h3>🛍️ Wide Product Range</h3>
          <p>Explore thousands of products across multiple categories like electronics, clothing, and more.</p>
        </div>
        <div className="highlight-card">
          <h3>🚚 Fast & Free Shipping</h3>
          <p>Get your orders delivered quickly and safely with our trusted delivery partners.</p>
        </div>
        <div className="highlight-card">
          <h3>🔒 Secure Payments</h3>
          <p>Shop with confidence using our secure payment gateways and easy return policy.</p>
        </div>
      </div>

      <div className="home-cta">
        <p>🛒 Ready to shop?</p>
        <a href="/shop" className="home-button">Browse Products</a>
      </div>
    </div>
  )
}
