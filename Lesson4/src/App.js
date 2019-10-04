import React, {Component} from 'react';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

import './style.css';

class App extends Component {
  render() {
    const posts = [
        {
            title: "Пост 1",
            postBody: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        },
        {
            title: "Пост 2",
            postBody: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
        }
    ];

    return (
        <div>
            <WelcomeModal />
            <Blog items = {posts}/>
        </div>
    );
  }
}


export default App;
