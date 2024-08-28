import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Med<span className="text-red-700">Portal</span>
        </Link>
        <button className="text-white md:hidden block" onClick={toggleMenu}>
          ☰
        </button>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
