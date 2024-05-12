import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/Authentication/userSlice"
import categoryReducer from "../features/Manga/slices/categorySlice"
import favouriteReducer from "../features/Manga/slices/favouriteSlice"
import mangaListReducer from "../features/Manga/slices/mangaListSlice"
import mangaReducer from "../features/Manga/slices/mangaSlice"
import chapterReducer from "../features/Manga/slices/chapterSlice"
import imageContainerReducer from "../features/Manga/slices/imageContainerSlice"
import topMangaReducer from "../features/Manga/slices/topMangaSlice"
import bannerReducer from "../slices/bannerSlice"
import albumReducer from "../features/Manga/slices/albumSlice"

const rootReducer = {
  userData: userReducer,
  mangaList: mangaListReducer,
  categoryList: categoryReducer,
  bannerList: bannerReducer,
  manga: mangaReducer,
  favouriteList: favouriteReducer,
  topManga: topMangaReducer,
  chapterList: chapterReducer,
  imageContainer: imageContainerReducer,
  albumList: albumReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store