import ButtonA from "../components/Button/ButtonA";
import FooterPrimary from "../components/Footer/Footer";
import FormInput from "../components/FormInput/FormInput";
import HeaderPrimary from "../components/Header/Header";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User.context";


const Account = () => {

    const [toggleEditDetails, setToggleEditDetails] = useState("hidden");

    const toggleEditDetailsMenu = (event) => {

        event.preventDefault();

        if (toggleEditDetails === "hidden") {
            return setToggleEditDetails("");
        }

        return setToggleEditDetails("hidden");
    }

    return (
        <>
            <HeaderPrimary />
                <section className="flex flex-row justify-evenly items-start py-20 bg-slate-300">

                    <section className="flex flex-col w-1/4 bg-slate-700 text-white px-10 py-5 rounded-lg">

                        <div className="text-2xl flex flex-col">
                            <h2 className="text-4xl self-stretch text-center pb-2 border-b-4">Your account</h2>

                            {/* <span className="pt-6 pb-2">Name: {currentUser.displayName}</span> */}
                            <span className="py-2">Username: </span>
                            {/* <span className="py-2 pb-4">email: {currentUser.email} </span> */}
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

                    <section className="flex flex-col w-1/3 bg-slate-700 text-white px-10 py-5 rounded-lg">
                        <h2 className="text-4xl self-stretch text-center pb-2 border-b-4">Previous Orders</h2>

                        <div>

                        </div>

                    </section>
                    
                </section>
        
            <FooterPrimary />
        </>
    )

}

export default Account;