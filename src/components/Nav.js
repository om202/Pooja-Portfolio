const Nav = () => {
  return (
    <div className="">
      <nav className="py-5 flex justify-between sm:w-lg md:max-w-screen-lg mx-auto">
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
        <div className="inline-block">
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
              <a href="#contacts_page">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
