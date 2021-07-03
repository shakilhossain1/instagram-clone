import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEamilAddress] = useState("");
  const [passowor, setpassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = passowor === "" || emailAddress === "";

  useEffect(() => {
    document.title = "Login - Intagram";
  }, []);

  const handleLogin = () => {
    console.log("loggin in");
  };

  return (
    <div className="container flex max-w-screen-md mx-auto items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          className="max-w-full"
          alt="Image"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
        </h1>
        {error && <p className="text-red-primary text-xs mb-4">{error}</p>}
        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter Your email address"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 mt-4 py-5 px-4 h-2 rounded border border-gray-primary outline-none"
            type="text"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
