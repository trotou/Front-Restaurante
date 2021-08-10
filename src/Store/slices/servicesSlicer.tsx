import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services';

export interface UserType {
  email: string;
  nome: string;
  username?: string;
  salario?: number;
}

export interface UserListState {
  userList: Array<UserType>;
  update: boolean;
}

const initialState: UserListState = {
  userList: [],
  update: false,
};

export const serviceSlicer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    handleUserList: (state, action) => {
      state.userList = action.payload;
    },

    handleUpdate: (state) => {
      state.update = !state.update;
    },
  },
});

export const { handleUserList, handleUpdate } = serviceSlicer.actions;

export const registerForm = createAsyncThunk(
  'users/registerUser',
  async (data: UserType, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.post('/funcionarios', data);
      dispatch(handleUpdate());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.get('/funcionarios?page=1');
      dispatch(handleUserList(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await API.get(`/funcionarios/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      await API.patch(`/funcionarios/${id}`, { usuario: null });
      await API.delete(`/funcionarios/${id}`);
      dispatch(handleUpdate());
      return true;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const patchUser = createAsyncThunk(
  'users/patchUser',
  async (arg: { id: number; data: boolean }, { dispatch, rejectWithValue }) => {
    try {
      await API.patch(`/funcionarios/${arg.id}`, { online: !arg.data });
      dispatch(handleUpdate());
      return true;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default serviceSlicer.reducer;
