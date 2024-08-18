import { useContext } from "react"
import UserContext,{ User }from "../contexts/UserContext"

const Profile = () => {

    const user: User = useContext(UserContext)

    console.log(user);
    

    if(!user){
        return <h1>Not logged in</h1>
    }
    return (
        <h2>Profile: {user.username}</h2>
    )
}

export default Profile