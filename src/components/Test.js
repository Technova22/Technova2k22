import '../TeamRegTest.css'
import {useState} from 'react'
function Test() {
    var [me2, setMe2] = useState(false);
    var [me3, setMe3] = useState(false);
    var [me4, setMe4] = useState(false);

    const addmember = (e) => {
        e.preventDefault();
        if (me2) {
            if (me3) {
                setMe4(true);
            } else {
                setMe3(true);
            }
        } else {
            setMe2(true);
        }
    }

    const delmember = (e) => {
        e.preventDefault();
        if (me4) {
            setMe4(false);
        } else if (me3) {
            setMe3(false);
        } else if (me2) {
            setMe2(false);
        }
    }
    return (
        <>
        
    <div class="row">
        <section class="section">
          <header>
            <h3>Register</h3>
            <h4>Please fill your information bellow</h4>
          </header>
          <main>
            <form action="" id="TeamForm" >
      
                <div class="form-item box-item">
                  <input id="teamname" type="text" name="name" placeholder="Team Name" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                <div class ="" id='1'>
                <span className="w-auto h2 text-light">Member 1</span>
                <div className='row'>
                <div class="form-item box-item">
                  <input id ="name1" type="text" name="name" placeholder="1st Member" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="email1" type="email" name="email" placeholder="Email"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div className='row'>
                <div class="form-item box-item">
                  <input id ="phone1" type="tel" name="phone" placeholder="Phone no." data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="roll1" type="number" name="rollnumber" placeholder="Roll Number"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                </div>
                <div class={me2? " animate_animated animate_slideInDown":"d-none"} id='2'>
                <span className="w-auto h2 text-light">Member 2</span>
                <div className='row'>
                <div class="form-item box-item">
                  <input  id ="name2" type="text" name="name" placeholder="2nd Member"  data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="email2" type="email" name="email" placeholder="Email" data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div className='row'>
                <div class="form-item box-item">
                  <input id ="phone2" type="tel" name="phone" placeholder="Phone no." data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="roll2" type="number" name="rollnumber" placeholder="Roll Number"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                </div>
                <div class={me3? " animate_animated animate_slideInDown":"d-none"} id='3'>
                <span className="w-auto h2 text-light">Member 3</span>
                <div className='row'>
                <div class="form-item box-item">
                  <input   id ="name3" type="text" name="name" placeholder="3rd Member"  data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="email3" type="email" name="email" placeholder="Email" data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div className='row'>
                <div class="form-item box-item">
                  <input id ="phone3" type="tel" name="phone" placeholder="Phone no." data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="roll3" type="number" name="rollnumber" placeholder="Roll Number"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                </div>
                <div class={me4? " animate_animated animate_slideInDown":"d-none"} id='4'>
                <span className="w-auto h2 text-light">Member 4</span>
                <div className='row'>
                <div class="form-item box-item">
                  <input  id ="name4"  type="text" name="name" placeholder="4th Member" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input  id ="email4" type="email" name="email" placeholder="Email"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div className='row'>
                <div class="form-item box-item">
                  <input id ="phone4" type="tel" name="phone" placeholder="Phone no." data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-item">
                  <input id="roll4" type="number" name="rollnumber" placeholder="Roll Number"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                </div>


                <div className='row'>
                <span className={!me2?'btn btn-light fs-3 my-2 rounded-pill disabled d-none':'btn btn-light fs-3 my-2 rounded-pill animate_animated animate_slideInUp'} onClick={delmember}>
                    <i className='bi bi-person-dash'></i> Remove Member
                </span>
                <span className={me4?'btn btn-light fs-3 my-2 rounded-pill disabled d-none':'btn btn-light fs-3 my-2 rounded-pill animate_animated animate_slideInUp'} onClick={addmember}>
                    <i className='bi bi-person-add'></i> Add Member
                </span>
                </div>
        
               
                
                <div class="form-item my-3 mx-auto">
                  <button  class="submit" id="sbtn" >Submit</button>
                </div>
              </form>
          </main>
         
          <i class="wave"></i>
        </section>
      </div>
        </>
    )
}
export default Test;