import React from "react";

const Contact = () => {
    return (
        <div className="bg-gradient-to-r from-green-800 to-green-300 ">
            <section className="">
                <div class="p-6 border-4 ">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className=" mb-3 text-6xl tracking-tight font-sans text-center text-gray-900 dark:text-white ">
                            Contact Us
                        </h2>

                        <form action="#" className="space-y-8">
                            <div>
                                <label
                                    for="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                                >
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow-sm  border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="enter name"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Your email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    for="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                                <div className="form-group form-check text-center mb-6">
                                    <button
                                        id="button"
                                        type="submit"
                                        className="bg-blue-500 shadow-xl hover:bg-green-300 text-white font-bold rounded-full p-3 w-44  mt-20"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
