import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../signup.css";
import { useMediaQuery } from 'react-responsive'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
  push,
  onValue,
} from "firebase/database";
import Passwordtoggle from "./misc/Passwordtoggle";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { db, auth } from "./misc/firebase";
import { useStore } from "../store";
import { useToaster, Message, Modal, Button, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Login from "./Login";



const SignUp = () => {
  const [mode, setmode] = useState('login');
  function toggleMode() {
      var newMode =( mode === 'login') ? 'signup' : 'login';
      setmode(newMode)
  }
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)'
  })
  const [InputType1,InputType2,InputType3, SIcon, CIcon, Icon] = Passwordtoggle();
  const toaster = useToaster();
  let history = useHistory();
  const currentName = useStore((state) => state.currentName);
  const currentEmail = useStore((state) => state.currentEmail);
  const currentRoll = useStore((state) => state.currentRoll);
  // const currentPhone = useStore((state) => state.currentPhone);
  // const currentOrganization = useStore((state) => state.currentOrganization);
  // const currentBranch = useStore((state) => state.currentBranch);
  // const currentSemester = useStore((state) => state.currentSemester);

  const { setCurrentName, setCurrentEmail, setCurrentRoll } = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var database_ref = ref(db);

  const [credentials, setCredentials] = useState({
    rollno: "",
    fullname: "",
    email: "",
    mobile: "",
    organization: "",
    branch: "",
    semester: "",
    password: "",
    confirmpassword: "",
  });
  console.log(credentials);
  
  const [logincred, setlogincred] = useState({
    e_mail: "",
    e_password: "",
  });
  // console.log(logincred);
  const [resetemail, setresetemail] = useState("");
  // console.log(resetemail);
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onChange1 = (e) => {
    setlogincred({ ...logincred, [e.target.name]: e.target.value });
  };

  const {
    rollno,
    fullname,
    email,
    mobile,
    organization,
    branch,
    semester,
    password,
    confirmpassword,
  } = credentials;
  const { e_mail, e_password } = logincred;

  function validate_confirm(password, confirmpassword) {
    if (password == confirmpassword) {
      console.log("hello");
      return true;
    } else {
      toaster.push(
        <Message type="error" closable>
          Password not match
        </Message>
      );
      return false;
    }
  }
  const validate_password = (password) => {
    // console.log(password);
    // Firebase only accepts lengths greater than 6

    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    // console.log(password.match(decimal))
    if (password.match(decimal)) {
      
      // alert('Correct')
      return true;
    
    } else {
      alert(
        "Should contain 8-15 atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character "
      );
      return false;
    }
  };

  function validate_email(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/;

    if (expression.test(email) == true) {
      // Email is good
      return true;
    } else {
      // Email is not good
      return false;
    }
  }
  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  function validate_field(field) {
   console.log(field.length)
    if (field.length == 0) {
      return false;
    }

  }

  function late() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Declare user variable
        var user = auth.currentUser;
        // console.log(user);

        var user_data = {
          uid: user.uid,
          rollno: rollno,
          email: email.toLowerCase(),
          fullname: fullname,
          mobile: mobile,
          organization: organization,
          branch: branch,
          semester: semester,
          password: password,
          emailverified: false,
          last_login: new Date(),
        };

       
        updateProfile(auth.currentUser, {
          displayName: credentials.fullname,
          email: credentials.email,
          photoURL: credentials.rollno,
        })
          .then(() => {
            console.log("updated");
          })
          .catch((e) => {
            console.log(e);
          });

        // Add this user to Firebase Database
        // var database_ref = db.ref()

        // Create User data

        // Push to Firebase Database
        set(child(database_ref, "users/" + rollno), user_data);
        sendEmailVerification(user).then(() => {
          toaster.push(
            <Message type="info" closable>
              Email link set: Check your Inbox
            </Message>
          );
          // console.log(user);
        });

        // DOne
        toaster.push(
          <Message type="success" closable>
            User Registered
          </Message>
        );
      })
      .catch(function (error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;

        alert(error_message);
      });
    // Validate input fields
    // if( validate_rollno(rollno)== true ){
    //   alert("hello")
    // }else{
  }

  const validate_rollno = async (rollno) => {
    var user = auth.currentUser;
    // const rollno = signuppForm['signupp-rollno'].value;
    await get(child(database_ref, "users/" + rollno + "/rollno/")).then(
      (snapshot) => {
        try {
          if (snapshot.exists()) {
            // console.log("user exist" + snapshot.val());
            console.log("user exist");

            throw new Error(`User exists already with ${rollno}`);
          } else {
            late();
            console.log("user created");
          }
        } catch (err) {
          toaster.push(
            <Message type="error" closable>
              User Already Exists !!
            </Message>
          );
          console.log(err.message);
        }
      }
    );
  };

  // Set up our register function
  function signupp(e) {
    // Get all our input fields
    e.preventDefault();

    // let flag=false
    // await validate_rollno(rollno).then(flag=true).catch(flag=false)
    try {
      
      if (validate_confirm(password, confirmpassword) == false) {
        throw new Error(`password not same`);
      }
      if(containsOnlyNumbers(rollno) == false){
        throw new Error("Roll no should contain numeric values")
      }
      if(containsOnlyNumbers(mobile) == false){
        throw new Error("Mobile No. should contain numeric values")
      }
      if (validate_password(password) == false) {
        // console.log(password);
        throw new Error(`termiate`);
        // console.log("hello2")
        // alert('One or More Extra Fields is Outta Line!!');
      }
      if (validate_field(fullname) == false || validate_field(branch) == false || validate_field(semester) == false ||  validate_field(organization) == false) {
        console.log(validate_field(semester))
        throw new Error("Any of field is Empty");
        
      }

      // console.log("hello3")
      if (validate_email(email) === false) {
        alert("Email is incorrect !!");
        return;
        // Don't continue running the code
      }
      if (validate_rollno(rollno)) {
        console.log("ok");
      }
    } catch (err) {
      toaster.push(
        <Message type="error" closable>
          {err.message}
        </Message>
      );
    }
  }

  function signinn(e) {
    // Get all our input fields

    e.preventDefault();

    signInWithEmailAndPassword(auth, e_mail, e_password)
      .then(function () {
        // Declare user variable

        var user = auth.currentUser;
        // console.log(user.displayName);
        // console.log(user.email);
        // Add this user to Firebase Database
        // var database_ref = db.ref()
        if (user.emailVerified != true) {
          toaster.push(
            <Message type="error" closable>
              Email not verified yet
            </Message>
          );
        } else {
          // var currenttime = new Date().getHours();
          // Create User data
          var user_data = {
            last_login: Date.now(),
            emailverified: true
          };
          // console.log(user)

          // Push to Firebase Database
          update(child(database_ref, "users/" + user.photoURL), user_data);

          // DOne
          setCurrentName(user.displayName);
          setCurrentEmail(user.email);
          setCurrentRoll(user.photoURL);
          // console.log(currentName);
          // console.log(currentEmail);
          history.push("/");
          toaster.push(
            <Message type="success" closable>
              User Logged In
            </Message>
          );
        }
      })
      .catch(function (error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;

          toaster.push(
        <Message type="error" closable>
          {error_message}
        </Message>
      );
      });
  }

  function sweeper() {
    const container1 = document.querySelector(".container1");
    container1.classList.remove("right-panel-active");
  }
  function sweeper1() {
    const container1 = document.querySelector(".container1");
    container1.classList.add("right-panel-active");
  }
  function resetpassword() {
    sendPasswordResetEmail(auth, resetemail)
      .then(() => {
        // Password reset email sent!
        console.log("reset email snt");
        handleClose();
        toaster.push(
          <Message type="success" closable>
           Reset Email Sent. Check your Inbox or Spam
          </Message>
        );
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
    { isDesktop?
      // <i class="fa-solid fa-eye-slash"></i>
    <div className="bodybill">
      <div className="container1 right-panel-active">
        <div className="container__form container--signup ">
          <form
            className="form"
            id="form1"
            style={{ overflow: "scroll" }}
            onSubmit={signupp}
          >
            <div style={{ position: "relative", top: "18%" }}>
              <h2
                className="form__title"
                style={{
                  position: "relative",
                  top: "22%",
                  marginTop: "220%",
                }}
              >
                Sign Up
              </h2>
            </div>

            <div className="input-box" style={{ marginTop: "160px" }}>
              <input
                type="text"
                id="rollno"
                name="rollno"
                required
                onChange={onChange}
              />
              <label htmlFor="rollno">Roll No.</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                onChange={onChange}
              />
              <label htmlFor="username">Full Name</label>
            </div>
            <div className="input-box">
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={onChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                onChange={onChange}
              />
              <label htmlFor="mobile">Mobile Number</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="organization"
                name="organization"
                required
                onChange={onChange}
              />
              <label htmlFor="organization">College Name</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="branch"
                name="branch"
                required
                onChange={onChange}
              />
              <label htmlFor="branch">Branch</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="semester"
                name="semester"
                required
                onChange={onChange}
              />
              <label htmlFor="semester">Semester</label>
            </div>
            <div className="input-box">
              <input
                type={InputType1}
                id="password"
                name="password"
                required
                onChange={onChange}
              />
              <label name="password" htmlFor="password">
                Password
              </label>
              <span className="password-toogle-icon">{SIcon}</span>
            </div>
            <div className="input-box">
              <input
                type={InputType2}
                id="confirmpassword"
                name="confirmpassword"
                required
                onChange={onChange}
              />
              <label name="confirmpassword" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <span className="password-toogle-icon">{CIcon} </span>
            </div>
            <button className="btnsign">Sign Up</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form className="form" id="form2" onSubmit={signinn}>
            <h2 className="form__title">Sign In</h2>
            <div className="input-box">
              <input
                type="text"
                id="emaillogin"
                name="e_mail"
                onChange={onChange1}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              
                <input
                  type={InputType3}
                  id="passwordlogin"
                  name="e_password"
                  onChange={onChange1}
                  required
                />{" "}
              
              <label htmlFor="password">Password</label>
                <span className="password-toogle-icon">{Icon}</span>
            </div>
            <button className="link" onClick={handleOpen}>
              Forgot your password?
            </button>
            <Modal open={open} onClose={handleClose}>
              <Modal.Header>
                <Modal.Title>Reset your password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="input-box" style={{ marginTop: "30px"}}>
                  <input
                    type="text"
                    id="emaillogin"
                    name="resetemail"
                    onChange={(e) => setresetemail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
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
            <button className="btnsign">Log In</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btnsign" id="signIn" onClick={sweeper}>
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btnsign" id="signUp" onClick={sweeper1}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    // <div id="app"></div>
    <div className={`app app--is-${mode}`}>
        <Login
            signupp={signupp}
            signinn={signinn}
            onChange={onChange}
            onChange1={onChange1}
            mode={mode}
            toggleMode={toggleMode}
            resetpassword={resetpassword}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            resetemail={resetemail}
            setresetemail={setresetemail}
            // onSubmit={
            //     function() {
            //         console.log('submit');
            //     }
            // }
        />
    </div>
    }
      {/* <span className="password-toogle-icon">{Icon} </span> */}
    </>
  );
};

export default SignUp;