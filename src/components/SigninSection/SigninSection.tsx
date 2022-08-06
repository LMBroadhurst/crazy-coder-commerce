import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailPassword } from "../../Utils/Firebase";
import { useState } from "react";

import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";


// interface IState {
//   defaultFormFields: {
//     displayName: string,
//     email: string,
//     pasword: string,
//     confirmPassword: string
//   }
// }


const SigninSection = () => {


  return (
    <>
        <section className='flex flex-col h-screen w-8/12 mx-auto'>

          <div className="flex flex-col justify-around items-start my-auto  lg:flex-row">

            <SignIn />

            <Register />

          </div>

        </section>
    </>
  )
}


export default SigninSection;