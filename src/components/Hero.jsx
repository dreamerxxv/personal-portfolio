import React from 'react'

const Hero = () => {
  return (


    <section id="hero">
      <div className="container">
        <div className="untree_co-section pb-0" id="home-section">
          <div className="container">

            <div className="row justify-content-center text-center hidden-mobile">
              <div className="col-md-7">
                <h1 className="heading gsap-reveal-hero mb-3"><strong>Dina Fathul<span className="text-primary">.</span> Badry</strong></h1>
                <h2 className="subheading gsap-reveal-hero mb-4">
                  Passionate Web Developer to Delivering Fast, Secure, and Scalable <strong>Web Applications</strong> with experience for years. Read my Curriculum Vitae below.
                </h2>
                <p className="gsap-reveal-hero"><a href="https://drive.google.com/file/d/17-PSg3NfjAZPBSFZ4RxRy5Eo8SIeeYH6/view?usp=sharing" className="btn btn-outline-light">
                  Curriculum Vitae</a>
                </p>
              </div>
            </div>

            <div class="mobile-only margintop-sm marginbottom-xl">
            <h1 className="heading gsap-reveal-hero mb-3"><strong>Dina Fathul<span className="text-primary">.</span> Badry</strong></h1>
              <p> Passionate Web Developer to Delivering Fast, Secure, and Scalable <strong>Web Applications </strong> 
              with experience for years. Read my Curriculum Vitae below.</p>
            </div>
            <a href="https://drive.google.com/file/d/17-PSg3NfjAZPBSFZ4RxRy5Eo8SIeeYH6/view?usp=sharing" class="primary-btn mobile-only">Curriculum Vitae</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero