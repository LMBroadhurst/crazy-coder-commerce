import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../Utils/Firebase";
import ButtonA from "../Button/ButtonA";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";


const defaultFormFields = {
    email: '',
    password: '',
  }

const LogIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const resetFormFields = () => setFormFields(defaultFormFields);
        

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields( {...formFields, [name]: value} );
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {

            switch(error.code) {
                case "auth/wrong-password":
                    alert("Incorrect Password");
                    break;     
                
                case "auth/user-not-found":
                    alert("Email not valid");
                    break;
                
                default: console.log(error);
            }
        }
    };
    

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };


  return (
    <>
        <div className='flex flex-col justify-center items-stretch bg-white p-5 m-5 rounded-md'>

            <h2 className="text-3xl">Already have an account?</h2>

            <h2 className="text-xl py-2">Sign in with email and password</h2>

            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>

                <FormInput
                    placeholder="Email"
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

                <ButtonA
                    type='submit'
                    buttonStyle="google"
                    text="Sign in"
                />
                
            </form>

            <ButtonA
                type="button"
                buttonStyle="google"
                text="Sign in with Google"
                onClick={signInWithGoogle}
            />
        </div>
    </>
  )
}

export default LogIn;