import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function PaymentPage() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");
    const [focus, setFocus] = useState("");

    return (
        <div className="bg-gradient-to-r from-gray-700 to-gray-300 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto border border-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold leading-tight text-gray-700">
                        Payment Details
                    </h1>
                </div>
                <div className="mb-4">
                    <Cards
                        number={cardNumber}
                        name={cardName}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                    />
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="cardNumber"
                        >
                            Card Number
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="cardNumber"
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            onFocus={() => setFocus("number")}
                            onBlur={() => setFocus("")}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="cardName"
                    >
                        Cardholder Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardName"
                        type="text"
                        placeholder="Enter your name"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        onFocus={() => setFocus("name")}
                        onBlur={() => setFocus("")}
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <div className="w-2/5">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="expiry"
                        >
                            Expiry
                        </label>
                        <input
                            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="expiry"
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            onFocus={() => setFocus("expiry")}
                            onBlur={() => setFocus("")}
                        />
                    </div>
                    <div className="w-2/5">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="cvc"
                        >
                            CVC
                        </label>
                        <input
                            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvc"
                            type="text"
                            placeholder="XXX"
                            value={cvc}
                            onChange={(e) => setCVC(e.target.value)}
                            onFocus={() => setFocus("cvc")}
                            onBlur={() => setFocus("")}
                        />
                    </div>
                    <div className="w-1/5">
                        <Cards
                            cvc={cvc}
                            focused={focus}
                            name={cardName}
                            expiry={expiry}
                            number={cardNumber}
                            preview={true}
                            issuer="visa"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
