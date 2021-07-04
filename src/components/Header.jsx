import React, { useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constans/route";
import { Link } from "react-router-dom";
import { HomeIcon, LogoutIcon } from "@heroicons/react/outline";

function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex cursor-pointer items-center">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD}>
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="flex items-center justify-center text-gray-700">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}>
                  <HomeIcon className="w-8 h-8 mr-6 text-black-light" />
                </Link>
                <button
                  type="button"
                  title="sign out!"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <LogoutIcon className="w-8 h-8 text-black-light mr-4" />
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile picture`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button type="button">Sing In</button>
                </Link>
                <Link to={ROUTES.SING_UP}>
                  <button type="button">Sing Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
