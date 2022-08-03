
const SigninSection = () => {
  return (
    <>
        <section className='flex flex-col h-screen'>

          <div className="flex flex-row justify-around items-start my-auto">

            <div className='flex flex-col justify-center items-center my-auto bg-vLightBlue px-10 py-16'>
                <h2 className="text-4xl p-4">Sign In</h2>
                <form className='flex flex-col justify-center items-start'>
                  <input type="text" placeholder='Username' className="my-3" />
                  <input type="text" placeholder='Password' className="my-3" />
                </form>
                <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2">Sign In</button>
                <button type='button' className="bg-navy text-white px-4 py-2 rounded-lg my-2">Sign in with Google</button>
            </div>

            <div className='flex flex-col justify-center items-center my-auto bg-vLightBlue px-10 py-16'>
                <h2 className="text-4xl p-4">Register</h2>
                <form className='flex flex-col justify-center items-start'>
                  <input type="text" placeholder='Username' className="my-3" />
                  <input type="text" placeholder='First Name' className="my-3" />
                  <input type="text" placeholder='Username' className="my-3" />
                  <input type="text" placeholder='First Name' className="my-3" />
                </form>
                <button type='button'>Register</button>
            </div>

          </div>

        </section>
    </>
  )
}

export default SigninSection;