import React, { useEffect } from 'react'
import mangaApi from '../../../../api/mangaApi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getChapterImages } from '../../slices/imageContainerSlice'

const ChapterPage = () => {
  const dispatch = useDispatch()
  const { mangaId, chapterId } = useParams()

  useEffect(() => {
    const fetchChapterImages = async () => {
      console.log(chapterId, mangaId)
      try {
        const response = await mangaApi.getChapterImages(mangaId, chapterId)
        dispatch(getChapterImages({mangaId, chapterId}))
      } catch(error) {
        console.log(error)
      }
    }
  
    fetchChapterImages()
  }, [])

  const imageList = useSelector(state => state.imageContainer)

  return (
    <div>
      {imageList.map((image) =>
        <img src={process.env.REACT_APP_SERVER_URL + image.img}/>
      )}
    </div>
  )
}

export default ChapterPage