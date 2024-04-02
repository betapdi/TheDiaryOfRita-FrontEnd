import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getMangaData } from '../../slices/mangaSlice'
import { getChapterList } from '../../slices/chapterSlice'
import mangaApi from '../../../../api/mangaApi'

const MangaPage = (props) => {
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
        <>
          {manga.name}
          {manga.description}
          <img width={"500px"} height={"500px"} src={process.env.REACT_APP_SERVER_URL + manga.cover}/>

          <ul>
            {chapterList.map((chapter) =>
              <li onClick = {() => handleOnClick(chapter.id)}>
                  {chapter.id}
              </li>
            )}
          </ul>
        </>
        : <h1>NONE</h1>
      }
    </div>
  )
}

export default MangaPage