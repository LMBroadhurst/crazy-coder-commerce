import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailPassword } from "../../Utils/Firebase";
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

  const handleChange = (event: any) => {
    const {name, value} = event.target;

    setFormFields( {...formFields, [name]: value} );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if ( defaultFormFields.password !== defaultFormFields.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const {user}: any = await createAuthUserWithEmailPassword(email, password);
      
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
      <div className='flex flex-col justify-center items-center my-auto bg-[#EDEDED] p-15 rounded-md'>
          <h2 className="text-5xl p-4">Register</h2>
          <form className='flex flex-col justify-center items-start mx-5'  onSubmit={handleSubmit}>

            <FormInput 
              placeholder="Username"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />

            <input type="email" placeholder='Email Address' required onChange={handleChange} name="email" value={email}
                className="my-3 text-3xl text-center" />

            <input type="password" placeholder='Password' required onChange={handleChange} name="password" value={password}
                className="my-3 text-3xl text-center" />
            <input type="password" placeholder='Confirm Password' className="my-3 text-3xl text-center" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

            <button type='submit' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl">Register</button>
          </form>
          
      </div>
    </>
  )
}

export default Register;