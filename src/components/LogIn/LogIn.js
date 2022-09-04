import { signInWithGooglePopup,  signInAuthUserWithEmailAndPassword, signInWithGitHubPopup } from "../../Utils/Firebase";
import ButtonA from "../Button/ButtonA";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";


const defaultFormFields = {
    email: '',
    password: '',
  }

const LogIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const resetFormFields = () => setFormFields(defaultFormFields);
    const navigate = useNavigate();
    const [modalDisplay, setModalDisplay] = useState("hidden");

    const toggleModalDisplay = () => {
        if (modalDisplay === "hidden") {
            return setModalDisplay("");
        }
        
        return setModalDisplay("hidden");
    }
    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields( {...formFields, [name]: value} );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            navigate("/account");
        } catch (error) {

            switch(error.code) {
                case "auth/wrong-password":
                    toggleModalDisplay()
                    break;     
                
                case "auth/user-not-found":
                    alert("Email not valid");
                    toggleModalDisplay()
                    break;
                
                default: console.log(error);
            }
        }
    };
    

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        navigate("/account")
    };

    const signInWithGithub = async () => {
        await signInWithGitHubPopup();
        navigate("/account")
    }


    const togglePasswordShowing = (event) => {

        const checkbox = document.getElementById("login_checkbox");
        const password = document.getElementById("login-password");
    
        if ( checkbox.checked ) {
          password.type = "text";
        } else {
          password.type = "password";
        }
      }


  return (
    <>
        <div className='flex flex-col justify-center items-stretch text-white p-5 m-5 rounded-md'>

            <h2 className="text-3xl pb-2">Already have an account?</h2>

            <h2 className="text-xl py-2 pb-4">Sign in with email and password</h2>

            <form className='flex flex-col justify-center text-black' onSubmit={handleSubmit}>

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
                    id="login-password"
                />

                <div className="flex flex-row flex-start items-center self-center py-2 text-white">
                    <input type={"checkbox"} id="login_checkbox" onChange={togglePasswordShowing} />
                    <span className="pl-4">Show password</span>
                </div>

               
                <ButtonA
                    type='submit'
                    buttonStyle="glowGreen"
                    text="Sign in"
                />
                
                
            </form>

            <ButtonA
                type="button"
                buttonStyle="google"
                text="Sign in with Google"
                onClick={signInWithGoogle}
            />

            <ButtonA
                type="button"
                buttonStyle="default"
                text={`Sign in with GitHub`}
                onClick={signInWithGithub}
            />
        </div>

        <div className={`${modalDisplay}`}>
            <AuthModal buttonFunctionality={toggleModalDisplay}/>
        </div>
    </>
  )
}

export default LogIn;