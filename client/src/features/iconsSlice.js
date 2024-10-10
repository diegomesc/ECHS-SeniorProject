import { createSlice } from '@reduxjs/toolkit'

const iconsSlice = createSlice({
  name: 'icons',
  initialState: {
    iconsList: null,
  },
  reducers: {
    setIconsList(state, action) {
      state.iconsList = action.payload;
    }
  }
})

export const { setIconsList } = iconsSlice.actions;

export const selectIconsList = (state) => state.icons.iconsList;

export default iconsSlice.reducer