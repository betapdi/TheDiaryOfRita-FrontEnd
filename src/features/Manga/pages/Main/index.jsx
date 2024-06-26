import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mangaApi from '../../../../api/mangaApi'
import { auth } from '../../../../firebase/firebase-config'
import TopManga from '../../components/TopManga'
import { getAllManga } from '../../slices/mangaListSlice'
import Banner from '../../../../components/Banner'

const MainPage = () => {
  const dispatch = useDispatch()
  
  //Fetch needed data
  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await dispatch(getAllManga());
        // console.log(response)
      } catch (error) {
        console.log("Failed to fetch manga list: ", error)
      }
    }

    fetchMangaList()
  }, [])

  const mangas = useSelector(state => state.mangaList)
  // console.log('List of mangas: ', mangas)
  // console.log(process.env.REACT_APP_SERVER_URL)

  return (
    <div className = "main-page">
      {/* <MangaShowcase/> */}
      <Banner/>
      <div className = "mt-16">
        <TopManga/>
      </div>
      
      {/* <div className="TESTING" height={"500px"} style={{margin: "50vw"}}>.</div> */}
    </div>
  )
}

export default MainPage