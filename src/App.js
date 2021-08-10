import { useState } from "react";
import "./App.css";
import React from "react";
// or
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};
function App() {
  return (
    <>
      <GoogleLogin
        clientId="604098466909-9dspp2q7lktca11qh1mfk8418epctgv9.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ; 심히 만들어봐여 폹폴{" "}
    </>
  );
}

export default App;
