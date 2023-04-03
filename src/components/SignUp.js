import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex justify-center">
            <form className="flex flex-col " onSubmit={signUp}>
                <h1 className="text-3xl  m-5 p-2">Create an account</h1>
                <input
                    className="border  border-black m-5 p-2 w-80"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border  border-black m-5 p-2 w-80"
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-green-400 w-20 m-5 p-2  rounded-lg"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
