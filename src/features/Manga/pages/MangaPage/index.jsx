import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getMangaData } from '../../slices/mangaSlice'
import { getChapterList } from '../../slices/chapterSlice'
import mangaApi from '../../../../api/mangaApi'
import { getAlbumList } from '../../slices/albumSlice'
import Overview from './components/Overview'

const MangaPage = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mangaId } = useParams()
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchPageInfo = async () => {
      try {
        
        dispatch(getMangaData(mangaId))
        dispatch(getChapterList(mangaId))
        dispatch(getAlbumList())
        const response = await mangaApi.getMangaData(mangaId)
        setIsFetched(true)
        // console.log(response)
      } catch (error) {
        console.log("Failed to fetch manga list: ", error)
      }

    }
    
    fetchPageInfo()
  }, [])

  const manga = useSelector(state => state.manga)
  const chapterList = useSelector(state => state.chapterList)
  const albums = useSelector(state => state.albumList)

  // console.log(manga);
  // console.log(chapterList);

  return (
    <div className = "manga-page">
      {(manga != null && isFetched) ? (
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

          <Overview manga = {manga} albums = {albums}/>
          {/* {console.log(albums)} */}
          
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
        </div>)
        : <h1>NONE</h1>
      }
    </div>
  )
}

export default MangaPage