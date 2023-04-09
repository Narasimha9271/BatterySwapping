import React from "react";

const About = () => {
    return (
        <div className="bg-slate-400 top-0">
            <div className="flex mt-7">
                <div>
                    <img
                        className="h-full  w-[60%] pl-10"
                        src="https://media.tenor.com/vME2lFg8vjkAAAAi/fully-charged-full-battery.gif"
                    ></img>
                </div>
                <div className=" text-5xl text-center mt-12  mr-10  ">
                    Why to charge battery? <br /> When you can SWAP
                </div>
                <div className="items-p-3">
                    <img
                        className="p-3 mt-5"
                        src="https://www.exicom.in/images/swap_station.png"
                    ></img>
                </div>
            </div>
            <div className=" flex border-r-16 ml-2 justify-center items-center">
                <div className="text-3xl p-5  text-center">
                    <h1 className="text-5xl p-4 ml-12">
                        {" "}
                        Why only battery swapping?
                    </h1>
                    <p className="text-xl font-sans m-4">
                        Battery Swapping is time saving,space efficient and cost
                        effective at the same time,each swappable battery is
                        actively used. In comparison to charging at a battery
                        station, which might take hours, the service is faster
                        and takes only a few minutes. Fast battery plug-in
                        charging can cause rapid battery degradation, resulting
                        in a reduction in battery life.
                    </p>
                </div>
                <div className="w-1/4 m-3 shadow-sm">
                    <img src="https://www.shutterstock.com/image-vector/battery-exchange-charger-icon-electric-260nw-1663046752.jpg"></img>
                </div>
            </div>
            <div className="p-4 mx-auto text-4xl text-center mt-8  w-fit">
                <p>3 Simple Steps</p>
            </div>
            <div className=" flex m-3">
                <div className="col-md-4 w-1/3 p-4 m-3 place-content-center">
                    <div
                        className="steps-box aos-init aos-animate "
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <p className="text-center text-lg m-1">
                            <b>1. LOCATE</b>
                        </p>

                        <img
                            className="pl-20 shadow-2xl"
                            src="https://www.batterypool.com/static/assets/img/step1.jpg"
                            alt=""
                        />

                        <p className="text-center text-xl p-3">
                            Find and reach the nearest Swapping Stations
                        </p>
                    </div>
                </div>
                <div className="col-md-4 w-1/3 p-4 m-3">
                    <div className=" ">
                        <p className="text-center text-lg m-1">
                            <b>2. SCAN</b>
                        </p>
                        <div className="shadow-xl">
                            <img
                                className=" ml-14 right-0 shadow-3xl hover:shadow-3xl h-45 w-80"
                                src="https://storage.googleapis.com/support-kms-prod/mQmcrC93Ryi2U4x5UdZNeyHQMybbyk71yCVm"
                                alt=""
                            />
                        </div>
                        <p className="text-center text-xl p-3">
                            Reasonable and Clean Payment
                        </p>
                    </div>
                </div>
                <div className="col-md-4 w-1/3 p-4 m-3">
                    <div className=" ">
                        <p className="text-center text-lg m-1">
                            <b>3. SWAP</b>
                        </p>
                        <div className="shadow-2xl">
                            <img
                                className=""
                                src="https://images.hindustantimes.com/auto/img/2022/02/01/600x338/Gogoro_EV_battrey_swapping_system_1642562549883_1643707964192.jpg"
                                alt=""
                            />
                        </div>
                        <p className="text-center text-xl  p-3">Swap It </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
