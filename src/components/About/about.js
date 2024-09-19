import React, { useEffect } from "react";
import '../About/about.css';

export default function Home() {
  useEffect(() => {
    // Ensure Bootstrap carousel initializes correctly after the component is mounted
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
      // Initialize the Bootstrap carousel using the global `bootstrap` object
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <>
      {/* Main Section */}
      <div className="main">
        <h1 className="header">About This Platform</h1>
        <p className="para">
          This platform connects startups with potential investors, providing a
          streamlined way for early-stage businesses to showcase their ideas and
          secure funding. Investors can discover startups that align with their
          interests, track progress, and communicate directly. The platform also
          offers real-time updates on government funding opportunities, allowing
          startups to access timely information.
        </p>
        <p className="para">
          Built on the MERN stack, the platform includes features like
          personalized matching, live events, secure communication, and funding
          progress tracking, simplifying the investment process for both
          startups and investors.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="container mt-4">
        <h2 className="header text-center">Key Features</h2>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ overflow: "hidden", marginBottom: "20px" }}>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner" style={{ maxHeight: "400px" }}>
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="./mentor.png"
                className="d-block w-100"
                alt="Funding"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Showcase Your Startup</h5>
                <p>Present your startup to a broad audience and attract investors and partners to support your vision.</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="./startup.jpeg"
                className="d-block w-100"
                alt="Networking"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Startup</h5>
                <p>Connect with potential investors, mentors, and other startups to grow your network.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="./investor.png"
                className="d-block w-100"
                alt="Progress Tracking"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Connect with Investors</h5>
                <p>Gain direct access to potential investors who are looking to fund innovative startups like yours.</p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            style={{ top: "50%", transform: "translateY(-50%)", left: "10px" }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            style={{ top: "50%", transform: "translateY(-50%)", right: "10px" }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-5">
        <div className="container text-center">
          <p>© 2024 Startup Accelerator Platform - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
