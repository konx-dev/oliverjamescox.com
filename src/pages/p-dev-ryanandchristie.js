import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="cs-body--background">
      
      
      <div className="cs--intro-block">
        <div className="intro-block--sec1">
          <div className="ib-sec1--title">
            The Wedding of Ryan &amp; Christie
          </div>
          <div className="ib-sec1--subtitle">
            A statically generated wedding site using cloud hosting. Created to gather RSVP responses, day information and an image gallery.
          </div>
        </div>
        <div className="intro-block--sec2">
          <div className="ib-sec2--image">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
      </div>


      <div className="cs--skills-block">
        Built with GatsbyJS, hosted with Netlify.
      </div>


      <div className="cs--problem-block">
        <div className="problem-block--sec1">
          The need to create a cost effective solution with little to no overhead with a degree of customisability to satisfy personal requirements.
        </div>
        <div className="problem-block--sec2">
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
            Image goes Here
            </div>
            <div className="pb-block--subheader">
              Running costs
            </div>
            <div className="pb-block--body">
              With the site going up prior to the wedding, an estimatated monthly rolling cost just covering the hosting would acrue in the run up to the event. Beyond that if the site provides a gallery the hosting would need to run indefinitly unless moved to another solution.
            </div>
          </div>
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
            Image goes Here
            </div>
            <div className="pb-block--subheader">
              Customisation
            </div>
            <div className="pb-block--body">
              A lot of the sites that take the hassle away from hosting and provide a platform to create a personal site are typically geared towards blogging and e-commerce. There are services specific to creating websites such as Riley &amp; Grey who offer bespoke site design but at a much higher monthly cost of $35.
            </div>
          </div>

        </div>
      </div>

      <div className="cs--findings-block">
        <div className="findings-block--sec1">
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              Image goes here
            </div>
            <div className="fb-sec1--block-copy">
              Personalising the site with a custom domain has an initial outlay and every year thereafter. Domain names of combined client names are reasonably priced due to the scarcity of demand.
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              Image goes here
            </div>
            <div className="fb-sec1--block-copy">
              WSIWYG builders that handle the hosting typically run a monthly fee, alternative options such as Wordpress can require separate hosting if not opting to host with their platform.
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              Image goes here
            </div>
            <div className="fb-sec1--block-copy">
              Exploring options such as Wix, Squarespace on the surface you would often have to pay a monthly fee for features you don’t necessarily need and can include ads unless you pay more.
            </div>
          </div>
        </div>
        <div className="findings-block--sec2">
          <div className="fb-sec2--conclusion">
            WSIWYG builders can get you up and running with ease but may not offer the level of customisation required by the client.
          </div>
          <div className="fb-sec2--image">
            Supporting image here, graph etc
          </div>
        </div>
      </div>

      <div className="cs--question-block">
        <div className="qb-body">
          Based on findings the proposal is for a statically generated site that can be hosted for free on one of the services such as Netlify, surge.sh or GitHub pages. Completely negating the issue of monthly hosting costs and continued site overhead.
        </div>
      </div>

      <div className="cs--explore-block">
        <div className="explore-block-sec1">
          <div className="eb-sec1-header">
            Exploring ideas about the big day and what’s important to the guests and the bridal party.
          </div>
          <div className="eb-sec1-subheader">
            The initial brief was to adopt the pre-existing styling from the save the date stationary and create a solution where guests could RSVP, read important information about the day and explore the possibility of image uploading.
          </div>
          <div className="eb-sec1-image">
            Supporting image goes here
          </div>
          <div className="eb-sec1-body">
            Started by asking myself what information do I need to know or what would be important to me if I were the bride or groom? I then looked into pre-existing solutions provided as a service and looked for examples of actual sites to draw insight into commonly requested and desirable features.
          </div>
        </div>
        <div className="explore-block-sec2">
          <div className="eb-sec2-image">
            Image goes here
          </div>
          <div className="eb-sec2-caption">
            Prototyped initially on paper before moving to illustrator to create mockups for presentation.
          </div>
        </div>
      </div>

      <div className="cs--core-block">
        <div className="core-block-sec1">
          <div className="cb-sec1-heading">
            Conversation with the client enabled discussion and feedback on the proposed features. Redifining and finalising the project deliverables.
          </div>
          <div className="cb-sec1-subheading">
          They were delighted with the mockups and signed off on the additional features. Added was a countdown timer to the wedding day, an “about us” page to tell the story of the proposal and a gallery integrated with instagram.
          </div>
        </div>
        <div className="core-block-sec2">
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              Countdown Timer
            </div>
          </div>
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              "About Us" page
            </div>
          </div>
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              RSVP Form
            </div>
          </div>
        </div>
      </div>

      <div className="cs--brand-block">
        <div className="brand-block--sec1">
          <div className="bb-sec1--slug">
            Key Feature
          </div>
          <div className="bb-sec1--title">
            Instagram Integration
          </div>
          <div className="bb-sec1--body">
            <p>One of the initial requirements was for the ability to upload images to the site and host them, The proposed solution instead uses the instagram api to pull images from either a specific hashtag or user account.</p>
          </div>
          <div className="bb-sec1--quoteblock">
          Wedding parties are capturing their own images, with 60% of brides using social media on their wedding day, 76% taking a wedding selfie – affectionately coined the ‘welfie’, and an average of 3,400 photos being taken at each wedding by guests alone. 57% now use a wedding hashtag – an increase of over 40% from the year before.
          </div>
          <div className="bb-sec1--quoteblock-author">
            - bridebook.co.uk
          </div>
          <div className="bb-sec1--body">
            <p>Having all the guests upload their photos to the site; although possible would have created a poor user experience. Using instagram and adding a hashtag has the images  pulled down in real time and the site can be used instead to check the collection of photos. Fallbacks have been put in place for any of those who don’t use instagram and should a photo be taken which doesn’t have the hashtag anyone can comment on that photo and add the hashtag and have it generate instantly on the site.</p>
          </div>
        </div>
        <div className="brand-block--sec2">
          <div className="bb-sec2--image">
          PNG mockup image goes here
          </div>
        </div>
      </div>

      <div className="cs--examples-block">
        <div className="examples-block--image">
          Image goes here
        </div>
        <div className="examples-block--image">
          Image goes here
        </div>
        <div className="examples-block--image">
          Image goes here
        </div>
        <div className="examples-block--image">
          Image goes here
        </div>
      </div>

      <div className="cs--feedback-block">
        Client feedback goes here
      </div>


    </div>
  </Layout>
  
)

export default IndexPage

export const query = graphql`
  query cs1Query {
    image1: file(relativePath: { regex: "/rc-iphone-mockup1.png/" }) {
      childImageSharp {
        fluid( quality: 85 ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`