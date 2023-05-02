import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "../firebase";

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className="bg-gradient-to-r from-purple-900 to-purple-300 h-full min-h-screen w-full flex justify-center items-center background: linear-gradient(to right, #9900ff, #cc80ff)">
            <div className=" min-w-[480px] h-fit w-fit bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.2)] flex flex-col gap-[30px] p-[30px] rounded-[10px]">
                <h1 className="text-4xl font-bold">Sign up</h1>

                <InputControl
                    label="Name"
                    placeholder="Enter your name"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            name: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Email"
                    placeholder="Enter email address"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            email: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Password"
                    placeholder="Enter password"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            pass: event.target.value,
                        }))
                    }
                />

                <div className="flex flex-col gap-5">
                    <b className="font-[bold] text-sm text-[#ff3300] text-center">
                        {errorMsg}
                    </b>
                    <button
                        className="bg-[#9900ff] text-white font-[bold] text-base w-full transition-[100ms] cursor-pointer px-4 py-2.5 rounded-[5px] border-[none] disabled:bg-[gray] hover:bg-[#aa2aff] outline: none"
                        onClick={handleSubmission}
                        disabled={submitButtonDisabled}
                    >
                        Signup
                    </button>
                    <p className=" font-bold text-black">
                        Already have an account ?{" "}
                        <span>
                            <Link
                                className="font-[bold] text-[#9900ff] tracking-[1px] text-base no-underline"
                                to="/login"
                            >
                                Login
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
