const Jumbo = () => {
  return (
    <div className="md:h-[500px] bg-slate-200 overflow-hidden p-4">
      <div className="flex flex-col sm:flex-row sm:w-lg md:max-w-screen-lg mx-auto justify-between p-4 md:p-0">
        <div className="mt-10 text-center sm:text-left">
          <div className="font-bold text-7xl leading-tight">
            <span className="text-5xl">Hi there,</span><br></br> I am{" "}
            <span className="text-orange-600">Pooja</span>
          </div>
          <div className="text-2xl mt-4">A front-end developer</div>
          <a
            href="https://github.com/poojasah77"
            className="flex px-4 py-2 bg-violet-500 mt-8 text-xl w-fit text-white rounded-md shadow-md mx-auto sm:mx-0"
          >
            <span className="mr-2">My Work</span>
            <svg
              class="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <img src="poojabg.png" alt="" className="pt-3 max-h-[700px] mx-auto sm:mx-0" />
      </div>
    </div>
  );
};

export default Jumbo;