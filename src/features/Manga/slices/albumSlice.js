import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mangaApi from '../../../api/mangaApi'

export const getAlbumList = createAsyncThunk(
  'album/getAlbumList',

  async () => {
    const response = await mangaApi.getAlbumList()
    return response
  }
)

export const addMangaAlbum = createAsyncThunk(
  'album/addMangaAlbum',

  async (data) => {
    const response = await mangaApi.addMangaAlbum(data);
    return response
  }
)

export const removeMangaAlbum = createAsyncThunk(
  'album/removeMangaAlbum',

  async (data) => {
    const response = await mangaApi.removeMangaAlbum(data);
    return response;
  }
)

export const deleteAlbum = createAsyncThunk(
  'album/deleteAlbum',
  
  async (albumId) => {
    const response = await mangaApi.deleteAlbum(albumId);
    return response;
  }
)

const album = createSlice({
  name: 'album',
  initialState: [],
  reducers: {

  },

  extraReducers: {
    [getAlbumList.fulfilled]: (state, action) => {
      const data = action.payload.map((album) => (
        {id: album.id, name: album.name, mangaList: album.mangaList}
      ))

      return data
    },

    [addMangaAlbum.fulfilled]: (state, action) => {
      const chosenAlbum = action.payload
      const data = state.map((album) => {
        if (chosenAlbum.id === album.id) {
          return {id: chosenAlbum.id, name: chosenAlbum.name, mangaList: chosenAlbum.mangaList};
        }

        else return album;
      })
      
      return data;
    },

    [removeMangaAlbum.fulfilled]: (state, action) => {
      const chosenAlbum = action.payload
      const data = state.map((album) => {
        if (chosenAlbum.id === album.id) {
          return {id: chosenAlbum.id, name: chosenAlbum.name, mangaList: chosenAlbum.mangaList};
        }

        else return album;
      })
      
      return data;
    },

    [deleteAlbum.fulfilled]: (state, action) => {
      const data = action.payload.map((album) => (
        {id: album.id, name: album.name, mangaList: album.mangaList}
      ))

      return data;
    },
  }
})

const { reducer, actions } = album
export const { } = actions
export default reducer