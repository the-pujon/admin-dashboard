import React, { useContext, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.scss";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { multiContext } from "../../context/multiCotext/MultipleContext";

const LoginPage = () => {
  const [error, setError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(multiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch({ type: "login" });

        console.log(user);

        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <p> Please log in to enter</p>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button> Sign in </button>
        <button onClick={() => navigate("/users/new")}>Sign up</button>

        {error && <span className="error">wrong email or password</span>}
      </form>
    </div>
  );
};

export default LoginPage;
