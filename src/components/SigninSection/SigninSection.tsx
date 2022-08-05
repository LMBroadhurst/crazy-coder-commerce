import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase"


const SigninSection = () => {

  
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
                <form className='flex flex-col justify-center items-start mx-5'>
                  <input type="text" placeholder='Username' className="my-3 text-3xl text-center" />
                  <input type="text" placeholder='First Name' className="my-3 text-3xl text-center" />
                  <input type="text" placeholder='Username' className="my-3 text-3xl text-center" />
                  <input type="text" placeholder='First Name' className="my-3 text-3xl text-center" />
                </form>
                <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2 text-2xl">Register</button>
            </div>

          </div>

        </section>
    </>
  )
}

export default SigninSection;