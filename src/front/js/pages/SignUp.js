import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <div
      style={{ height: "100vh" }}
      className="container flex-column d-flex align-items-center justify-content-center"
    >
      <div className="row my-2">
        <form>
          <input
            type={"text"}
            name={"email"}
            className="form-control"
            value={email}
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={"password"}
            name={"password"}
            className="form-control"
            value={password}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="row">
          <button
            type={"button"}
            className={"btn btn-primary"}
            onClick={(e) => {
              const success = actions.signUp({
                email: email,
                password: password,
              });
              if (success) {
                navigate("/login");
                return;
              }
              alert("something happened while creating the user.");
            }}
          >
            {"Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
