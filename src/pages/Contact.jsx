import React, { useState } from 'react'
import './Contact.css' // Optional: Create this CSS file or add styles to index.css

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent by ${formData.name}`)
    // Optionally send data to backend here
    setFormData({ name: '', email: '', message: '' }) // reset form
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-info">
        We’re here to help! Reach out to us with your questions, feedback, or partnership proposals.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@shop.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Location:</strong> Pune, Maharashtra, India</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
