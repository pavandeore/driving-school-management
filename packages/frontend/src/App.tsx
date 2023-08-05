import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Input from './Components/Input';
import UserList from './Components/UserList';
import UpdateName from './Components/UpdateName';

import Admin from './routes/admin/index';
import User from './routes/user/index';
import Instructor from './routes/instructor/index';
import Home from './routes/home/index';

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4001/graphql",
    cache: new InMemoryCache()
  })

  return (
    
    <ApolloProvider client={client}>
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user/dashboard" element={<User />} />
          <Route path="/instructor/dashboard" element={<Instructor />} />
        </Routes>

        {/* <Input />     
        <UserList />
        <UpdateName /> */}
    </div>
    </ApolloProvider>
  );
}

export default App;
