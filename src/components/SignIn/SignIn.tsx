import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailPassword } from "../../Utils/Firebase";

const SignIn = () => {

    const logGoogleUser = async () => {

        const {user} = await signInWithGooglePopup();
        console.log(user);
    
        const userDocRef = await createUserDocumentFromAuth(user);
    
      };

  return (
    <>
        <div className='flex flex-col justify-center items-center my-auto bg-[#EDEDED] p-15 rounded-md'>
            <h2 className="text-5xl p-4">Sign In</h2>
            <form className='flex flex-col justify-center items-start mx-5'>
                <input type="text" placeholder='Username' className="my-3 text-3xl text-center" />
                <input type="text" placeholder='Password' className="my-3 text-3xl text-center" />
            </form>
            <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl">Sign In</button>
            <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl" onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    </>
  )
}

export default SignIn