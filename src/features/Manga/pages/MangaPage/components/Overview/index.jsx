import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MangaShowcase from '../../../../components/MangaShowcase'
import RangeSlider from '../../../../../../custom-fields/RangeSlider'
import { Favorite } from '@mui/icons-material'
import StarRatingForm from '../../../../components/StarRatingForm'
import { addMangaAlbum, removeMangaAlbum, deleteAlbum } from '../../../../slices/albumSlice'

const Overview = (props) => {
  const {manga, albums} = props
  const [stars, setStars] = useState(0)
  const [albumList, setAlbumList] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("FETCHED!!");
    console.log(albums);
    let list = [];
    albums.forEach(album => {
      list.push({...album, isListed: isListed(album.mangaList)});
    })

    console.log(list);
    setAlbumList(list);
  }, [])

  const handleRateManga = (value) => {
    console.log("Manga was rated as ", value)
  }

  const isListed = (mangaList) => {
    // console.log(manga.id)
   return mangaList.some((mangaId) => (mangaId === manga.id))
 }

  const handleOnClickAlbum = (index) => {
    console.log ()
    // console.log(index)
    const newAlbums = albumList.map((album, id) => {
      if (id === index) {
        if (!album.isListed) dispatch(addMangaAlbum({albumId: album.id, mangaId: manga.id}))
        else dispatch(removeMangaAlbum({albumId: album.id, mangaId: manga.id}))

        return {...album, isListed: !album.isListed};
      }

      else return album;
    })

    setAlbumList(newAlbums)
  }

  return (
    (albumList != null) &&
    <div>
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
    </div>
  )
}

export default Overview;