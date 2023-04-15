import React from "react";
import swapLogo from "../assets/img/swapping.gif";

const Body = () => {
    return (
        <div>
            <h1 className="text-6xl mt-5 text-center text-green-400 ">
                Swapping made Fast
            </h1>
            <h1 className="text-3xl mt-7 mb-40 text-center text-green-400">
                Operate your electric vehicle fleet with zero downtime for
                charging.
            </h1>
            <img
                className="w-full align-middle "
                src={swapLogo}
                alt="swap-logo"
            />

            <div className=" gap-x-[2.116vw] flex flex-wrap justify-center gap-y-[2.116vw] m-20">
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/3.32ebcf2a1dac9ae5fbf23e97713895b6.svg"
                            alt="battery-logo"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        Smart and Interoperable Li-ion batteries
                    </div>
                </div>
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/2.fa5d0c066eeaa94cf43d43395756f82e.svg"
                            alt="logo"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        Wide network of battery swapping stations
                    </div>
                </div>
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/1.380a394dc4e9329274d4093669ec085e.svg"
                            alt="log"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        2 minute quick battery swapping
                    </div>
                </div>
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/4.55aabd1d51107dccabc59086e362f00b.svg"
                            alt="logo-pic"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        Compatible with both electric three and two wheelers
                    </div>
                </div>
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/5.e5ff2e608f1e512e0f55b7bfa8ecedcb.svg"
                            alt="pic"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        Driver and Partner Mobile Apps
                    </div>
                </div>
                <div className=" items-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex justify-center text-center p-4  rounded-2xl  bg-white ">
                    <div>
                        <img
                            className=" h-[6vw] w-[6vw] float-left align-middle border-none"
                            src="https://www.batterysmart.in/static/media/6.849254eb327b7bc63f7c63fcc7cef712.svg"
                            alt="log-pic"
                        />
                    </div>
                    <div className="text-[1.2vw] text-left w-[18vw] ml-[5px] px-2.5 py-0">
                        Supports new & retrofit vehicle models
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
