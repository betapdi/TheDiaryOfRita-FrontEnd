import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mangaApi from '../../../api/mangaApi'

export const addChapter = createAsyncThunk(
  'chapter/addChapter',

  async (data) => {
    const response = await mangaApi.addChapter(data)
    return response
  }
)

export const addMultipleChapters = createAsyncThunk(
 'chapter/addMultipleChapters',
 
  async (data) => {
    const response = await mangaApi.addMultipleChapters(data)
    return response
  }
)

export const getChapterList = createAsyncThunk(
  'chapter/getChapterList',

  async (data) => {
    const response = await mangaApi.getChapterList(data)
    return response
  }
)

const chapter = createSlice({
  name: 'chapter',
  initialState: [],
  reducers: {

  },

  extraReducers: {
    [getChapterList.fulfilled]: (state, action) => {
      const data = action.payload.map((chapter) => (
        {id: chapter.id, index: chapter.index, title: chapter.title}
      ))

      return data
    }
  }
})

const { reducer, actions } = chapter
export const { } = actions
export default reducer