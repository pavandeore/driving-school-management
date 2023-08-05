import React from 'react'

import { GET_ALL_USERS } from '../Graphql/Queries'
import { useQuery, useMutation } from '@apollo/client';
import { DELTE_USER } from '../Graphql/Mutation';

const UserList = () => {

    const {data, error} = useQuery(GET_ALL_USERS);
    const [deleteUser] = useMutation(DELTE_USER);


  return (
    <div>UserList

        {
            data && data.getAllUsers.map((user: any) => { 
                return ( 
                    <p> 
                        {user.name} 
                        <button onClick={() => deleteUser({ variables: { id: user.id } })}>x</button>
                    </p> 
                ) 
            }) 
        }

    </div>
  )
}

export default UserList