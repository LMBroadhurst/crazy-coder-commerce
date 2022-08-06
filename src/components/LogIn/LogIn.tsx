import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase";
import FormInput from "../FormInput/FormInput";

const LogIn = () => {

    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
        console.log(user);
    
        const userDocRef = await createUserDocumentFromAuth(user);
    
      };

  return (
    <>
        <div className='flex flex-col justify-center items-stretch my-auto bg-[#EDEDED] p-10 rounded-md'>
            <h2 className="text-5xl">Sign In</h2>


            <form className='flex flex-col justify-center'>

                <FormInput
                    placeholder="Username"
                    type="text"
                />

                <FormInput
                    placeholder="Password"
                    type="text"
                />
                
            </form>


            <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl">Sign In</button>
            <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl" onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    </>
  )
}

export default LogIn;