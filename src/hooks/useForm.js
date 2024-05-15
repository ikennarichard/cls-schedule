import { useState } from "react";

export default function useForm(callback) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  }
  return {
    values,
    handleChange,
    handleSubmit
  }
}
