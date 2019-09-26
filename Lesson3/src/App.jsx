import React, {Component} from 'react';
import Menu from './Menu';
import Login from './Login';

import './style.css';

class App extends Component {
  render() {
    const items = [
      { href: "/", title: "Главная" },
      { href: "/", title: "Контакты" }
    ];

    return (
      <div>
        <Menu items={items} />
        <Login />
      </div>
    );
  }
}


export default App;
