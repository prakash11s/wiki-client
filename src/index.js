import React, { memo } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import PropTypes from "prop-types";
import { PersistGate } from 'redux-persist/integration/react';
// import store from "./redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { store, persistor } from './redux/store';
import Routes from "./routes";
import "./libcss";

const CloseButton = ({ closeToast }) => (
  <i
    className="fa fa-times-circle align-self-center f-18"
    onClick={closeToast}
  />
);
CloseButton.propTypes = {
  closeToast: PropTypes.func,
};

const MainApp = memo(() => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GoogleOAuthProvider clientId="724290095614-kjglepq9riqq4t1atdpdi7e7ocq9r7ed.apps.googleusercontent.com">
          <Routes />
          <ToastContainer
            autoClose={5000}
            draggable={false}
            transition={Slide}
            closeButton={CloseButton}
            hideProgressBar={false}
            position="top-center"
            toastClassName="toast-notification"
          />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>

  );
});

const rootElement = document.getElementById("root");

render(<MainApp />, rootElement);