import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import { auth } from "../firebase";

const LoginScreen = () => {

  const emailRef = useRef(null);
  const password = useRef(null);

  const [signin, setsignin] = useState(false);

  const register = (event) =>{
      event.preventDefault() //to prevent refreswh from button   
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        password.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
        });
  };

  const signIn = (event) => {
      event.preventDefault()
      auth.signInWithEmailAndPassword(
        emailRef.current.value,
        password.current.value
      ).then((authUser)=>{
        console.log(authUser);
      }).catch((error)=>{
        alert(error.message)
      })

  };

  return (
    <div className="login">

      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() =>setsignin(true)}
          className={signin ? "show login_btn " : "login_btn"}>
          Sign In
        </button>
        <div className="login_gradient" />
      </div>

      <div className="login_body">
        {
        signin ? 
        (
          <div className="signup">
            <form className="signup_form">
              <h1>Sign In</h1>
              <input
              ref={emailRef}
                type="email"
                className="signup_input"
                placeholder="Enter Email Address"
              />
              <input
              ref={password}
                type="password"
                className="signup_input"
                placeholder="Enter Password"
              />
              <button
              onClick={signIn}
               type="submit"
                className="signup_submit">
                Sign In
              </button>
              <h4>
                <span className="gray">New to Netflix? </span>
                <span className="link" onClick={register}>Sign Up Now</span></h4>
            </form>

          </div>
        ) :
        (
          <>
            <h1>Unlimited films,TV programmes and more. </h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to Watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Enter email address" />
                <button
                  onClick={() => setsignin(true)}
                  className="login_getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
