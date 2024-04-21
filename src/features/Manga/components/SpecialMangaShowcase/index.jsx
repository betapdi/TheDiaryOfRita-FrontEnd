import React from 'react'
import { useNavigate } from 'react-router-dom'
// {process.env.REACT_APP_SERVER_URL + props.manga.cover}

const SpecialMangaShowcase = (props) => {
  const navigate = useNavigate()
  const handleOnClick = (values) => {
    console.log(values)
    navigate(`/manga/${values}`)
  }

  return (
    <div className = "rounded-lg group relative items-center overflow-hidden hover:img cursor-pointer" onClick = {() => handleOnClick(props.manga.id)}>
    {/* {console.log("Our Props: ", props)}
    {console.log("Our link: ", process.env.REACT_APP_SERVER_URL + props.manga.cover)} */}

      {/* Images */}
      <div className = "overflow-hidden">
        <img src = {process.env.REACT_APP_SERVER_URL + props.manga.cover} alt ="" className = "transition-all duration-500 w-full group-hover:scale-125"/>
        <div className = "absolute top-0 bottom-0 left-0 right-0 transition-all duration-500 group-hover:bg-white group-hover:bg-opacity-50 group-hover:left-1/2 group-hover:right-1/2"/>
      </div>

      {/* Name and Info */}
      <div className = "relative p-2 w-full text-center group-hover:bg-white group-hover:bg-opacity-70 group-hover:-mt-8 transition-all duration-500">{props.manga.name}</div>
    </div>
  )
}

export default SpecialMangaShowcase