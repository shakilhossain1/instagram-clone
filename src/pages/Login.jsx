import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constans/route";
import tw from "twin.macro";
import { Input } from "../components/misc/Input";
import { LoginButton } from "../components/misc/Buttons";

const Wrapper = tw.header`container flex max-w-screen-md mx-auto items-center h-screen`;
const LeftImageWrapper = tw.div`flex w-3/5 justify-around`;

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEamilAddress] = useState("");
  const [passoword, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = passoword === "" || emailAddress === "";

  useEffect(() => {
    document.title = "Login - Intagram";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, passoword);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEamilAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <Wrapper>
      <LeftImageWrapper>
        <img
          src="/images/iphone-with-profile.jpg"
          className="max-w-full max-h-96"
          alt="Image"
        />
      </LeftImageWrapper>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col bg-white border border-gray-primary p-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12"
            />
          </h1>
          {error && (
            <p className="text-red-primary font-bold text-center m-2 text-xs mb-4">
              {error}
            </p>
          )}
          <form onSubmit={handleLogin} method="POST">
            <Input
              aria-label="Enter Your email address"
              placeholder="Email address"
              type="text"
              onChange={({ target }) => setEamilAddress(target.value)}
              value={emailAddress}
            />
            <Input
              aria-label="Enter Your Password"
              placeholder="Password"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
              value={passoword}
            />
            <LoginButton type="submit" disabled={isInvalid} invalid={isInvalid}>
              Log In
            </LoginButton>
          </form>
        </div>
        <div className="flex rounded justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={ROUTES.SING_UP} className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
