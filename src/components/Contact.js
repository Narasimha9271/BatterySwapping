import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (recaptchaValue) {
            // Process the form data and recaptcha value
            console.log("Form Data: ", formData);
            console.log("reCAPTCHA Value: ", recaptchaValue);
            // Reset the form data and recaptcha value
            setFormData({ name: "", email: "", message: "" });
            setRecaptchaValue(null);
        } else {
            alert("Please complete the reCAPTCHA challenge!");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md max-w-md mx-auto p-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Contact Us
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label
                            htmlFor="name"
                            className="text-gray-600 font-semibold mb-1"
                        >
                            Your Name
                        </label>
                        <input
                            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-purple-500"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-gray-600 font-semibold mb-1"
                        >
                            Your Email
                        </label>
                        <input
                            className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-purple-500"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="text-gray-600 font-semibold mb-1"
                        >
                            Your Message
                        </label>
                        <textarea
                            className="border border-gray-300 px-3 py-2 rounded-md h-24 resize-none focus:outline-none focus:border-purple-500"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                        onChange={handleRecaptchaChange}
                    />
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
