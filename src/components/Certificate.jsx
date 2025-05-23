import React from 'react'
import { ITSupport, JuniorDev1, JuniorDev2, ReactScratch, SoftSkill } from "../assets/images";

const Certificate = () => {
  return (

    <section id="certificate">
      <div className="container">
        <div className="heading-content">
          <h2>Get involved in developer communities to learn from others and share experiences.</h2>
        </div>
        
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img className="d-block w-100" src={ITSupport} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Coursera</h5>
                <p className="text-dark">IT Google Support Certificate</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={JuniorDev1} alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Work In Tech</h5>
                <p className="text-dark">Junior Web Programming Certificate</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={JuniorDev2} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Work In Tech</h5>
                <p className="text-dark">Junior Web Programming Certificate</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={ReactScratch} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Udemy</h5>
                <p className="text-dark">Learn React from Scratch</p>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={SoftSkill} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Work In Tech</h5>
                <p className="text-dark">Soft Skill Certificate</p>
              </div>
            </div>


          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certificate