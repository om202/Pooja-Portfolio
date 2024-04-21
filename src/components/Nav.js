import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <nav className="py-5 flex justify-between sm:w-lg md:max-w-screen-lg mx-auto px-5 lg:px-0">
        {/* logo */}
        <div className="flex gap-2 text-lg font-bold">
          <svg
            class="w-7 h-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>

          <span>Dev Portfolio</span>
        </div>

        {/* nav bar */}
        <div className="inline-block md:hidden">
          <span onClick={toggleMenu} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex gap-5 text-violet-500 font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about_page">About</a>
            </li>
            <li>
              <a href="#technologies_page">Technologies</a>
            </li>
            <li>
              <a href="#projects_page">Projects</a>
            </li>
            <li>
              <a href="#education_page">Education</a>
            </li>
            <li>
              <a href="#contacts_page">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {showMenu && (
        <div className="block md:hidden bg-white p-4 rounded shadow-lg mt-2">
          <ul className="flex flex-col gap-5 text-violet-500 font-medium">
            <li>
              <a
                href="/"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about_page"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#technologies_page"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects_page"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education_page"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contacts_page"
                className="block py-1 px-2 rounded hover:bg-violet-500 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
