import React from 'react'
import './Faq.css'
import { Link } from 'react-scroll'
const Faq = () => {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? We are here to help</p>
        <section className='services'>
            <div className='service-right'>
                <div className='qa'>
                    <input type="checkbox" id='collapsible-head-1' />
                    <label for = "collapsible-head-1">What is the price?</label>
                    <div className='collapsible-text-1'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                <input type="checkbox" id="collapsible-head-2" />
                <label for="collapsible-head-2">How many Products are there?</label>
                <div className="collapsible-text-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                        ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-3" />
                    <label for="collapsible-head-3">ports availability?</label>
                    <div className="collapsible-text-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-4" />
                    <label for="collapsible-head-4"> Whats your timing</label>
                    <div className="collapsible-text-4">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-5" />
                    <label for="collapsible-head-5">Compatibility of yur product with this ship</label>
                    <div className="collapsible-text-5">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-6" />
                    <label for="collapsible-head-6">Ram n Bhai Sarayanu</label>
                    <div className="collapsible-text-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque
                            ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.</p>
                    </div>
                </div>
            </div>
            <div className="newsletter">
          <div className="news-left">
            <h4>Still have doubts?</h4>
            <h1 className="hh1">
            Feel free to contact us at any time.
            </h1>
          </div>
          <div className="news-right">
            <p>
            Your questions, comments, and feedback are important to us, and we are committed to providing the assistance you need.
            </p>
            <Link to="contact-section" spy={true} smooth={true} offset={-65}><button>Contact Us</button></Link>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Faq