import React from 'react'

export class User{
    username!: string
    password!: string

}
const UserContext = React.createContext(User)

export default UserContext;