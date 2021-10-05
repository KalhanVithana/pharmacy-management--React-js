import React from 'react'
import './footer.css'
export default function Footer() {
    return (
      <div  className="purple-gradient">
          
          <footer>
            <div className="footercol">
              <h4>Hours Of Operation</h4>
              <div className="tweet">
                <p>We are available from 9 am - 6 pm, Monday through Friday (Sri Lanka Time)
                  <br /><br />
                  Orders placed after 2:00 pm will be delivered on the following day.
                  (Subject to change/ Contact Pharmacist-0719774774)
                </p>
              </div> 
            </div> {/* footercol */}
            <div className="footercol">
              <h4>Quick Links</h4>
              <ul className="quicklinks">
                <li><a href="#">Prescription Medicine</a></li>
                <li><a href="#">Special Promotions</a></li>
                <li><a href="#">Channel your Doctor</a></li>
                <li><a href="#">Nutrition &amp; Supplements</a></li>
                <li><a href="#">Glucose Monitors &amp; Strips</a></li>
                <li><a href="#">Diapers &amp; Wet wipes</a></li>
                <li><a href="#">Baby Health &amp; Food</a></li>
                <li><a href="#">Women's Health</a></li>
                <li><a href="#">Speciality</a></li>
                <li><a href="#">Pet Food</a></li>
              </ul> {/* quicklinks */}
            </div> {/* footercol */}
            <div className="footercol">
              <h4>Blog Post</h4>
              <div className="blogpost">
                <h5>5 Ways Biking Can Boost Your Health</h5>
                <div className="postinfo">
                  <br />
                  Sunday, 29th May 2019
                </div> {/* postinfo */}
                <p>Just because you’ve got your driver’s license doesn’t mean that you should forget about biking. Sure, there .</p>
                <a href="#" className="readmore">Read more »</a>
              </div> 
              <br />
              <hr />
              <br />{/* blogpost */}
              <div className="blogpost">
                <h5>One Couple’s Journey on the Bumpy Road of Infertility</h5>
                <div className="postinfo">
                  <br />
                  Sunday, 19th May 2018
                </div> {/* postinfo */}
                <p>Did you ever think you’d end up being a human pin cushion science experiment? No?</p>
                <a href="#" className="readmore">Read more »</a>
              </div> {/* blogpost */}
            </div> {/* footercol */}
            <div className="footercol">
              <h4>Help Links</h4>
              <ul className="quicklinks">
                <li><a href="#">About</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Our Pharmacy Network</a></li>
                <li><a href="#">Hospital Contact Details</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Diapers &amp; Wet wipes</a></li>
                <li><a href="#">Privacy &amp; Policy</a></li>
              </ul> {/* quicklinks */}         
            </div> {/* footercol */}
          </footer>
          <div className="copyrights">
            <div className="left">
              Copyrights © LIFECHECK. All Rights Reserved
            </div>
            <div className="right">
              
            </div>
          </div> {/* copyrights */}
      
       
     
        </div>
    )
}
