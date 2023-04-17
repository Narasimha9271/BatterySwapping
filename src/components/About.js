import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex mt-7  pb-3 ">
        <div>
          <img
            className="h-full  w-[60%] pl-10"
            src="https://media.tenor.com/vME2lFg8vjkAAAAi/fully-charged-full-battery.gif"
          ></img>
        </div>
        <div className=" text-5xl text-center mt-12  mr-4 italic font-[Sans-serif] text-[#161610ee]   ">
          Why to charge battery? <br /><br /> When you can <b>SWAP</b>...!
        </div>
        <div className="items-p-3">
          <img className="p-3 mt-5" src="https://www.exicom.in/images/swap_station.png"></img>
        </div>
      </div>
      <div className=" flex border-r-16 ml-2 justify-center my-20 items-center">
        <div className="text-3xl p-5  text-center w-[60%]">
          <h1 className="text-6xl p-4 ml-12 mb-10 pb-5 "> Why only battery swapping?</h1>
          <div  className="ml-40">
          <ul className="list-[disc] text-left">
          <li className="p-3">Time Saving</li>
          <li className="p-3">Space Efficient</li>
          <li className="p-3">Cost Effective</li>
          <li className="p-3">Fast Service</li>
          <li className="p-3">Prevents from Battery degradation</li>
          </ul></div>
          
        </div>
        <div className="w-1/4 m-3 shadow-sm">
          <img src="https://www.shutterstock.com/image-vector/battery-exchange-charger-icon-electric-260nw-1663046752.jpg"></img>
        </div>
      </div>
      <div className="p-5 mx-auto text-4xl text-center mt-8  w-fit bg-[#ff4d4dbe] rounded-[100px]">
        <p>3 Simple Steps</p>
      </div>
      <div className=" flex m-3">
        <div className="col-md-4 w-1/3 p-4 m-3 place-content-center">
          <div
            className="steps-box aos-init aos-animate "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-center text-2xl m-4 font-[Sans]">
              <b>1. LOCATE</b>
            </p>
              <img className=" ml-16  pl-20 shadow-2xl"
                src="https://www.batterypool.com/static/assets/img/step1.jpg"
                alt=""
              />
            <p className="text-center text-xl p-7 font-[Sans-serif] italic">
              Find and reach the nearest Swapping Stations
            </p>
          </div>
        </div>
        <div className="col-md-4 w-1/3 p-4 m-3">
          <div
            className=" "
            
          >
            <p className="text-center text-2xl m-4 font-[Sans]">
              <b>2. SCAN</b>
            </p>
            <div className="shadow-xl">
              <img className=" ml-14 right-0 shadow-3xl hover:shadow-3xl h-45 w-80"
                src="https://storage.googleapis.com/support-kms-prod/mQmcrC93Ryi2U4x5UdZNeyHQMybbyk71yCVm"
                alt=""
              />
            </div>
            <p className="text-center text-xl p-7 font-[Sans-serif] italic ">
              Reasonable and Clean Payment
            </p>
          </div>
        </div>
        <div className="col-md-4 w-1/3 p-4 m-3">
          <div
            className=" "
          >
            <p className="text-center text-2xl m-4 font-[Sans]">
              <b>3. SWAP</b>
            </p>
            <div className="shadow-2xl" >
              <img className=""
                src="https://images.hindustantimes.com/auto/img/2022/02/01/600x338/Gogoro_EV_battrey_swapping_system_1642562549883_1643707964192.jpg"
                alt=""
              />
            </div>
            <p className="text-center text-xl p-7 font-[Sans-serif] italic">Swap It </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
