import React, {Component} from 'react';
import MenuItem from './MenuItem'

class Menu extends Component {
    render() {
        console.log(this.props);

        const items = this.props.items.map((item, index) => {
             return <MenuItem key={index} href = {item.href}>{item.title}</MenuItem>;
        });

        return (
          <ul>
              {items}
          </ul>
        );
    }
  }
  
export default Menu;