import React from "react";
import '../Home/Home.css'

export default function Home() {
  const Styles = {
    width: "25rem",
  };
  return (
    <>
      <div className="main">
        <h1 className="header">Key Initiatives</h1>
        <p className="para">
          Information and Resources: Providing comprehensive information and
          resources for startups, including guides, articles, videos, and tools
          to help entrepreneurs understand the startup ecosystem, legal
          requirements, funding options, and business development. Registration
          and Compliance: Offering a streamlined process for startup
          registration and compliance with relevant government regulations and
          tax authorities. This can include assistance with business entity
          registration, licenses, permits, and taxation. Funding and Investment:
          Facilitating access to funding opportunities, such as grants, loans,
          venture capital, and angel investment networks. This may involve
          listing funding programs and connecting startups with potential
          investors. Networking and Collaboration: Creating a platform for
          startups to network with mentors, industry experts, other startups,
          and potential partners. This often includes hosting networking events,
          workshops, and matchmaking sessions. Mentorship and Training:
          Providing mentorship programs and training resources to help startups
          refine their business models, develop marketing strategies, and
          improve their overall operations. Market Access and Promotion:
          Assisting startups in reaching their target markets and customers.
          This can include marketing support, access to market research data,
          and promotion through the portal's network. Incubation and
          Acceleration: Offering incubation and acceleration programs that
          provide physical workspace, access to infrastructure, and intensive
          mentoring to help startups grow rapidly.
        </p>
      </div>

      <div className="Scheme">
        <h1 className="header">Scheme & Policies</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">Notifications</div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">$0/mo</h5> */}
                  <p className="card-text">
                    Stay on top of all policy and regulatory updates that are
                    important for your next startup move.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">
                  Central Goverment Schems
                </div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">$15/mo</h5> */}
                  <p className="card-text">
                    An aggregation of all Startup focused schemes and policies
                    by the Central Government of India.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">
                  State Goverment Schemes
                </div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">Special title treatment</h5> */}
                  <p className="card-text">
                    Know about the States’ and UTs’ startup policies for Indian
                    startups.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="StartupEcoSystem">
        <h1 className="header">Startup Ecosystem</h1>

        <div className="container">
          <div className="row justify-content-between">
            <div className="card" style={Styles}>
              <img src="./1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Network</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
            </div>

            

            <div className="card " style={Styles}>
              <img src="./2.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Mentorship</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
            </div>

            <div className="card" style={Styles}>
              <img src="./3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Showcase</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <h1 className="header">About Ministry of Ayush</h1>
        <p>
          All About us... The Ministry of Ayush was formed on the 9th of
          November 2014 with a vision of reviving the profound knowledge of our
          ancient systems of medicine and ensuring the optimal development and
          propagation of the Ayush systems of healthcare. Earlier, the
          Department of Indian System of Medicine and Homoeopathy (ISM&H) formed
          in 1995, was responsible for the development of these systems. It was
          then renamed as the Department of Ayurveda, Yoga, and Naturopathy,
          Unani, Siddha and Homoeopathy (Ayush) in November 2003 with focused
          attention towards education and research in Ayurveda, Yoga and
          Naturopathy, Unani, Siddha, and Homoeopathy.
        </p>
      </div>


      <div class="text-center">

      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Know The Minister
      </button>
      </div>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Minister
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <img src="./minister.png" alt="..." />
          <h2>Shri Sarbananda Sonowal</h2>
          <p>Hon'ble Cabinet Minister</p>
          <p>E_Mail: minister-ayush@nic.in</p>
          <p>Phone: 011-24651955,011-24651935</p>
          <p>
            Work Allocated: Ministry of Ayush & Ministry of Ports, Shipping and
            Waterways..
          </p>
        </div>
      </div>
    </>
  );
}
