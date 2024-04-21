import BigWrapper from "./BigWrapper";

export const Education = () => {
  const education = [
    {
      institute: "Sipalaya InfoTech",
      course: "MERN Stack Training",
      website: "https://sipalaya.com",
      address: "Koteshwor, Kathmandu",
      id: "sipalaya",
    },
    {
      institute: "New Summit College",
      course: "Bsc. CSIT, Bachelors Degree",
      website: "https://newsummit.edu.np/",
      address: "Shantinagar, Kathmandu",
      id: "newsummit",
    },
    {
      institute: "Triton Int'l College",
      course: "High School, Science",
      website: "https://www.triton.edu.np/",
      address: "Koteshwor, Kathmandu",
      id: "triton",
    },
  ];

  return (
    <BigWrapper>
      <div>
        <h1 className="font-bold text-violet-500 text-2xl">Education</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {education.map((item) => {
            return <EducationContainer data={item} />;
          })}
        </div>
      </div>
    </BigWrapper>
  );
};

function EducationContainer({ data }) {
  const { institute, course, website, address, id } = data;
  return (
    <div id="education_page">
      <div className="flex flex-col p-4 shadow-md rounded-md border-2">
        <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
          <img
            className="object-cover object-center"
            src={id + ".png"}
            alt={id}
          />
        </div>
        <div>
          <h1 className="text-xl font-medium mb-3 mt-4">{institute}</h1>
          <span className="text-gray-700">{course}</span>
        </div>
        <a href={website}>
          <div className="flex items-center mt-2 gap-1">
            <span className="text-sm text-gray-600">{website}</span>
          </div>
        </a>
        <div className="flex gap-1 text-gray-600 mt-2">
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
              clip-rule="evenodd"
            />
          </svg>
          {address}
        </div>
      </div>
    </div>
  );
}
