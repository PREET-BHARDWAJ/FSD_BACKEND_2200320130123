import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister =async (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const age =e.target.age.value;
        const users={name,age}
        await axios.post('http://localhost:9000/users',users)
        alert('User registered successfully')
    }
  return (
    <div>
      <form onSubmit={handleregister}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register