import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import '../signup.css';
import { getDatabase, ref, set , get ,child, update, remove, push, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile, sendEmailVerification,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { db,auth} from './misc/firebase'
import { useStore } from '../store'
import { useToaster, Message, Modal, Button, Placeholder } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
const SignUp = () => {
  const toaster = useToaster();
  let history = useHistory();
  const currentName = useStore((state) => state.currentName);
  const { setCurrentName } = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var database_ref = ref(db);

const [credentials, setCredentials] = useState({
  rollno:"",
  fullname: "",
  email: "",
  password: "",
  confirmpassword:""
});

const [logincred, setlogincred] = useState({
  e_mail:'',
  e_password:''
});
const [resetemail, setresetemail] = useState('')
const onChange = (e) => {

  setCredentials({ ...credentials, [e.target.name]: e.target.value });
  
};
const onChange1 = (e) => {

  setlogincred({ ...logincred, [e.target.name]: e.target.value });
  
};

const {rollno,fullname,email,password,confirmpassword}=credentials;
const {e_mail,e_password}=logincred;

function validate_confirm(password,confirmpassword){
  if(password == confirmpassword){
    console.log('hello');
    return true;
  }
  else {
    toaster.push(
      <Message type="error" closable>
       Password not match</Message>
    );
    return false;
  }
}
const validate_password = (password) =>{
  
  console.log(password)
  // Firebase only accepts lengths greater than 6


    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
    // console.log(password.match(passw))
      if(password.match(passw)!=null) 
      { 
      // alert('Correct')
      return true;
      }
      else
      { 
      alert('Should containne 6-20 atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character ')
      return false;
      }
    }

function validate_email(email) {
  let  expression = /^[^@]+@\w+(\.\w+)+\w$/;
 
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  
  function validate_field(field) {
  
    if (field == null) {
      return false
    }
    if (field.length <= 0) {
      return false
    } 
  }

  function late(){
    
   
   createUserWithEmailAndPassword(auth, email, password)
    .then( () => {
    // Declare user variable
    var user = auth.currentUser
    // console.log(user);
  
    var user_data = {
      uid:user.uid,
      rollno:rollno,
      email : email,
      fullname : fullname,
     password :password,
     emailverified:false,
      last_login : Date.now()
    }

    sendEmailVerification(user)
    .then(() => {
       console.log('email verfication send');
       console.log(user);
    });
     updateProfile(auth.currentUser, {
      displayName: credentials.fullname
     }).then(()=>{
     
      console.log("updated");

     }).catch((e)=>{
      console.log(e);
     })
     
     
    // Add this user to Firebase Database
    // var database_ref = db.ref()

    // Create User data
    
   
     
    // Push to Firebase Database
    set(child(database_ref,'users/'+rollno),user_data);
    // DOne
    alert('User Created!!')
   
 
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message);
  })
// Validate input fields
// if( validate_rollno(rollno)== true ){
//   alert("hello")
// }else{
  }

const validate_rollno=async(rollno)=>{   
      var user = auth.currentUser;
      // const rollno = signuppForm['signupp-rollno'].value; 
    await get(child(database_ref, "users/" + rollno +"/rollno/")).then((snapshot) => {
        try
     {
      if (snapshot.exists()) {
          console.log("user exist" + snapshot.val());
             
          throw new Error(`User exists already with ${rollno}`)

        } 
        else {
            late();
            console.log("user created");
        }
     } catch(err){
      alert('user already exists');
      console.log(err.message);
    }
     
    });
    
  }

 
// Set up our register function
 function signupp(e){
    // Get all our input fields
    e.preventDefault();
 
      // let flag=false
      // await validate_rollno(rollno).then(flag=true).catch(flag=false)
      try{
        if(validate_confirm(password,confirmpassword)==false){
          throw new Error(`password not same`);
        }
        if (validate_password(password) == false ) {
          console.log(password);
          throw new Error(`termiate`);
          // console.log("hello2")
         // alert('One or More Extra Fields is Outta Line!!');
         
       } 
       if ( validate_field(password) == false ) {
         
         alert('field have problem');
         return;
        } 
        
        // console.log("hello3")
        if (validate_email(email) === false) {
          
          alert('Email or Password is Outta Line!!')
          return
          // Don't continue running the code
        }
        if(validate_rollno(rollno)){
          console.log("ok")
        }
        
       
      }catch(err){
         console.log(err.message);
      }
      
  
      
    
 }
  
 function signinn(e) {
  // Get all our input fields
 
  e.preventDefault();
  // Validate input fields
  // if (validate_email(email) == false || validate_password(password) == false) {
  //   alert('Email or Password is Outta Line!!')
  //   return
  //   // Don't continue running the code
  // }

 signInWithEmailAndPassword(auth, e_mail, e_password)
  .then(function() {
    // Declare user variable
  
    var user = auth.currentUser
    console.log(user.displayName)
    // Add this user to Firebase Database
    // var database_ref = db.ref()
    if(user.emailVerified != true){
            alert("Email not verified yet");
    }
    else{
    

    // Create User data
    var user_data = {
      last_login : Date.now(),
      emailverified:true
    }
    

    // Push to Firebase Database
    update(child(database_ref,'users/' + rollno),user_data)

    // DOne
    setCurrentName(user.displayName)
    console.log(currentName)
    history.push("/")
    alert('User Logged In!!')
  }

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })

}

function sweeper(){
  const container1 = document.querySelector(".container1");
  container1.classList.remove("right-panel-active");
}
function sweeper1(){
  const container1 = document.querySelector(".container1");
  container1.classList.add("right-panel-active");
}
function resetpassword(){

  sendPasswordResetEmail(auth, resetemail)
  .then(() => {
    // Password reset email sent!
    console.log("reset email snt");
    handleClose();
    alert("Reset Email Sent.Check your Inbox")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

 return (
    <>
    <div className="bodybill">
    <div className="container1 right-panel-active">
      
        <div className="container__form container--signup " >
            <form   className="form" id="form1" style={{overflow: "scroll"}} onSubmit={signupp}>
                <div style={{position: "relative",top: "18%"}}>
                    <h2 className="form__title" style={{position: "relative",top: "12%",marginTop:'60%'}}>Sign Up</h2>
                </div>
               
                <div className="input-box" style={{marginTop: "110px"}}>
                    <input type="number"  id="rollno" name="rollno" required  onChange={onChange}/>
                    <label htmlFor="rollno">Roll No.</label>
                  </div>
                <div className="input-box">
                    <input type="text" id="fullname" name="fullname" required   onChange={onChange}/>
                    <label htmlFor="username">Full Name</label>
                  </div>
                  <div className="input-box">
                    <input type="email" id="email" name="email" required   onChange={onChange}/>
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-box">
                    <input type="password" id="password" name="password" required   onChange={onChange}/>
                    <label name="password" htmlFor="password">Password</label>
                  </div>
                  <div className="input-box">
                    <input type="password" id="confirmpassword" name="confirmpassword" required   onChange={onChange}/>
                    <label name="confirmpassword" htmlFor="confirmpassword" >Confirm Password</label>
                  </div>
                <button className="btn"  >Sign Up</button>
            </form>
        </div>
    
  
        <div className="container__form container--signin">
            <form className="form" id="form2" onSubmit={signinn}>
                <h2 className="form__title">Sign In</h2>
                <div className="input-box">
                    <input type="text" id="emaillogin" name='e_mail' onChange={onChange1} required/>
                    <label htmlFor="email" >Email</label>
                  </div>
                  <div className="input-box">
                    <input type="password" id="passwordlogin" name='e_password' onChange={onChange1}  required/>
                    <label htmlFor="password">Password</label>
                  </div>
                <button className="link" onClick={handleOpen}>Forgot your password?</button>
                        <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                  <Modal.Title>Reset your password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="input-box" style={{marginTop:'30px'}}>
                    <input type="text" id="emaillogin" name='resetemail' onChange={(e)=>setresetemail(e.target.value)} required/>
                    <label htmlFor="email" >Email</label>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={resetpassword} appearance="primary">
                    Ok
                  </Button>
                  <Button onClick={handleClose} appearance="subtle">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
                <button className="btn">Log In</button>
            </form>
        </div>
    
    
        <div className="container__overlay">
            <div className="overlay">
                <div className="overlay__panel overlay--left">
                    <button className="btn" id="signIn" onClick={sweeper}>Sign In</button>
                </div>
                <div className="overlay__panel overlay--right">
                    <button className="btn" id="signUp" onClick={sweeper1} >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    </>
  )
}

export default SignUp
