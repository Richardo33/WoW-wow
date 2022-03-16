import React from "react";
import Logo from "../asset/Icon.png";
import "./syling/landing.css";
import BtnSignUp from "../component/buttton/modalSignUp";
import BtnSignIn from "../component/buttton/modalSignIn";

// import { SubscriContext } from "../component/hook/subscribeContext";

function LandingPage() {
  // const [state, dispacth] = useContext(SubscriContext);

  // dispacth({
  //   type: "SUBCRIBE",
  //   payload: true,
  // });

  // console.log(state);

  return (
    <div className="BackContent">
      <div className="content">
        {" "}
        <div>
          <img src={Logo} alt="" />
          <p>
            Sign-up now and subscribe to enjoy all the cool and latest books -
            The best book rental service provider in Indonesia
          </p>
        </div>
        <div className="d-flex">
          <BtnSignUp />

          <BtnSignIn />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
