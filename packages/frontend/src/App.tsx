import React, {useState} from 'react';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Input from './Components/Input';
import UserList from './Components/UserList';
import UpdateName from './Components/UpdateName';


function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
    <div className="App">
        <Input />     
        <UserList />
        <UpdateName />
    </div>
    </ApolloProvider>
  );
}

export default App;
