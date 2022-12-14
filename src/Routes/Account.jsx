import ButtonA from "../components/Button/ButtonA";
import FooterPrimary from "../components/Footer/Footer";
import FormInput from "../components/FormInput/FormInput";
import HeaderPrimary from "../components/Header/Header";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User.context";
import BlankUserImage from "../Assets/blank-profile-picture-g2b073d38f_1280.png";


const Account = () => {

    const [toggleEditDetails, setToggleEditDetails] = useState("hidden");
    const { currentUser, orders } = useContext(UserContext)
    const { email, displayName, photoUrl } = currentUser;

    const toggleEditDetailsMenu = (event) => {

        event.preventDefault();

        if (toggleEditDetails === "hidden") {
            return setToggleEditDetails("");
        }

        return setToggleEditDetails("hidden");
    }

    console.log(currentUser)

    return (
        <>
            <HeaderPrimary />

            <section className="flex flex-col justify-evenly items-start py-20 bg-slate-700 w-full md:flex-row lg:mx-auto lg:w-5/6 xl:w-2/3">

                <section className="flex flex-col text-white px-10 py-5 rounded-lg w-full sm:mx-auto sm:w-5/6 md:w-1/2">

                    <div className="text-2xl flex flex-col">
                        <h2 className="text-4xl self-stretch text-center pb-2 border-b-4">Your account</h2>

                        <div className="w-1/3 mx-auto mt-8 mb-6">
                            <img src={BlankUserImage} alt={"User"} className="rounded-sm"/>
                        </div>

                        <span className="py-2 self-center text-center">Username: {displayName}</span>
                        <span className="py-2 pb-4 self-center text-center">Email: {email} </span>
                    </div>

                    <ButtonA text={"Edit details"} type='button' buttonStyle={'default'} onClick={toggleEditDetailsMenu}/>

                    <section className={`${toggleEditDetails} flex flex-col items-stretch`}>
                        <FormInput placeholder={"Name"} />
                        <FormInput placeholder={"Email"} />
                        <FormInput placeholder={"Username"} />
                        <ButtonA text={"Confirm details change"} type="button" buttonStyle={"glowGreen"} />
                    </section>

                    <ButtonA text={"Change password?"} type='button' buttonStyle={'default'} />
                </section>

                <section className="flex flex-col items-stretch text-white px-10 py-5 rounded-lg w-full sm:mx-auto sm:w-5/6 md:w-1/2">
                    <h2 className="text-4xl text-center pb-2 border-b-4">Previous Orders</h2>

                    <div className="flex flex-col">
                        <p className="self-center my-10 text-2xl">You have no previous orders.</p>
                    </div>

                </section>
                
            </section>
        
            <FooterPrimary />
        </>
    )

}

export default Account;