import React from "react";

const NotFound = (): JSX.Element => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[80vw] h-[80vh] flex flex-col justify-center items-center">
                {/* <div className="logo h-full">
                    <Image alt="logo" className="h-[50px] w-[50px] bgGlow" src={logo} />
                </div> */}
                <div className="text-4xl font-orbitron-1">
                    <h1>404</h1>
                    <h1>Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;