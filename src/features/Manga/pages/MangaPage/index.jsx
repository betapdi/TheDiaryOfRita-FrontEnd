import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getMangaData } from '../../slices/mangaSlice'
import { getChapterList } from '../../slices/chapterSlice'
import { Favorite } from '@mui/icons-material'
import mangaApi from '../../../../api/mangaApi'
import MangaShowcase from '../../components/MangaShowcase'
import RangeSlider from '../../../../custom-fields/RangeSlider'
import StarRatingForm from '../../components/StarRatingForm'
import { getAlbumList } from '../../slices/albumSlice'

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

  const handleRateManga = (value) => {
    console.log("Manga was rated as ", value)
  }

  const isListed = (mangaList) => {
    // console.log(manga.id)
    return mangaList.some((mangaId) => (mangaId === manga.id))
  }

  const handleOnClickAlbum = (index) => {
    // console.log(index)
    const newAlbums = albumList.map((album, id) => {
      if (id === index) {
        return {...album, isListed: !album.isListed};
      }

      else return album;
    })

    console.log(newAlbums);
    setAlbumList(newAlbums);
  }

  const manga = useSelector(state => state.manga)
  const chapterList = useSelector(state => state.chapterList)
  const albums = useSelector(state => state.albumList)

  const [stars, setStars] = useState(0)
  const [albumList, setAlbumList] = useState(null)
  

  useEffect(() => {
    // console.log("FETCHED!!");
    console.log(albums);
    let list = [];
    albums.forEach(album => {
      list.push({...album, isListed: isListed(album.mangaList)});
    })

    console.log(list);
    setAlbumList(list);
  }, [isFetched])

  // console.log(manga);
  // console.log(chapterList);

  return (
    <div className = "manga-page">
      {(manga != null && albumList != null) ? (
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
              <RangeSlider/>
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
                <StarRatingForm manga = {manga} onChange = {handleRateManga}/>
              </div>

              <div className = "album-section mt-4" >
                <div className = "">
                  My Albums
                </div>

                <div className = "flex flex-wrap gap-3 text-center">
                  {albumList.map((album, index) => {
                    const color = (album.isListed ? 'bg-korone-skin-dark' : 'bg-korone-skin-light');
                    // console.log(album.name);
                    return (
                      <div onClick = {() => handleOnClickAlbum(index)} className = {`px-8 py-2 border rounded-lg cursor-pointer transition-all duration-200 hover:opacity-70 ${color}`}>{album.name}</div>
                    );
                  })}

                </div>
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
        </div>)
        : <h1>NONE</h1>
      }
    </div>
  )
}

export default MangaPage