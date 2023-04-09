import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";

const Authenticate = () => {
    return (
        <div className="bg-slate-200">
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
};

export default Authenticate;
