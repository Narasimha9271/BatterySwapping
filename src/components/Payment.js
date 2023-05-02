import React, { useState } from "react";
import CreditCard from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [name, setName] = useState("");
    const [billingAddress, setBillingAddress] = useState("");

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryChange = (e) => {
        setExpiry(e.target.value);
    };

    const handleCvcChange = (e) => {
        setCvc(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleBillingAddressChange = (e) => {
        setBillingAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: submit payment data
    };

    return (
        <div className="max-w-md mx-auto bg-gradient-to-r from-purple-900 to-purple-300">
            <div className="mt-8 rounded-lg shadow-md">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-medium text-gray-800 mb-4">
                        Payment Details
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="cardNumber"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Card Number
                            </label>
                            <input
                                type="tel"
                                id="cardNumber"
                                className="form-input py-2 px-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                maxLength={16}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="expiry"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Expiry (MM/YY)
                            </label>
                            <input
                                type="tel"
                                id="expiry"
                                className="form-input py-2 px-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                value={expiry}
                                onChange={handleExpiryChange}
                                maxLength={4}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="cvv"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                CVV
                            </label>
                            <input
                                type="tel"
                                id="cvc"
                                className="form-input py-2 px-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                value={cvc}
                                onChange={handleCvcChange}
                                maxLength={3}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-input py-2 px-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="billingAddress"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Billing Address
                            </label>
                            <textarea
                                id="billingAddress"
                                className="form-textarea py-2 px-3 w-full border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                rows={3}
                                value={billingAddress}
                                onChange={handleBillingAddressChange}
                            />
                        </div>
                        <div className="mb-4">
                            <CreditCard
                                number={cardNumber}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                preview={true}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
