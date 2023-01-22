import React from 'react'
import LoginForm from './LoginForm';
import '../Login.css'
import Passwordtoggle from './misc/Passwordtoggle';

const Login = ({mode,toggleMode,signupp,signinn,onChange,onChange1,resetpassword,handleOpen,handleClose,open,
  resetemail,setresetemail}) => {
    // console.log(mode);
    
  return (
    <>
     <div class ="bodylogin">
                <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
                <section className={`form-block form-block--is-${mode}`}>
                    <header className="form-block__header">
                        <h3>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h3>
                        <div className="form-block__toggle-block">
                            <br></br>
                            <span >{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here →</span>
                            {/* <div style={{marginTop:'10px'}}> */}
                            <input id="form-toggler" type="checkbox" onClick={toggleMode} />
                            <label htmlFor="form-toggler"></label>
                            {/* </div> */}
                            
                        </div>
                    </header>
                    <LoginForm mode={mode} signupp={signupp} signinn={signinn}   onChange={onChange} onChange1={onChange1} Passwordtoggle={Passwordtoggle} resetpassword={resetpassword} handleOpen={handleOpen} handleClose={handleClose}
                    open={open}
                    resetemail={resetemail}
                     setresetemail={setresetemail}/>
                </section>
            </div>
    </>
  )
}

export default Login


// const mode = 'login';

// class LoginComponent extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         mode: this.props.mode
//     //     }
//     // }
//     // toggleMode() {
//     //     var newMode = this.state.mode === 'login' ? 'signup' : 'login';
//     //     this.setState({ mode: newMode});
//     // }
//     render() {
//         return (
//             <div>
//                 <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
//                 <section className={`form-block form-block--is-${this.state.mode}`}>
//                     <header className="form-block__header">
//                         <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
//                         <div className="form-block__toggle-block">
//                             <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
//                             <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
//                             <label htmlFor="form-toggler"></label>
//                         </div>
//                     </header>
//                     <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
//                 </section>
//             </div>
//         )
//     }
// }
