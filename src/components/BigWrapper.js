const BigWrapper = ({children}) => {
  return (
    <div className="sm:w-lg md:max-w-screen-lg mx-auto h-fit p-8 bg-slate-50 ">
      {children}
    </div>
  )
}

export default BigWrapper;