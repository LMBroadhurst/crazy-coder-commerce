import ButtonA from "../components/Button/ButtonA";
import FooterPrimary from "../components/FooterPrimary/FooterPrimary";
import FormInput from "../components/FormInput/FormInput";
import HeaderPrimary from "../components/HeaderPrimary/HeaderPrimary";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User.context";


const Account = () => {

    const [toggleEditDetails, setToggleEditDetails] = useState("hidden");
    const { currentUser } = useContext(UserContext);

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
                <section className="flex flex-row justify-around">

                    <section className="flex flex-col w-1/3">

                        <div className="text-2xl flex flex-col">
                            <h2 className="text-4xl">Your account</h2>

                            <span>Name: {currentUser.displayName}</span>
                            <span>Username: </span>
                            <span>email: {currentUser.email} </span>
                        </div>

                        <ButtonA text={"Edit details"} type='button' buttonStyle={'default'} onClick={toggleEditDetailsMenu}/>

                        <section className={`${toggleEditDetails} flex flex-col items-stretch`}>
                            <FormInput placeholder={"Name"} />
                            <FormInput placeholder={"Email"} />
                            <FormInput placeholder={"Username"} />
                        </section>

                        <ButtonA text={"Change password?"} type='button' buttonStyle={'default'} />
                    </section>

                    <section className="flex flex-col w-1/3">
                        <h3>Your last order</h3>

                        <div>

                        </div>

                    </section>
                    
                </section>
        
            <FooterPrimary />
        </>
    )

}

export default Account;