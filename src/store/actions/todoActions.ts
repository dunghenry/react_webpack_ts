import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getTodoById = createAsyncThunk(
    'todo/getTodoById',
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
            );
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    },
);
