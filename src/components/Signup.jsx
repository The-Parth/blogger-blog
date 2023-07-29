import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./containers/Button";
import hostFunc from "../host";

const host = hostFunc();

const Signup = () => {
    const navigate = useNavigate();
    const [newAuth, setnewAuth] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewAuth((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            };
        });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${host}/api/auth/createUser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newAuth.name,
                    email: newAuth.email,
                    password: newAuth.password,
                }),
            }
        );
        const Data = await response.json();
        if (Data.success) {
            localStorage.setItem("token", Data.token);
            navigate("/");
            window.location.reload(false);
        } else {
            alert(Data.Error);
        }
    };

    return (
        <div className="flex justify-center items-start h-screen ">
            <div className="bg-[#343432] p-4 rounded-lg shadow-lg w-auto mt-8 mx-10">
                <form>
                    <div className="mr-1 ml-1 mt-4 ">
                        <input
                            className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mr-1 ml-1 mt-4 ">
                        <input
                            className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mr-1 ml-1 mt-4 ">
                        <input
                            className=" w-52 h-10 text-center rounded-t-md border-2 rounded-b-md bg-transparent rounded-sm"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="mt-4 text-center">
                        <Button onClick={handleClick}>Signup</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
