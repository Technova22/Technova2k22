import React from 'react'
import { Input } from './misc/Input'
import { useToaster, Message, Modal, Button, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
const LoginForm = ({mode,signupp,signinn,onChange,onChange1,Passwordtoggle,resetpassword,handleOpen,handleClose,
  resetemail,setresetemail,open}) => {
    const [InputType1,InputType2,InputType3, SIcon, CIcon, Icon] = Passwordtoggle();
    
  return (
    <>
     <form >
            <div className="form-block__input-wrapper">
                    <div className="form-group form-group--login">
                        <Input type="text" id="emaillogin" fname="e_mail" label="Email" disabled={mode === 'signup'}onChange2={onChange1}/>
                        {/* <div> */}
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <Input type={InputType3} id="passwordlogin" fname="e_password" label="Password" disabled={mode === 'signup'} onChange2={onChange1}/>
                        {mode==='login' &&
                        <div style={{alignItems:'center',marginTop:'20px'}}>{Icon}</div>}
                        </div>
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
                        
                        {/* </div> */}
                       
                    </div>
                    <div className="form-group form-group--signup">
                        <Input type="number" id="rollno" fname="rollno" label="Roll no" disabled={mode === 'login'} onChange2={onChange}/>
                        <Input type="text" id="fullname" fname="fullname" label="Full name" disabled={mode === 'login'} onChange2={onChange}/>
                        <Input type="email" id="email" fname="email" label="Email" disabled={mode === 'login'} onChange2={onChange} />
                        <Input type="number"
                                id="mobile"
                                fname="mobile"
                                label="Mobile no." disabled={mode === 'login'} onChange2={onChange}/>
                        <Input type="text"
                            id="organization"
                            fname="organization"
                            label="College Name" disabled={mode === 'login'} onChange2={onChange} />
                        <Input 
                          type="text"
                          id="branch"
                          fname="branch" label="Branch" disabled={mode === 'login'} onChange2={onChange} />
                        <Input
                         type="number"
                         id="semester"
                         fname="semester" label="Semester" disabled={mode === 'login'} onChange2={onChange} />
                    
                        <Input type={InputType1} id="password"      
                            fname="password"
                            label="Password" disabled={mode === 'login'} onChange2={onChange} />
                            
                        <Input type={InputType2}
                         id="confirmpassword"
                         fname="confirmpassword" label="Confirm Password" disabled={mode === 'login'} onChange2={onChange} 
                         />
                         <span className="password-toogle-icon">{CIcon}</span>
                    </div>
            </div>
            {
                mode === 'login'?
                <>
                  <a style={{textDecoration:'none',color:'whitesmoke'}} className="link" onClick={handleOpen}>
                          Forgot your password?
                        </a>
                 <button className="button button--primary full-width" type="submit" onClick={signinn}>Log In</button>
                </>
            :
            <button className="button button--primary full-width" type="submit" onClick={signupp}>Sign up</button>
            }
        </form>
    </>
  )
}

export default LoginForm

// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//         <form onSubmit={this.props.onSubmit}>
//             <div className="form-block__input-wrapper">
//                 <div className="form-group form-group--login">
//                     <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
//                     <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
//                 </div>
//                 <div className="form-group form-group--signup">
//                     <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
//                     <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
//                     <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
//                 </div>
//             </div>
//             <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
//         </form>
//         )
//     }
// }

