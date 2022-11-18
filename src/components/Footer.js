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
              <h4>Links</h4>
              <ul className='ulfooter'>
                <li><Link to="#carouselExampleIndicators">Home</Link></li>
                <li><Link to="#">Docs</Link></li>
                <li><Link to="#">Examples</Link></li>
                <li><Link to="#">Icons</Link></li>
                <li><Link to="#">Themes</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Swag Store</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>Guides</h4>
              <ul className='ulfooter'>
                <li><Link to="#">Getting started</Link></li>
                <li><Link to="#">Starter template</Link></li>
                <li><Link to="#">Webpack</Link></li>
                <li><Link to="#">Parcel</Link></li>
                <li><Link to="#">Vite</Link></li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>Projects</h4>
              <ul className='ulfooter'>
                <li><Link to="#">Bootstrap 5</Link></li>
                <li><Link to="#">Bootstrap 4</Link></li>
                <li><Link to="#">Icons</Link></li>
                <li><Link to="#">RFS</Link></li>
                <li><Link to="#">npm starter</Link></li>
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
                  <form action="#" class="subscribe">
                    <input
                      type="email"
                      class="contact_input"
                      placeholder="E-mail address"
                    />
                    <button type="submit" class="submit_button">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-12 social_media">
                <h4>Follow Up</h4>
                <ul className='ulfooter'>
                  <li>
                    <Link to=""><i class="fab fa-facebook-f"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-google-plus-g"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-instagram"></i></Link>
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
