/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { addSubject, removeSubject, selectMentor } from "../features/student/studentSlice";
import {Button, createTheme, ThemeProvider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from "../context/ThemeContext";
import '../styles/students.css';

export const Students = () => {
  const { value: subjects, name, mentor } = useSelector((state) => state.student);
  const { values: student, handleChange, handleSubmit } = useForm(handleAddSubject);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);

  function handleSelectMentor(e) {
    dispatch(selectMentor(e.target.value))
  }

  function handleAddSubject() {
    dispatch(addSubject(student))
  }

  function handleRemoveSubject(value) {
    dispatch(removeSubject(value))
  }

  const buttonTheme = createTheme({
    palette: {
      ochre: {
        main: '#f0df4c',
        dark: '#e9d83f',
        contrastText: '#242105',
      },
    },
  });

  return (
    <div className={`StudentList ${theme}`}>
      <ThemeProvider theme={buttonTheme}>
        <Button 
          onClick={toggleTheme} 
          variant="contained" 
          color='ochre'
          disableElevation
          style={{ float: 'right'}}
        >
           Toggle Theme
          </Button>
      </ThemeProvider>
      <h2>Hi, {name} </h2>
      <h3>Class Mentor - {mentor}</h3>
      {subjects.length ? <ol>
        {subjects.map((s, index) => (
          <li key={index}>
            <p>{s.subject}</p>
            <p>{s.duration}</p>
            <Button 
              onClick={() => handleRemoveSubject(s.subject)}
              variant="contained"
              color="error"
              disableElevation
            > 
              Remove <DeleteIcon style={{marginInlineStart: 5}}/>
            </Button>
          </li>
        ))}
      </ol> : <h3>No subjects added yet</h3>}
      <form onSubmit={handleSubmit} className="StudentForm">
        <fieldset>
          <legend>Seelct Subjects and Mentor</legend>
          <div>
            <label htmlFor="Grade">Mentor:</label>
            <select
                onChange={handleSelectMentor}
                name='subject'
                required
              >
                <option value="">Select a mentor</option>
                <option value="Miss. Elizabeth">Miss. Elizabeth</option>
                <option value="Mam. Lily">Mam. Lily</option>
                <option value="Mr. Peter">Mr. Peter</option>
              </select>
          </div>
          <div>
              <label htmlFor="name">Subject:</label>
              <select
                onChange={handleChange}
                name='subject'
                value={student.subject || ''}
                required
              >
                <option value="">Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="English">English</option>
                <option value="Art">Art</option>
              </select>
          </div>
          <div>
            <label htmlFor="Grade">Time:</label>
            <select
                onChange={handleChange}
                name='duration'
                value={student.duration || ''}
                required
              >
                <option value="">Select time</option>
                <option value="9:00 - 10:00">9:00 - 10:00</option>
                <option value="9:30 - 10:30">9:30 - 10:30</option>
                <option value="10:30 - 11:00">10:30 - 11:00</option>
                <option value="11:00 - 12:00">11:00 - 12:00</option>
              </select>
          </div>
          <Button 
            variant="outlined"
            type="submit"
            disableElevation
            disableRipple
            sx={{
              "&:hover": {
                border: "none"
              }
            }}
          >
            Submit
          </Button>
        </fieldset>
      </form>
  </div>
  )
}

/**
 * useSelector takes care of talking to the Redux store behind the scenes for us. 
 * If we pass in a selector function, it calls someSelector(store.getState()) for us, and returns the result.
 */