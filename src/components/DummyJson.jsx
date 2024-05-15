import { useEffect, useState } from "react";


export const DummyJson = () => {
  const [employees, setEmployees] = useState([])
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    const temp = formData;
    temp.set(e.target.name, e.target.value);
    setFormData(temp);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  }

  async function getEmployees() {
    try {
      const res = await fetch("../../data.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const employees = await res.json();
      setEmployees(employees);
      console.log(employees)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <div>
        <h2>Employees</h2>
        {
          employees.map((e, i) => (
            <div key={i}>
              <h2>- {e.name}</h2>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange} 
        />
      </label>

      <label>
        Phone:
        <input
          type="number"
          name="phone"
          onChange={handleChange} 
        />
      </label>
      <button>Submit</button>
      </form>
    </>
  )
}
