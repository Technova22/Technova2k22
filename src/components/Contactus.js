import React from 'react'
import '../Contactus.css'
const Contactus = () => {
  return (
    <>
     {/* <div className='bodycontact'> */}
    <div id="gitsxn" className="rowcontact gitsxn">
        <div className="position-relative">
            <div className="py-3 ">
            <div className="text-light text-center w-80 p-5 ">
                <div className="gitsxn_heading offset-3 text-justify">Get in Touch</div>
                <div className=" text-justify col-10 offset-1">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</div>
            </div>
            <div className="text-light text-center w-50 p-5">
                <div className="w-auto h-auto gitsxnimg"></div>
            </div>
            </div>

    <div  className="rowcontact position-absolute start-0 gitsxncardspos">
        <div  className="col-4 border text-center w-50 py-4 mx-5 bg-light rounded" >
            <i className="bi bi-telephone-fill gitsxn_heading"></i><br/>
            <span className="h3">Talk to us!</span>
            <br/><br/>
            <div className="col-8 offset-2">Sample text here, Anything can be added here. Sample text here, Anything can be added here.</div>
            <br/><br/>
            
            <a href="tel:987654321" role="button" className="btn btn-outline-secondary btn-lg fs-7">+91-987654321</a>
        </div>
        <div className="col-4 border text-center py-3 w-50 mx-5 bg-light rounded">
            <i className="bi bi-envelope-fill gitsxn_heading"></i><br/>
            <span className="h3">Through mail!</span>
            <br/><br/>
            <div className="col-8 offset-2">Sample text here, Anything can be added here. Sample text here, Anything can be added here.</div>
            <br/><br/>
            <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'" role="button" className="btn btn-outline-secondary btn-lg fs-7">ceo@gmail.com</a>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Contactus