import React from "react";
import "./res.css";

export default function Resources() {
  return (
    <div className="resources-container">
      <h1 className="resources-header">Resources for Startups</h1>
      <div
        id="resourcesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#resourcesCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#resourcesCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#resourcesCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.logodesign.net/images/artical/auto-shope-logo/design-auto-shop-transport-company-logos-thumb.png"
              className="d-block w-100"
              alt="Guides and Articles"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Guides and Articles</h3>
              <p>
                Comprehensive guides and articles on startup ecosystem, legal
                requirements, business strategies, and more.
              </p>
              <a href="/guides" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/664dda58ab18c9f5b15d9f46_89d8f603-fff4-4cba-8cdd-19ca1a4a30b4.webp"
              className="d-block w-100"
              alt="Videos and Tutorials"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Videos and Tutorials</h3>
              <p>
                Watch curated videos on business development, fundraising, and
                scaling your startup.
              </p>
              <a href="/videos" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/66/32/62/1000_F_266326281_GOBRKha1suFpGQUN3667s9kTmvuG5NSB.jpg"
              className="d-block w-100"
              alt="Tools and Templates"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Tools and Templates</h3>
              <p>
                Essential tools for financial modeling, business plans, and
                legal documents.
              </p>
              <a href="/tools" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#resourcesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#resourcesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="additional-resources">
        <h2>Explore More Resources</h2>
        <div className="resources-grid">
          <div className="resource-item">
            <img
              src="https://img.freepik.com/premium-photo/double-exposure-image-investor-business-man-handshake-with-partner-with-digital-network-link-connection-graph-chart-stock-market-cityscape-background_33829-154.jpg"
              alt="Investor Connections"
            />
            <h3>Investor Connections</h3>
            <p>Connect with investors and explore funding opportunities.</p>
            <a href="/investors" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="resource-item">
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/52/77/laws-and-regulations-concept-vector-47085277.jpg"
              alt="Government Regulations"
            />
            <h3>Government Regulations</h3>
            <p>
              Stay updated on the latest government regulations and compliance
              requirements.
            </p>
            <a href="/regulations" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="resource-item">
            <img
              src="https://www.collidu.com/media/catalog/product/img/d/f/df2afd928d70da2d0a66b215775a6e691222a30a439971b1855863a7eab9d049/market-access-slide1.png"
              alt="Market Access"
            />
            <h3>Market Access</h3>
            <p>Get support in reaching your target market and customers.</p>
            <a href="/market-access" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
