import React from 'react'

const MangaShowcase = () => {
  return (
    <div className = " max-w-lg group relative items-center border-4 overflow-hidden hover:img">
      <img src="https://placewaifu.com/image/200" alt ="" className = "transition-all duration-500 w-full group-hover:scale-125"/>
      <div className = "absolute left-0 bottom-0 w-full text-center h-1/2 text-transparent transition-all duration-500 group-hover:text-black">BLA BLA</div>
    </div>
  )
}

export default MangaShowcase