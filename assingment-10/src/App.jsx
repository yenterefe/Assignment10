import './App.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Login from './Login';


function App() {

  let isUserCreated = false
  let button;

  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers || [];
  })


  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users]);



  function handleUserName(e) {
    setUserName(e.target.value);
    console.log(`username :${userName}`);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(`password:${password}`);
  }

  function onClick() {

    const newUser = {
      name: userName,
      password: password,
    }
    setUsers([...users, newUser]);
    isUserCreated = true;
    console.log(isUserCreated);
    setDisplay(true)


  }



  return (
    <>
      <h4>Sign Up</h4>
      <label>Create a username:</label>
      <input type="text" value={userName} onChange={handleUserName} />
      < br />

      <br />
      <label>Create a password:</label>
      <input type="password" value={password} onChange={handlePassword} />
      <br />
      <br />

      {display ? <Link to="/Login"><button>login</button></Link> : <button onClick={onClick}>submit</button>}
      <br />
      <br />
      <h4>Already have an account? Click here!</h4>
      <Link to="/Login"><button >Click me</button></Link>

    </>
  )
}

export default App


