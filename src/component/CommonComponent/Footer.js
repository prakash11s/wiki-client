import React from 'react';

export default function Footer({ headerDesign }) {
    return (
        <div className={`${headerDesign === true ? "header-design" : ""} footer container`}>
            <div className="footer-center-content ">
                {/* <div className='text-center pb-2'>
                    <a target="_blank" href="https://linkedin.com/company/widú/about/">
                        <img src={footer_logo_in} className="footer_logo_in" alt="logo" />
                    </a>
                </div> */}
                <h4 className="text-title">Terms and Conditions</h4>
                <p className="text-title footer-copy-right">&#169; 2022 - All Rights Reserved</p>
            </div>
        </div>
    );
};