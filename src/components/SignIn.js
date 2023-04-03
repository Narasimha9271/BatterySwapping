import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex justify-center">
            <form className="flex flex-col " onSubmit={signIn}>
                <h1 className="text-3xl   m-5 p-2">Log In to your account</h1>
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
                    Log In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
