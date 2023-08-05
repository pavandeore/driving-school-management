import React, { useState } from 'react'
import {useMutation} from '@apollo/client';
import { UPDATE_USER } from '../Graphql/Mutation';

const UpdateName = () => {

    const [id, setId] = useState('');
    const [updateName, setUpdateName] = useState('');

    const [updateUser, {error}] = useMutation(UPDATE_USER);

  return (
    <div>
        <input type="text" placeholder='id' onChange={(e) => setId(e.target.value)} />
        <input type="text" placeholder='update name' onChange={(e) => setUpdateName(e.target.value)} />
        <button onClick={() => updateUser({variables: { id: id, name: updateName }})}>Update Name</button>
    </div>
  )
}

export default UpdateName