import React from "react";

import logo from "../../assets/images/Bounce-Preloader-5.gif";

const Loader = () => {
    return (
        <div className="loader">
            <div className="">
                { <img className="preloader-img" src={logo} alt="Logo"  /> }
                {/*<div className="loader-component"/>*/}
                {/* <ul>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul> */}
            </div>
        </div>
    );
};

export default Loader;