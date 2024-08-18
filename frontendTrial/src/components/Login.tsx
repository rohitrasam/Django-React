import { BaseSyntheticEvent, useContext, useState } from "react"
import UserContext from "../contexts/UserContext"

const Login = () => {

    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e: BaseSyntheticEvent) => {
        console.log(e.timeStamp);
        
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <>
            <h2>Login</h2>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSubmit}>
                Log In
            </button>

        </>
    )
}

export default Login