import { useState } from "react";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0  bg-transparent backdrop-filter backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <img
            className="logo-img"
            src="https://raw.githubusercontent.com/filosoho/Portfolio/refs/heads/main/public/assets/project-logo7.png"
            alt="filosoho space logo"
            loading="lazy"
          />
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={
                isOpen
                  ? "https://raw.githubusercontent.com/filosoho/Portfolio/refs/heads/main/public/assets/close.png"
                  : "https://raw.githubusercontent.com/filosoho/Portfolio/refs/heads/main/public/assets/menu.png"
              }
              alt="menu toggle"
              className="w-10 h-6"
              loading="lazy"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
