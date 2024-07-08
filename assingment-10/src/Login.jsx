
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    let usersInfo = JSON.parse(localStorage.getItem("users"));

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("");

    function handleUserName(e) {
        setUserName(e.target.value);
        console.log(`username :${userName}`);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
        console.log(`password:${password}`);
    }


    function logUser() {

        const loginUsername = usersInfo.find((userInfo) => userInfo.name === userName);
        const loginPassword = usersInfo.find((userInfo) => userInfo.password === password);


        if (loginUsername && loginPassword) {
            navigate('/home');
        }

        else if (loginUsername && !loginPassword) {
            alert("Wrong password");
        }

        else {
            alert("user does not exist");
        }

    }

    return (
        <>
            <h4> Login Credentials</h4>
            <label>Enter username:</label>
            <input type="text" value={userName} onChange={handleUserName} />
            < br />
            <br />
            <label>Create a password:</label>
            <input type="password" value={password} onChange={handlePassword} />
            <br />
            <br />
            <button onClick={logUser}>submit</button>
        </>
    )
}

export default Login