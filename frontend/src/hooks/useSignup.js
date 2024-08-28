import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
    email,
    typeOfUser,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      email,
    });
    if (!success) return;
    setLoading(true);
    {
      typeOfUser === "doctor"
        ? await signupDoctor(
            { fullName, username, password, confirmPassword, gender, email },
            setAuthUser
          )
        : await signupPatient(
            { fullName, username, password, confirmPassword, gender, email },
            setAuthUser
          );
    }
    setLoading(false);
  };
  return { loading, signup };
};

export default useSignup;

async function signupDoctor(userData, setAuthUser) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/doctor/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.setItem("medportal-user", JSON.stringify(data));
    setAuthUser(data);
    toast.success("Signup successful!");
  } catch (error) {
    toast.error(error.message);
  }
}
async function signupPatient(userData, setAuthUser) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/patient/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.setItem("medportal-user", JSON.stringify(data));
    setAuthUser(data);
    toast.success("Signup successful!");
  } catch (error) {
    toast.error(error.message);
  }
}

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
  email,
}) {
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmPassword ||
    !gender ||
    !email
  ) {
    toast.error("Please fill in all the fields");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return false;
  }
  return true;
}
