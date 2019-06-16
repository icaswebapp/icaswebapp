import React from 'react';
import {NavLink , withRouter} from 'react-router-dom';
import { SIGN_UP, HOME } from '../../Constants/constants';
import FormValidation from '../CustomFormLibrary/FormValidation';
import validateCredentials from '../CustomFormLibrary/validateCredentials';
import firebase from '../../Backend/Firebase';

const ACTION_TYPE='SIGN_UP';

const INITIAL_STATE = {
  username : '',
  email : '',
  password : '',
  password2 : '',
  errors : {},
  Strength : {},
}

const SignUp = props => {

    const {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      Strength
    } = FormValidation(INITIAL_STATE , validateCredentials , ACTION_TYPE , authenticate);


    async function authenticate() {
      const {email , username , password} = values;
      try {
        await firebase.register(username, email, password);
        await console.log("SUCCESSFUL.");
        await props.history.replace(HOME);
      } catch(error) {
        alert(error.message)
      }
  }



    return (
        <main className="pa4 black-80">
        <form className="measure center" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw9 ph0 mh0 underline">REGISTER</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <p className="f6 red fw5">{errors.email}</p>}
            </div>
            <div className="measure">
                <label htmlFor="name" className="f6 b db mb2 mt2">Name <span className="normal black-60">(PROFILE NAME)</span></label>
                <input id="username" name="username" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={handleChange} onBlur={handleBlur}/> 
                <small id="name-desc" className="f6 black-60 db mb2">Your display name which others see.</small>
                {errors.username && <p className="f6 red fw5">{errors.username}</p>}

            </div>
            
            <div className="measure">
                <label htmlFor="password" className="f6 b db mb2 mt2">Password</label>
                <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" id="password" aria-describedby="password-desc" name="password" onChange={handleChange} onBlur={handleBlur}/>
                <small id="password-desc" className="f6 lh-copy black-60 db mb2">
                TIP : Must be at least 6 characters long. For the password to be strong, include uppercase,digits and special characters.
                </small>
                {errors.password && <p className="f6 red fw5">{errors.password}</p>}
                {<p className="f6 red fw9 bw1" style={{color : Strength.color}}>STRENGTH:{Strength.strength}</p>}

            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password2">Re-Enter Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password2" id="password2" onChange={handleChange} onBlur={handleBlur}/>
              {errors.password2 && <p className="f6 red fw5">{errors.password2}</p>}

            </div>
            <div className="mt3">
                <button className="gray pv2 ph3 bg-transparent ba b--black hover-bg-black hover-white pointer grow-large">
                 REGISTER
                </button>
            </div>
            <NavLink to={SIGN_UP} className="f6 link dim black db underline-hover pointer mt3">Click here to create an account.</NavLink>
          </fieldset>
        </form>
        </main>
    )
}

export default withRouter(SignUp);
