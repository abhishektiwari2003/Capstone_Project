import React from "react";
import "../Home/Home.css";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const cardStyle = {
    width: "25rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "10px",
  };

  const buttonStyle = {
    margin: "10px",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-title text-center">
        <h1>Private market investing made easy</h1>
        <h2 className="hero-subtitle">
          Raise fund. Start syndicate. Drive growth
        </h2>
        <button className="btn btn-success mx-2" onClick={() => navigate('/InvestorPage')} >For Investor</button>
        <button className="btn btn-info mx-2" onClick={() => navigate('/startupPage')}
        >For Startup</button>
        <Link to="/investor" className="btn btn-info mx-2" style={buttonStyle}>
          For Investor
        </Link>
        <Link to="/forfounders" className="btn btn-info mx-2" style={buttonStyle}>
          For Startup
        </Link>
      </div>

      {/* What We Do Section */}
      <div className="main text-center my-5">
        <h1 className="header text" >Key Initiatives</h1>
        <p className="para text-secondary">
          Providing comprehensive resources for startups, including guides,
          articles, videos, and tools. Streamlined processes for registration,
          compliance, and funding access.
        </p>
      </div>

      {/* Schemes Section */}
      <div className="Scheme my-5">
  <h1 className="header text text-center mb-4">Schemes & Policies</h1>
  <div className="container">
    <div className="row g-4"> {/* Added gap between grid items */}
      <div className="col-md-4 d-flex align-items-stretch"> {/* Ensures cards have equal height */}
        <div className="card border-success" style={cardStyle}>
          <div className="card-header text-center">Notifications</div>
          <div className="card-body text-center">
            <p>Stay on top of all policy and regulatory updates.</p>
            <a href="/" className="btn btn-primary" style={buttonStyle}>
              View
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card border-success" style={cardStyle}>
          <div className="card-header text-center">
            Central Government Schemes
          </div>
          <div className="card-body text-center">
            <p>Startup-focused schemes and policies by the Central Government.</p>
            <a href="/" className="btn btn-primary" style={buttonStyle}>
              View
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 d-flex align-items-stretch">
        <div className="card border-success" style={cardStyle}>
          <div className="card-header text-center">
            State Government Schemes
          </div>
          <div className="card-body text-center">
            <p>Startup policies from States and UTs.</p>
            <a href="/" className="btn btn-primary" style={buttonStyle}>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Startup Ecosystem Section */}
      <div className="StartupEcoSystem my-5">
        <h1 className="header text text-center">Startup Ecosystem</h1>
        <div className="container">
          <div className="row justify-content-around">
            {/* Card 1 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./1.png" className="card-img-top" alt="Network" />
              <div className="card-body text-center">
                <h5 className="card-title">Network</h5>
                <p>Build strong connections within the startup ecosystem.</p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./2.png" className="card-img-top" alt="Mentorship" />
              <div className="card-body text-center">
                <h5 className="card-title">Mentorship</h5>
                <p>Get guided by industry experts to scale your startup.</p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./3.png" className="card-img-top" alt="Showcase" />
              <div className="card-body text-center">
                <h5 className="card-title">Showcase</h5>
                <p>
                  Showcase your startup to a network of potential investors.
                </p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="for-investors">
      <h2>For Investors</h2>
      <p>Tools and resources to invest and lead investments in startups across all stages.</p>
      <button className="learn-more-button">Learn More</button>
      <div className="products">
        <div className="product">
          <img src="https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150927138.jpg?t=st=1733726441~exp=1733730041~hmac=324eb0c2c8a50634033c62c56e9433db72da99aa9c0a3ee713bc58649b634ddf&w=740" alt="Invest Icon" />
          <h3>Invest in Startups</h3>
          <p>Discover disruptive startups in their early stage.</p>
          
        </div>
        <div className="product">
          <img src="https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1733726685~exp=1733730285~hmac=e10db24cf787bebf478b86c35029b7e01ebfcdd90ab2deebe935bedc3f3172cc&w=740" alt="Portfolio Icon" />
          <h3>Portfolio Management</h3>
          <p>Track and manage startup investments activity.</p>
         
        </div>
        <div className="product">
          <img src="https://img.freepik.com/free-vector/modern-rocket-composition-with-flat-design_23-2147929541.jpg?t=st=1733726548~exp=1733730148~hmac=13e219efa5065c32007943693eb1183e80b4617f0800dfc14d233cce93e77450&w=740" alt="Syndicate Icon" />
          <h3>Start a Syndicate</h3>
          <p>Source deals, consolidate investors, and lead your investments on LetsVenture.</p>
          
        </div>
        <div className="product">
          <img src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?t=st=1733726790~exp=1733730390~hmac=e0594e75d6e2f9d997c27ea9e6fc444d279e361aa075ba7b687aa980b9ae2dbd&w=740" alt="Trica Capital Icon" />
          <h3>trica capital</h3>
          <p>Invest in growth stage startups, funds, and more.</p>
          
        </div>
      </div>
    </div>
      </div>

      {/* CTA Buttons */}
      <div className="text-center my-5">
      <button className="btn btn-success mx-2" onClick={() => navigate('/InvestorDashboard')} >Investor-Portal</button>
      <button
  className="btn btn-primary mx-2"
  onClick={() => navigate('/StartupDashboard')}
>
  Startup-Portal
</button>

      </div>
    </>
  );
}
