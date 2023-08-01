import { useFilmContext } from "../../context/FilmContext"
import FilmInfo from "../filmInfo/FilmInfo"

const FilmYear = () => {
const {data, setYear, year} = useFilmContext()
// console.log(data, year)

const handleClick= (e) => {
// console.log(e.target.value)
setYear(e.target.value)
}

  return (
<div className="flex justify-center items-center gap-5 p-5 h-[40rem] bg-slate-600  rounded-3xl  shadow-red-500 w-[70rem]">

<div className="">
  {
      data.map((item,i)=>{

return(
<div key={i} className="flex  flex-col m-3">
<button  type="button" className=" text-black text-2xl  focus-within:text-red-600 focus-within:underline bg-slate-50  font-bold shadow-orange-400 rounded-lg p-4" value={item?.date} onClick={handleClick}> 
{item?.date}
</button>

</div>
) 

})
}
</div>

<div className=" mb-10  p-16 h-[35rem]">
      <FilmInfo />
</div>

    </div>
  )
}

export default FilmYear