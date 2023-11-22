import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  const navLinksDisplay = navLinks.map((item) => (
    <li key={item.label}>
      <a
        href={item.href}
        className="font-montserrat leading-normal text-lg text-slate-gray"
      >
        {item.label}
      </a>
    </li>
  ));

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="navbar bg-base-100">
      <a href="/" className="btn btn-ghost text-xl">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
      </a>

      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinksDisplay}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center">
          {navLinksDisplay}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

{
  /* <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinksDisplay}
        </ul>
        <div className="hidden max-lg:block cursor-pointer mr-0">
          <img src={hamburger} width={25} height={24} onClick={handleToggle} />
        </div>
      </nav>
    </header> */
}
