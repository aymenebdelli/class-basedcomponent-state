import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Video from './components/video/space.mp4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }
  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };

  render() {
    return (
      <div className='App'>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={Video} type='video/mp4' />
        </video>

        <button className='visibility-btn' onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility ? (
          <Profile
            fullName='Jhon Wick'
            bio='Movie Hero'
            proffession='Payed Killer'
          >
            <div>
              <img
                src='https://fr.web.img5.acsta.net/pictures/19/05/21/15/23/4992794.jpg'
                width='25%'
              />
            </div>
          </Profile>
        ) : null}
      </div>
    );
  }
}

export default App;
