import { createSlice } from '@reduxjs/toolkit';
import { getTest } from './testThunk';
interface StateType {
  test: {
    questionId: string;
    questionOptions: {
      checked: boolean;
      option: string;
      optionId: string;
    }[];
    questionValue: string;
  }[];
}
const initialState: StateType = {
  test: []
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTest.fulfilled, (state, { payload }) => {
      state.test = payload;
    });
  }
});
