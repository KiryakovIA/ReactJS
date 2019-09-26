import React, {Component} from 'react';

class Login extends Component {
    render() {
      return (
        <form action="">
            <label htmlFor="name">Логин</label>
            <input type="text" name="name" />
            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" />
            <button>Войти</button>
        </form>
      );
    }
  }
  
export default Login;