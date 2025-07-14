import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About MBET Shop</h1>
      <p className="about-description">
        At <strong>MBET Shop</strong>, we believe in delivering <em>quality products</em> at affordable prices.
        Since our inception, we have committed ourselves to bringing customers the best of fashion, electronics,
        and lifestyle products all under one roof.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower customers by giving them easy access to top-quality products while ensuring trust,
          transparency, and timely delivery.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Handpicked Products</li>
          <li>🚚 Fast & Free Delivery</li>
          <li>💰 Secure Payments & Easy Returns</li>
          <li>📞 24/7 Customer Support</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Meet the Team</h2>
        <p>
          Our passionate team of designers, developers, logistics experts, and customer service representatives
          work together to give you the best online shopping experience.
        </p>
      </div>
    </div>
  )
}
