import $ from 'jquery';
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import mangaApi from '../../../../api/mangaApi';
import { getTopManga } from '../../slices/topMangaSlice';
import "./TopManga.scss";
import MangaShowcase from '../MangaShowcase';
import SpecialMangaShowcase from '../SpecialMangaShowcase';

const TopManga = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [topManga, setTopManga] = useState([]);

    useEffect(() => {
      const fetchTopMangas = async () => {
          try {
              const response = dispatch(getTopManga());
              console.log("Fetching succeed!!", response)
          } catch (error) {
              console.log("Failed to fetch top manga list: ", error);
          }
      };

      fetchTopMangas();
    }, []);

    const mangas = useSelector((state) => state.topManga);
    console.log("top manga", mangas);

    useEffect(() => {
      setTopManga(mangas.slice(0, 7));
    }, [mangas]);
    
    console.log("new Top manga: ", topManga)
    return (
      ((topManga.length > 0) ?
      <div className = " border-t-[1rem] border-l-[1rem] rounded-3xl border-[#F29393] ml-64 mr-64">

        {/* Buttons */}
        <div className = "flex flex">

        </div>
        <div className = "grid grid-cols-2 gap-4">

        {/* Top 1 */}
          <div className = "w-full mt-8 ml-4">
            <SpecialMangaShowcase manga = {topManga[0]}/>
          </div>

        {/* Top 2-7 */}
          <div className = "w-full mt-8 ml-4 grid grid-cols-3 gap-2 justify-center overflow-hidden">
            {topManga.map((manga, index) => (
              ((index > 0) && <MangaShowcase manga = {manga}/>)
            ))}
          </div>

        </div> 
      </div>

      : <div>NONE</div>
      )
    );
};

export default TopManga;
