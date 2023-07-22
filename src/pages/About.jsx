import React from "react";

const AboutPage = () => {
    return (
        <div className="flex justify-center items-start h-screen">
            <div className="bg-[#343432] p-8 rounded-lg shadow-lg w-full md:w-[800px] mt-8 mx-10">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p>A simple blog site made using React.js and Tailwind CSS.</p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Features Implemented</h2>
                <ol className="list-decimal pl-5">
                    <li>Home Page with hero</li>
                    <li>Blog Page with cards</li>
                    <li>React Router</li>
                    <li>Responsive Design</li>
                    <li>Dark Mode</li>
                </ol>
                <h2 className="text-2xl font-bold mb-4 mt-8">The Developers</h2>
                <ul className="list-disc pl-5">
                    <li>
                        <a>
                            Aastha Deshwal
                        </a>
                        <a href = "https://github.com/AasthaDeshwal" target="_blank" className="fa-brands fa-github pl-2 
                        transition duration-300 hover:text-[#4078c0]
                        ease-in-out hover:-translate-y-[2px] hover:scale-110 duration:200"></a>
                    </li>
                    <li>
                        <a>
                            Atharva Upare
                        </a>
                        <a href = "https://github.com/atharvaupare" target="_blank" className="fa-brands fa-github pl-2 
                        transition duration-300 hover:text-[#4078c0]
                        ease-in-out hover:-translate-y-[2px] hover:scale-110 duration:200"></a>
                    </li>
                    <li>
                        <a>
                            Parth Bhanushali
                        </a>
                        <a href = "https://github.com/The-Parth" target="_blank" className="fa-brands fa-github pl-2 
                        transition duration-300 hover:text-[#4078c0]
                        ease-in-out hover:-translate-y-[2px] hover:scale-110 duration:200"></a>
                        <a href = "https://www.linkedin.com/in/parth-bhanushali-b771ab251/" target="_blank" className="fa-brands fa-linkedin pl-2 
                        transition duration-300 hover:text-[#0077b5]
                        ease-in-out hover:-translate-y-[2px] hover:scale-110 duration:200"></a>
                    </li>
                    <li>
                        <a>
                            Toyash Patil
                        </a>
                        <a href = "https://github.com/ToyashPatil" target="_blank" className="fa-brands fa-github pl-2 
                        transition duration-300 hover:text-[#4078c0]
                        ease-in-out hover:-translate-y-[2px] hover:scale-110 duration:200"></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
