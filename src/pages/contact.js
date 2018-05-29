import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
  <div>
    <div className="container">
        <div className="wrapper">

          <div className="my-info">
            <h3>Contact Me</h3>
            <p>Pop me a message if you would like to work on a project together, or just want to chat.</p>
          </div>

          <div className="contact">
            
            <form 
              name="contact" 
              method="POST" 
              action="thank-you" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="bot-field" />
                <p>
                  <label>Name 
                    <input type="text" name="name" />
                  </label>   
                </p>
                <p>
                  <label>Email Address 
                    <input type="email" name="email" placeholder="example@address.com" />
                  </label>
                </p>
                <p className="full">
                  <label>Message 
                    <textarea name="message" rows="6">
                    </textarea>
                  </label>
                 </p>
                  <p className="full">
                    <button type="submit">Send</button>
                  </p>
            </form>
          </div>

      </div>
    </div>
    </div>
)

export default ContactPage
