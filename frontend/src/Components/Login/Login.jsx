import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("doctor");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password, typeOfUser);
  };

  return (
    <div>
      <div>
        <h1>Choose Account Type</h1>

        <form onSubmit={handleSubmit}>
          <div className="type-of-user flex gap-5 mb-5 mt-5">
            <div
              className="doctor-avatar cursor-pointer"
              onClick={() => setTypeOfUser("doctor")}
            >
              <img
                src="https://th.bing.com/th/id/OIP.SivRPhTCm6ovzUMqWtoA-gHaH_?w=170&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <h2>Doctor</h2>
            </div>
            <div
              className="patient-avatar cursor-pointer"
              onClick={() => setTypeOfUser("patient")}
            >
              <img
                src="https://th.bing.com/th/id/OIP.SivRPhTCm6ovzUMqWtoA-gHaH_?w=170&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
              <h2>Patient</h2>
            </div>
          </div>
          {typeOfUser == "doctor" ? (
            <p>
              Hello doctor! <br /> Please fill out the form below to get started
            </p>
          ) : (
            <p>Please fill out the form below to get started</p>
          )}
          <div>
            <label>
              <span>Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label>
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/signup">{"Don't"} have an account?</Link>

          <div>
            <button disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
