import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
    <h1>Contact Me</h1>
    <p>personal information page</p>
    
    <form 
        name="contact" 
        method="POST"  
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
    >
 
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


</div>
)

export default ContactPage