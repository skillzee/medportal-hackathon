import './App.css'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return <>
    <div>
        {/* <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} /> } />
          <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login /> } />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup /> } />
        </Routes>
      <Toaster /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route />
        <Route/>
      </Routes>
    </div>
  </>
}

export default App;