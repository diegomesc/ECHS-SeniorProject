import { createSlice } from '@reduxjs/toolkit'

const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    media: null,
  },
  reducers: {
    setPreviewMedia(state, action) {
      state.media = action.payload;
    }
  }
})

export const { setPreviewMedia } = previewSlice.actions;

export const selectPreviewMedia = (state) => state.icons.media;

export default previewSlice.reducer