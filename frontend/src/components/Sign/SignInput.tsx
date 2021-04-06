import React from "react";

interface ISignInput {
    type?: string;
    text: string;
    state: string;
    setState: React.Dispatch<any>;
}

const SignInput = ({ type, text, state, setState }: ISignInput) => {
    return (
        <div className="signinform__input">
            <input
                type={type ? type : "text"}
                className="signinform__input__tag"
                required
            />
            <span className="signinform__input__placeholder">{text}</span>
        </div>
    );
};

export default SignInput;
