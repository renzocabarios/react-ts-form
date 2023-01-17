import { createSlice } from "@reduxjs/toolkit";
import { RESOURCE } from '../../constants'
import { initialState } from './sample.state'

export const sampleSlice = createSlice({
  name: RESOURCE.SAMPLE,
  initialState,
  reducers: {},
});

export const { } = sampleSlice.actions;

export default sampleSlice.reducer;
