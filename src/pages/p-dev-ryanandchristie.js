import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="cs-body--background">
      
      
      <div className="cs--intro-block">
        <div className="intro-block--sec1">
          <div className="ib-sec1--title">
            Project Title goes here
          </div>
          <div className="ib-sec1--subtitle">
            brief project overview goes here (see figma)
          </div>
        </div>
        <div className="intro-block--sec2">
          <div className="ib-sec2--image">
          PNG mockup image goes here
          </div>
        </div>
      </div>


      <div className="cs--skills-block">
        Skills go here - User Research, UX, Wireframing etc.
      </div>


      <div className="cs--problem-block">
        <div class="problem-block--sec1">
          Here goes the information about the problem that requires the project to be undertaken and what can be achieved
        </div>
        <div className="problem-block--sec2">
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
            Image goes Here
            </div>
            <div className="pb-block--subheader">
              subheader for image
            </div>
            <div className="pb-block--body">
              i.e initial observations and hurdles when approaching the project. hosting, functionality, requirements.
            </div>
          </div>
          
          <div className="pb-sec2--block">
            <div className="pb-block--img">
            Image goes Here
            </div>
            <div className="pb-block--subheader">
              subheader for image
            </div>
            <div className="pb-block--body">
              i.e initial observations and hurdles when approaching the project. hosting, functionality, requirements.
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
              Copy goes here
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              Image goes here
            </div>
            <div className="fb-sec1--block-copy">
              Copy goes here
            </div>
          </div>
          <div className="fb-sec1--block">
            <div className="fb-sec1--block-img">
              Image goes here
            </div>
            <div className="fb-sec1--block-copy">
              Copy goes here
            </div>
          </div>
        </div>
        <div className="findings-block--sec2">
          <div className="fb-sec2--conclusion">
            Conclusion goes here in large type
          </div>
          <div className="fb-sec2--image">
            Supporting image here, graph etc
          </div>
        </div>
      </div>

      <div className="cs--question-block">
        How can we solve our initial problem using the findings?
      </div>

      <div className="cs--explore-block">
        <div className="explore-block-sec1">
          <div className="eb-sec1-header">
            Header goes here
          </div>
          <div className="eb-sec1-subheader">
            subheader goes here - couple of sentence description
          </div>
          <div className="eb-sec1-image">
            Supporting image goes here
          </div>
          <div className="eb-sec1-subtitle">
            subtitle goes here
          </div>
          <div className="eb-sec1-subtitle-body">
            body copy of the above subtitle
          </div>
        </div>
        <div className="explore-block-sec2">
          wireframe images go here in the right column
        </div>
      </div>

      <div className="cs--core-block">
        <div className="core-block-sec1">
          what method was used to land on the core functions. i.e user feedback through interviews and testing helped define the core features” or meetings with the client and putting myself in the position as a guest. What would I want from the site? etc etc
        </div>
        <div className="core-block-sec2">
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              Copy goes here
            </div>
          </div>
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              Copy goes here
            </div>
          </div>
          <div className="cb-sec2--block">
            <div className="cb-sec2--block-img">
              Image goes here
            </div>
            <div className="cb-sec2--block-copy">
              Copy goes here
            </div>
          </div>
        </div>
      </div>

      <div className="cs--brand-block">
        <div className="brand-block--sec1">
          <div className="bb-sec1--title">
            Project Title goes here
          </div>
          <div className="bb-sec1--subtitle">
            brief project overview goes here (see figma)
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