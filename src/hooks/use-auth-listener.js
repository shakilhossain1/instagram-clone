import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

export default function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //  If we have a user
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(user);
      } else {
        // if we don't have an user
        localStorage.removeItem("authUser");
        setUser(null);
      }

      return () => listener();
    });
  }, [firebase]);

  return { user };
}
