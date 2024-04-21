import BigWrapper from "./BigWrapper";

const About = () => {
  const hobbies = ["Coding", "Music", "Hiking", "Travel", "Cooking"];
  return (
    <BigWrapper>
      <div className="flex flex-col sm:flex-row gap-4" id="about_page">
        <img src="pooja2.png" alt="pooja2" className="w-full sm:w-1/2 lg:w-1/3 h-auto object-cover" />
        <div className="mt-4 sm:mt-0 sm:w-1/2 lg:w-2/3">
          <h1 className="font-bold text-3xl mb-4 text-violet-500">About</h1>
          <div className="text-gray-800">
            <p>
              It's a pleasure to meet you! My name is Pooja Kumari Sah, and I am
              currently pursuing a Bachelor of Science degree in Computer
              Science and Information Technology at New Summit College in
              Kathmandu, Nepal.
            </p>

            <p className="mt-3">
              I have a profound passion for coding and am committed to
              continuous learning and professional development. Recently, I have
              been focusing on front-end development using ReactJS, which I find
              particularly engaging. However, I am always exploring new
              technologies and methodologies to enhance my skills and stay
              updated with industry trends.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-violet-500 font-bold mb-2">Hobbies</h1>
            <ul className="flex gap-2 flex-wrap">
              {hobbies.map((item) => {
                return <li className="px-2 bg-slate-200 rounded-md">{item}</li>;
              })}
            </ul>
          </div>
          <a
            href="/"
            className="flex px-4 py-2 bg-violet-500 mt-12 w-fit text-white rounded-md shadow-md"
          >
            <span className="mr-2">My Resume</span>
            <svg
              class="w-6 h-6"
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
                d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </BigWrapper>
  );
};

export default About;