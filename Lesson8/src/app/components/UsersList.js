import React, { useState, useEffect } from 'react';
//import React, { Component } from 'react';
import axios from 'axios';

import User from './User';


const UsersList = (props) => {
  const [usersState, setUsersState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsersState(response.data)
      })
  }, []);


  if (!usersState.length) {
    return null;
  }

  const users = usersState.map((user) => {
    return <User key={user.id} {...user} />
  });

  return (
    <div>
      <h1>Пользователи</h1>
      {users}
    </div >
  )

}

export default UsersList;


/*export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    if (!this.state.users.length) {
      return null;
    }

    const users = this.state.users.map((user) => {
      return <User key={user.id} {...user} />
    });

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div >
    )
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ users: response.data })
      })
  }
}*/


