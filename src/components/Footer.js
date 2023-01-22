import React from 'react';
import {Link} from 'react-router-dom';
import '../footer.css'
const Footer = () => {
  return (
    <>
      <footer>
    <div class="footer pt-5">
      <div class="container">
        <div class="row">
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4 >Student Coordinator</h4>
              <ul className='ulfooter'>
                {/* <li><Link to="#carouselExampleIndicators">Home</Link></li> */}
                <li><Link to="#carouselExampleIndicators">Harsh Tageja (ECE)</Link></li>
                <span style={{color:'whitesmoke'}}>8168404341</span>
                
                
              
              </ul>
              
            </div>
            <div class="footer_section">
            <h4 style={{fontSize:'17px'}}>Student Co-Coordinators</h4>
              <ul className='ulfooter'>
                {/* <li><Link to="#carouselExampleIndicators">Home</Link></li> */}
      
                <li><Link to="#">Nishchay Gupta (CSE)</Link></li>
                <span style={{color:'whitesmoke'}}>9588169118</span>
                <li><Link to="#">Ritisha Jindal (ECE)</Link></li>
                <span style={{color:'whitesmoke'}}>9896679160</span>
              
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>LINKS</h4>
              <ul className='ulfooter'>
                <li><a href="https://www.dcrustm.ac.in/" target='_blank'>www.dcrustm.ac.in</a></li>
                <li><a href="/images/brochure.pdf" target='_blank'>Brochure</a></li>
                {/* <li><a href="#"></a></li>
                <li><a href="#"></a></li> */}
                {/* <li><a href="#">Vite</a></li> */}
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>Developer Team</h4>
              <br></br>
              <ul className='ulfooter'>
                <li><a href="https://www.linkedin.com/in/ankit-bhujeja/" target='_blank'><i class="fab fa-linkedin" style={{marginRight:'2%'}}></i> Ankit Bhujeja</a></li>
                <li><a href="https://www.linkedin.com/in/kunal-aggarwal-b37a871b1" target='_blank'><i class="fab fa-linkedin" style={{marginRight:'2%'}}></i> Kunal Aggarwal</a></li>
                <li><a href="https://www.linkedin.com/in/manish-jaiswal-6a260a1b4/" target='_blank'><i class="fab fa-linkedin" style={{marginRight:'2%'}}></i> Manish Jaiswal</a></li>
                <li><a href="https://www.linkedin.com/in/abhinavaa01" target='_blank'><i class="fab fa-linkedin" style={{marginRight:'2%'}}></i> Abhinav Agrawal</a></li>
                {/* <li><Link to="#">npm starter</Link></li> */}
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-12 col-lg-3 mb-5">
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-12 footer_section footer_section_contact"
              >
                <h4>Contact Us</h4>
                <div class="search">
                  <h3 style={{color:'whitesmoke',fontSize:'15px'}}>coordinator_technova@dcrustm.org</h3>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-12 social_media">
                <h4>Follow Up</h4>
                <br></br>
                <ul className='ulfooter'>
                  <li>
                    <a href="https://www.instagram.com/dcrust.campus.squares/" target='_blank'><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/murthaldcrust?lang=en" target='_blank'><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/dcrustmurthal/" target='_blank'><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/officialdcrustm/" target='_blank'><i class="fab fa-facebook-f"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
