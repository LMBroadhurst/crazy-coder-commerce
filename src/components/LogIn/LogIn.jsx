import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../Utils/Firebase";
import ButtonA from "../Button/ButtonA";
import FormInput from "../FormInput/FormInput";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/User.context";

const defaultFormFields = {
    email: '',
    password: '',
  }

const LogIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const resetFormFields = () => setFormFields(defaultFormFields);

    const { setCurrentUser } = useContext(UserContext);
        

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields( {...formFields, [name]: value} );

        console.log(formFields);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

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
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };


  return (
    <>
        <div className='flex flex-col justify-center items-stretch my-auto bg-[#EDEDED] p-10 rounded-md'>
            <h2 className="text-3xl">Already have an account?</h2>

            <h2 className="text-xl">Sign in with email and password</h2>

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