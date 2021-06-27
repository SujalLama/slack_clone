import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client';


const usersQuery = gql`
 {
  allUsers {
    id
    username
  }
}
`

const Home = () => {
    const {loading, error, data} = useQuery(usersQuery);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if(data) {
            setUsers(data.allUsers)
        }
    }, [data])
    return (
        <div>
            {loading ? <h1>loading...</h1> 
            : error ? <h1>{error}</h1> 
            : <>
                {users.map(item => {
                    return(
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                        </div>
                    )
                })}
            </>}
        </div>
    )
}

export default Home
