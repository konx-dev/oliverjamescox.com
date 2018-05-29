import React from 'react'
import Link from 'gatsby-link'

const ContactPageAlt = () => (
  <div className="container">
        <div className="wrapper">

          <div className="my-info">
            <h3>Contact Me</h3>
            <p>Pop me a message if you would like to work on a project together, or just want to chat.</p>
          </div>

          <div className="contact">
    
    <form 
        name="my-contacts" 
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
</div>


</div>
)

export default ContactPageAlt