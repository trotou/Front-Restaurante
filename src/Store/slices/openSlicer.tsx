import { createSlice } from '@reduxjs/toolkit';

export interface OpenState {
  value: boolean;
}

const initialState: OpenState = {
  value: false,
};

export const openSlicer = createSlice({
  name: 'open',
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.value = true;
    },
    handleClose: (state) => {
      state.value = false;
    },
  },
});

export const { handleClose, handleOpen } = openSlicer.actions;

export default openSlicer.reducer;
