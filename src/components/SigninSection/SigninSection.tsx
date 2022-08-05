import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailPassword } from "../../Utils/Firebase";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

interface IState {
  defaultFormFields: {
    displayName: string,
    email: string,
    pasword: string,
    confirmPassword: string
  }
}


const SigninSection = () => {

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

  const logGoogleUser = async () => {

    const {user} = await signInWithGooglePopup();
    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);

  };


  return (
    <>
        <section className='flex flex-col h-screen w-8/12 mx-auto'>

          <div className="flex flex-col justify-around items-start my-auto  lg:flex-row">

            <div className='flex flex-col justify-center items-center my-auto bg-[#EDEDED] p-15 rounded-md'>
                <h2 className="text-5xl p-4">Sign In</h2>
                <form className='flex flex-col justify-center items-start mx-5'>
                  <input type="text" placeholder='Username' className="my-3 text-3xl text-center" />
                  <input type="text" placeholder='Password' className="my-3 text-3xl text-center" />
                </form>
                <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl">Sign In</button>
                <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl" onClick={logGoogleUser}>Sign in with Google</button>
            </div>

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

          </div>

        </section>
    </>
  )
}

export default SigninSection;