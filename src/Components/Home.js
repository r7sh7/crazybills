import React, { useState, useEffect } from "react";
import { auth, fs } from "../Config/Config";
import { Navbar } from "./Navbar";
import { Products } from "./Products";

export const Home = () => {
  //getting the current logged in user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          //if there is a user
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data.FullName);
            });
        } else {
          //if there is no user then how we will display
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();
  return (
    <div>
      <Navbar user={user} />
      <Products />
    </div>
  );
};
