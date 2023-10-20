import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../config/axiosInstance';

type Post = {
  questionId: string;
  questionValue: string;
  questionOptions: {
    optionId: string;
    option: string;
    checked: boolean;
  }[];
}[];

export const getTest = createAsyncThunk('test/get', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const res = await response.json();
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postTest = createAsyncThunk('test/post', async (data: Post, { rejectWithValue }) => {
  try {
    console.log(data, 'thunk');
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData = await response.json();
    console.log('responseData: ', responseData);
    return responseData;
  } catch (error) {
    return rejectWithValue(error);
  }
});
