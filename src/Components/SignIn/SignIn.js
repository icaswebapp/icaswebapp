import React from 'react'
import {NavLink , withRouter} from 'react-router-dom';
import { SIGN_UP ,HOME} from '../../Constants/constants';
import FormValidation from '../CustomFormLibrary/FormValidation';
import validateCredentials from '../CustomFormLibrary/validateCredentials';
import firebase from '../../Backend/Firebase';

const ACTION_TYPE='SIGN_IN';

const INITIAL_STATE = {
  email : '',
  password : '',
  errors : {}
}


 const SignIn = props => {

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = FormValidation(INITIAL_STATE , validateCredentials , ACTION_TYPE , authenticate);


  async function authenticate() {
    const {email , password} = values;
    try {
      await firebase.login( email, password);
      await console.log("LOGIN SUCCESSFUL.");
      await props.history.replace(HOME);
    } catch(error) {
      console.log(error.message);
      alert(error.message);
    }
  }

    

    return (
        <main className="pa4 black-80">
        <form className="measure center" onSubmit={handleSubmit}>
          <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw9 ph0 mh0 underline">LOGIN</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur}/>
              {errors.email && <p className="f6 red fw5">{errors.email}</p>}

            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={handleChange} onBlur={handleBlur}/>
              {errors.password && <p className="f6 red fw5">{errors.password}</p>}

            </div>
            <div className="mt3">
                <button className="gray pv2 ph3 bg-transparent ba b--black hover-bg-black hover-white pointer grow-large" type="submit">
                 LOGIN
                </button>
            </div>
            <NavLink to={SIGN_UP} className="f6 link dim black db underline-hover pointer mt3">Click here to create an account.</NavLink>
        
            
            </fieldset>
        </form>
      </main>
    )
}

export default withRouter(SignIn);
