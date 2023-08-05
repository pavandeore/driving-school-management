import React, {useState} from 'react'
import { CREATE_USER } from '../Graphql/Mutation';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client'




const Input = () => {
const [name, setName] = useState('');
const [createUser, {error}] = useMutation(CREATE_USER);

  return (
    <>
    <input type='text' placeholder='User' onChange={(e) => setName(e.target.value)} />
    <button onClick={() => createUser({ variables: { name } })}>Add New User </button>
    </>
  )
}

export default Input