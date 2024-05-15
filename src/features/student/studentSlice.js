import { createSlice } from '@reduxjs/toolkit'
import data from '../../../data.json'

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    value: data,
    name: 'Anna',
    mentor: ''
  },

  reducers: {
    addSubject: (state, action) => {
      state.value.push(action.payload);
    },

    removeSubject: (state, action) => {
      state.value = state.value.filter((item) => item.subject !== action.payload);
    },

    selectMentor: (state, action) => {
      state.mentor = action.payload;
    }

  }
})

export const { addSubject, removeSubject, selectMentor } = studentSlice.actions;

export default studentSlice.reducer

/**
 * A "slice" is a collection of Redux reducer logic and actions for a single feature in your app
 */