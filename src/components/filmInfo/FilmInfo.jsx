import { useEffect, useState } from "react"
import { useFilmContext } from "../../context/FilmContext"
import StarRatingComponent from 'react-star-rating-component';

const FilmInfo = () => {
const {data, setYear, year} = useFilmContext()
const [newData , setNewData ] = useState({})

const tags = newData?.tags;

// console.log(newData)

console.log(tags)
useEffect(() => {

data.map((item,i) => {
   if(item.date == year){
            setNewData(item)
      }
         
} 



)

  
}, [year])


  return (
<div className="p-2">

<h1 className=" text-amber-400 text-4xl text-center">{newData?.title}</h1>
<img className="w-[200px]  h-[180px] mx-auto mt-5 rounded-[10px] hover:scale-[1.2] cursor-pointer  " src={newData?.img} alt="" />
<h5 className=" mt-5 text-[18px] h-[180px]   text-center m-auto text-slate-50  p-5">{newData?.body}</h5>

{/* <div className="flex ">
    {tags.map((item, i)=> {
      return(
            <div className="flex border border-spacing-3" key={i}>
<p>{item}</p>
            </div>
      )
})}  
</div> */}

<div className="flex gap-2 justify-center">
   <StarRatingComponent className="text-2xl"
    name={newData?.rate} 
    value={Math.round(newData?.rate) / 2} 
    starCount={5} 
    editing={true} 
/>   
<h4 className=" text-2xl text-orange-600">{newData?.rate} / 10</h4>
</div>

    </div>
  )
}

export default FilmInfo