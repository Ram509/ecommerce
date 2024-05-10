import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const  [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/users/login', {
      email, 
      password
    });
    console.log(response.data);
  }catch (error) {
    console.log(error);
  }
};
 return (

<form onSubmit={handleSubmit}
  <label htmlfor="email">Email:</label>
<input
   type="email"
   id="email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
/>
<br/>
<label htmlFor="password">Password:</label>
<input
   type="password"
   id="password"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
/>
<br/>
 <button type="submit">Login</button>
</form>
);
}
export default Login;
