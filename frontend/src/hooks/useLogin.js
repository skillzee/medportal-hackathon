import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password, typeOfUser) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;

    setLoading(true);
    {
      typeOfUser == "doctor"
        ? await loginDoctor({ username, password }, setAuthUser)
        : await loginPatient({ username, password }, setAuthUser);
    }
    setLoading(false);
  };
  return { loading, login };
};
export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}

async function loginDoctor({ username, password }, setAuthUser) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/doctor/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.setItem("medportal-user", JSON.stringify(data));
    setAuthUser(data);
    toast.success("Login successful!");
  } catch (error) {
    toast.error(error.message);
  }
}
async function loginPatient({ username, password }, setAuthUser) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/patient/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }

    localStorage.setItem("medportal-user", JSON.stringify(data));
    setAuthUser(data);
    toast.success("Login successful!");
  } catch (error) {
    toast.error(error.message);
  }
}
