

const TechCard = ({image,name,desc}) => {
  return (
    <div className="bg-slate-50 p-4 rounded-xl h-full hover:scale-95 transition duration-300 ease-in-out">
        <img className="w-full h-40 object-contain mix-blend-multiply" src={image}/>
        <h3 className="text-center font-semibold text-xl">{name}</h3>
        <p className="font-normal text-sm my-2">
        {desc}
        </p>
    </div>
  )
}

export default TechCard