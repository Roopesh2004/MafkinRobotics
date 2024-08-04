import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Business</h4>
            <a >
              <p>Employer</p>
            </a>
            <a >
              <p>Health plan</p>
            </a>
            <a >
              <p>Individual</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a >
              <p>Resource center</p>
            </a>
            <a >
              <p>Testimonials</p>
            </a>
            <a >
              <p>STV</p>
            </a>
          </div>
          {/* <div className="sb-footer-links-div">
          <h4>Sponsor</h4>
            <a >
              <p></p>
            </a>
          </div> */}
          <div className="sb-footer-links-div">
          <h4>Company</h4>
          <Link to="timeline-section" spy={true} smooth={true} offset={-65}>
                <span >About </span>
              </Link>
            <a >
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <Link to="contact-section" spy={true} smooth={true} offset={-65}>
                <span >Contact </span>
              </Link>
          </div>
          <div className="sb-footer-links-div">
            <h4>Socials</h4>
            <div className="socialmedia">
              <p><img src="linkedin1.png" alt=""/></p>
              <p><img src="twitter.png" alt=""/></p>
              <p><img src="facebook.png" alt=""/></p>
              <p><img src="instagram.png" alt=""/></p>
            </div>
          </div>
        </div> 

        <hr></hr>

        <div className="sb-footer-below">
           <div className="sb-footer-copyright">
            <p>
              @{new Date().getFullYear()} Mafkin Robotics. All Right reserved.
            </p>
           </div>
           
           <div className="sb-footer-below-links">
            <a ><div><p>Terms & Conditions</p></div></a>
            <a ><div><p>Privacy</p></div></a>
            <a ><div><p>Security</p></div></a>
            <a ><div><p>Cookie Declaration</p></div></a>

           </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
