import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import "../../Components/media.css";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
  });

  const [typeOfUser, setTypeOfUser] = useState("doctor");
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs, typeOfUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
          {typeOfUser === "doctor" ? (
            <p>
              Hello doctor! <br /> Please fill out the form below to get started
            </p>
          ) : (
            <p>Please fill out the form below to get started</p>
          )}
          <div>
            <label>
              <span>Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>
              <span>Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              value={inputs.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={inputs.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              <span>Sex</span>
            </label>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleInputChange}
              checked={inputs.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={handleInputChange}
              checked={inputs.gender === "female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <label>
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <Link to={"/login"}>Already have an account?</Link>

          <div>
            <button disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
