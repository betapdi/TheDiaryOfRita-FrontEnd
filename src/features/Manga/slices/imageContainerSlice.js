import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mangaApi from '../../../api/mangaApi'

export const getChapterImages = createAsyncThunk(
  'imageContainer/getChapterImages',

  async (data) => {
    const {mangaId, chapterId} = data
    const response = await mangaApi.getChapterImages(mangaId, chapterId)
    return response
  }
)

const imageContainer = createSlice({
  name: 'imageContainer',
  initialState: [],
  reducers: {

  },

  extraReducers: {
    [getChapterImages.fulfilled]: (state, action) => {
      const data = action.payload.map((pic) => (
        {id: pic.id, img: pic.image}
      ))

      return data
    }
  }
})

const { reducer, actions } = imageContainer
export const { } = actions
export default reducer