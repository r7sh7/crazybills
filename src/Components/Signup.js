/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { auth, fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [errorMsg, setErrorMsg] = useState("");
  var [successMsg, setSuccessMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    //console.log(fullName, email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log(credentials);
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            FullName: fullName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg(
              "Sign Up Successfull. You will now automatically be redirected to the Login."
            );
            setFullName = "";
            setPassword = "";
            setEmail = "";
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/login");
            }, 2000);
          })
          .catch((error) => {
            setErrorMsg(error.message);

            setFullName = "";
            setPassword = "";
            setEmail = "";
            navigate("/signup");
          }, 2000);
      })
      .catch((error) => {
        setErrorMsg(error.message);

        setTimeout(() => {
          setErrorMsg("");
          setFullName = "";
          setPassword = "";
          setEmail = "";
          navigate("/login");
        }, 2000);
      });
  };
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h1>Sign Up</h1>
      <hr></hr>
      <br></br>
      {successMsg && (
        <>
          <div className="success-msg">{successMsg} </div>
          <br></br>
        </>
      )}

      <form className="form-group" autoComplete="off">
        <div className="deets">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          ></input>
        </div>

        <br></br>

        <div className="deets">
          <label>Email ID</label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <br></br>
        <div className="deets">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <br></br>
        <div className="btn-box">
          <span>
            Already have an account Login
            <Link to="/login" className="link">
              {" "}
              Here
            </Link>
          </span>
        </div>
        <br></br>
        <div className="btn-box">
          <button className="btn btn-success btn-md">Sign Up</button>
        </div>
      </form>
      {errorMsg && (
        <>
          <div className="error-msg">{errorMsg} </div>

          <br></br>
        </>
      )}
    </div>
  );
};
