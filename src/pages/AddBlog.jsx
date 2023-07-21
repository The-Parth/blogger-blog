import React from "react";

const Tech = () => {
    let form_ls = [];
    form_ls.push(
        <>
            <div className="container mx-auto p-2">
                <div className="max-w-sm mx-auto my-24 bg-[#343432] px-5 py-10 rounded shadow-xl">
                    <div className="text-center mb-8">
                        <h1 className="font-bold text-2xl">
                            Login To WEBZONE
                        </h1>
                    </div>
                    <form action="#">
                        <div className="mt-5">
                            <label htmlFor="username">Username or Email</label>
                            <input
                                type="text"
                                id="username"
                                className="block w-full p-2 border rounded border-gray-500 text-[#010101]"
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="block w-full p-2 border rounded border-gray-500 text-[#010101]"
                            />
                        </div>
                        <div className="mt-10">
                            <input
                                type="submit"
                                defaultValue="Login"
                                className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
    return form_ls;
};

export default Tech;
