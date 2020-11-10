import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.scss';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Hassan' },
    { id: 2, name: 'Mustapha' },
    { id: 3, name: 'Younes' },
  ]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className='app'>
      <h1>Web / Mobile Developers</h1>
      <h2>users : </h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
