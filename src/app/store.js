import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/student/studentSlice'

export default configureStore({
  reducer: {
    student: studentReducer
  }
})

/**
 * We have a state.student section of our Redux state object
 * The studentReducer function of managing updates for the state.student section whenever an action is dispatched.
 * Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). 
 * configureStore sets up the store so that the Redux DevTools Extension can inspect its contents.
 */