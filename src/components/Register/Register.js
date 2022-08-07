import { useState } from "react";
import { createUserDocumentFromAuth, createAuthUserWithEmailPassword } from "../../Utils/Firebase";
import ButtonA from "../Button/ButtonA";
import FormInput from "../FormInput/FormInput";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Register = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields( {...formFields, [name]: value} );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ( password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailPassword(email, password);
      
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (e) {
      console.log(e);
    }

  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  return (
    <>
      <div className='flex flex-col justify-center items-stretch bg-white rounded-md m-5 p-5'>

        <h2 className="text-3xl">Don't have an account?</h2>

        <span className="text-xl py-2">Register with Email and Password</span>

        <form className='flex flex-col justify-center'  onSubmit={handleSubmit}>

          <FormInput 
            placeholder="Username"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

          <FormInput
            placeholder="Email Address"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            placeholder="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <FormInput
            placeholder="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />

          <ButtonA 
            type="submit"
            buttonStyle="google"
            text="Sign Up"
          />
          
        </form>
          
      </div>
    </>
  )
}

export default Register;