import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions'

import User from '../components/User';

class UsersList extends Component {

  render() {
    console.log(this.props);
    if (!this.props.users.length) {
      return null;
    }

    const users = this.props.users.map(user => {
      return <User key={user.id} {...user} />
    })

    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    )
  }

  componentDidMount() {
      this.props.dispatch(fetchUsers())
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
  }
}

export default connect(mapStateToProps)(UsersList);
