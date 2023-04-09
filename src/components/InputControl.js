import React from "react";

function InputControl(props) {
    return (
        <div className="flex flex-col gap-2">
            {props.label && <label>{props.label}</label>}
            <input
                className="border text-black px-[15px] py-2.5 rounded-[5px] border-solid border-[#dddddd] hover:border-[#ccc] focus:border-[#9900ff] outline: none"
                type="text"
                {...props}
            />
        </div>
    );
}

export default InputControl;
