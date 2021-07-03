import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constans/route';

function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEamilAddress] = useState('');
  const [passoword, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = passoword === '' || emailAddress === '';

  useEffect(() => {
    document.title = 'Login - Intagram';
  }, []);

  const handleLogin = async e => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, passoword);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEamilAddress('');
      setPassword('');
      setError(error.message);
    }
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
        <div className="flex flex-col bg-white border border-gray-primary p-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12"
            />
          </h1>
          {error && <p className="text-red-primary font-bold text-center m-2 text-xs mb-4">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter Your email address"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 mt-4 py-5 px-4 h-2 rounded border border-gray-primary outline-none"
              type="text"
              onChange={({ target }) => setEamilAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter Your Password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 mt-4 py-5 px-4 h-2 rounded border border-gray-primary outline-none"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
              value={passoword}
            />
            <button
              type="submit"
              disabled={isInvalid}
              className={`
              bg-blue-medium text-white w-full h-8 font-bold mt-2
              ${isInvalid && ' opacity-50 cursor-not-allowed'}`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex rounded justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary mt-4">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to={ROUTES.SING_UP} className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
