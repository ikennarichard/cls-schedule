import useForm from "../hooks/useForm"

export const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(login);

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.7px',
    marginTop: '5px'
  }
  function login() {
    console.log('Sign up successful', values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={styles}>
          <label htmlFor="email">Email Address
          </label>
          <input onChange={handleChange} value={values.email || ''} type="email" name="email" required />
        </div>
        <div style={styles}>
          <label htmlFor="password">Password
          </label>
          <input onChange={handleChange} type="password" value={values.password || ''} name="password" required />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}
