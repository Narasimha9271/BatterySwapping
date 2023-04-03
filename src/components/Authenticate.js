import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";

const Authenticate = () => {
    return (
        <div>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
};

export default Authenticate;
