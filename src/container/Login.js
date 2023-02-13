import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from '@react-oauth/google';
// import { gapi } from 'gapi- script';
import { Button, Input, Footer, Loader } from "../component/CommonComponent";
import client_right_image from "../assets/images/creative-img.jpg";


const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        // function start() {
        //   gapi.client.init({
        //     clientId: "724290095614-kjglepq9riqq4t1atdpdi7e7ocq9r7ed.apps.googleusercontent.com",
        //     scope: 'email',
        //   });
        // }

        // gapi.load('client:auth2', start);
    }, []);

    const responseMessage = (res) => {
        console.log("res", res)
    }

    const errorMessage = (res) => {
        console.log("erro", res)
    }

    return (
        <>
            <section className={`login-main-right-bg login_animation`}>
                <div className='container'>
                    <div>
                    </div>
                    <div className="row login-box">
                        <div className="col-12 col-lg-6 main-login-section login-center">

                            <div className="login-detail s-top">
                                <div className="d-block client-creative-toggler text-center">
                                    <p className="text-body form-pages-title my-2">SOCIAL LOGIN</p>

                                    <form className="social-login-form">

                                        <div className="form-group mb-4">
                                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 client-right-img creative-right-img ">
                            <img className="client-right-image-section right-show" src={client_right_image} />
                        </div>
                    </div>
                </div>
                <Footer headerDesign={true} />
            </section>
        </>
    );
};

export default Login;