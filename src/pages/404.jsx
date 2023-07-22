import React from "react";

const PageNotFound = () => {
    let pages = [
        { name: "the Home page", href: "/" },
        { name: "our Tech blogs", href: "/tech" },
        { name: "the About page", href: "/about" },
        { name: "our Business blogs", href: "/bussiness" },
        { name: "our Sports blogs", href: "/sports" },
    ];

    let randomPage = pages[Math.floor(Math.random() * pages.length)];

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center mt-[-15%]">
                    <h1 className="text-9xl mt-4">
                        <button
                            className="ml-1 transition ease-in-out text-[#7ea4f7] hover:text-[#6bd896] hover:-translate-y-1 hover:scale-105 duration:300"
                            onClick={() =>
                                (window.location.href =
                                    "https://en.wikipedia.org/wiki/HTTP_404")
                            }
                        >
                            404
                        </button>
                    </h1>
                    <br />
                    <h2 className="text-3xl">Page Not Found</h2>
                    <h2 className="text-2xl mt-4">
                        In the meantime, try visiting{" "}
                        <button
                            className="ml-1 transition ease-in-out text-[#7ea4f7] hover:text-[#6bd896] hover:-translate-y-1 hover:scale-105 duration:300"
                            onClick={() =>
                                (window.location.href = randomPage.href)
                            }
                        >
                            {randomPage.name}
                        </button>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
