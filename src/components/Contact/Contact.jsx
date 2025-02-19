import React, { useState } from 'react';
import './Contact.css'; // You can create a separate CSS file for custom styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add functionality to handle form submission, like sending to a backend
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Enter your name'
          />
        </div>
        <div className='form-field'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter your email'
          />
        </div>
        <div className='form-field'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Enter your message'
          />
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
