import React, { useEffect, useState } from 'react'
import {useLoaderData, useParams} from "react-router-dom"

const User = () => {

    const data = useLoaderData()

    // const {userId} = useParams() // extract params from url
    // const [data, setData] = useState([])

    // takes place only when this particular component loads
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohitrasam')
    //     .then((response) => response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data)
    //     })
    // }, [])


    return (
        <>
            <div>Hey {data.name}</div>
            <div>Followers {data.followers}</div>
        </>
    )
}

export default User

// usually put in another folder
export const userInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rohitrasam')
    console.log(response);
    
    return response.json()
}