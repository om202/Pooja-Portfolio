const IconBadge = ({name}) => {
  return (
    <div className="flex flex-col justify-center place-items-center gap-2 bg-slate-200 px-4 py-3 rounded-md">
      <img src={name.toLowerCase() + '.png'} alt={name} className="w-12"/>
      <span className="text-black leading-none">{name}</span>
    </div>
  )
}

export default IconBadge;