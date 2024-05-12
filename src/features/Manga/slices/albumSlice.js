import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mangaApi from '../../../api/mangaApi'

export const getAlbumList = createAsyncThunk(
  'album/getAlbumList',

  async () => {
    const response = await mangaApi.getAlbumList()
    return response
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
    }
  }
})

const { reducer, actions } = album
export const { } = actions
export default reducer