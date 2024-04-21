import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getMangaData } from '../../slices/mangaSlice'
import { getChapterList } from '../../slices/chapterSlice'
import { Rating } from '@mui/material'
import { Star } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import mangaApi from '../../../../api/mangaApi'
import MangaShowcase from '../../components/MangaShowcase'

const MangaPage = (props) => {
  const [stars, setStars] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mangaId } = useParams()

  useEffect(() => {
    const fetchMangaInfo = async () => {
      try {
        const response = await mangaApi.getMangaData(mangaId)

        dispatch(getMangaData(mangaId))
        dispatch(getChapterList(mangaId))
        console.log(response)
      } catch (error) {
        console.log("Failed to fetch manga list: ", error)
      }
    }

    fetchMangaInfo()
  }, [])

  const handleOnClick = (values) => {
    navigate(`/manga/${mangaId}/${values}`)
  }

  const manga = useSelector(state => state.manga)
  const chapterList = useSelector(state => state.chapterList)
  // console.log(manga);

  return (
    <div className = "manga-page">
      {manga != null ? 
        <div className = "mx-32">
          <div className = "flex items-center">
            <div className = "flex-1 text-center border-2 cursor-pointer py-2">
              Overview
            </div>

            <div className = "flex-1 text-center border-t-2 border-b-2 cursor-pointer py-2">
              Chapters
            </div>

            <div className = "flex-1 text-center border-2 cursor-pointer py-2">
              Recomendations
            </div>
          </div>

          <div className = "flex items-center mt-4 mx-4">
            <div className = "flex-1 text-center border-2 py-2">
              Vol: 104+; Ch: 1069+
            </div>

            <div className = "flex-1 text-center border-t-2 border-b-2 border-r-2 py-2">
              Weekly Shonen Jump
            </div>

            <div className = "flex-1 text-center border-t-2 border-b-2 border-r-2 py-2">
              1997 - ?
            </div>

            <div className = "flex-1 items-center text-center border-t-2 border-b-2 py-2">
              <Favorite/> 9.32
            </div>

            <div className = "flex-1 text-center border-2 py-2">
              Rank #3
            </div>
          </div>

          <div className = "flex mt-4 mx-8">
            <div className = "flex-initial text-center">
              <MangaShowcase manga = {manga}/>
            </div>

            <div className = "flex-1 ml-8">
              <div className = "mt-4 h-40">
                {/* {manga.description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis. Esse explicabo consectetur deleniti maiores autem asperiores quas architecto provident aperiam tempora? Quisquam earum minima ut. Molestiae eveniet blanditiis officia.
              </div>

              <div className = "category-section mt-4" >
                <div className = "">
                  Category
                </div>

                <div className = "flex flex-wrap gap-3 text-center">
                  {manga.categories.map((category) => (
                    <div className = "px-8 py-2 border rounded-lg">{category}</div>
                  ))}
                </div>
              </div>

              <div className = "rating-section mt-4">
                <div className = "">
                  Rating
                </div>
                <Rating name="simple-controlled" size = "large" value={stars} onChange={(event, newRating) => {setStars(newRating)}} />
              </div>
            </div>
          </div>
          {/* {manga.name}
          {manga.description}
          <img width={"500px"} height={"500px"} src={process.env.REACT_APP_SERVER_URL + manga.cover}/>

          <ul>
            {chapterList.map((chapter) =>
              <li onClick = {() => handleOnClick(chapter.id)}>
                  {chapter.id}
              </li>
            )}
          </ul> */}
        </div>
        : <h1>NONE</h1>
      }
    </div>
  )
}

export default MangaPage