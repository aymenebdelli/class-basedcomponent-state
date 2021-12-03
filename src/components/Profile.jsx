import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    console.log('constructor(props)');
    super(props);
    this.state = {
      visibility: false,
      intervall: null,
      counter: 0,
    };
  }

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };

  componentDidMount() {
    console.log('componentDidMount()');
    this.setState({
      intervall: setInterval(() => {
        this.setState({
          counter: this.state.counter + 1,
        });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');

    return (
      <div className='align-items'>
        <section>
          <ul>
            <li>{this.props.fullName}</li>
            <li>{this.props.bio}</li>
            <li>{this.props.children}</li>
            <li>{this.props.proffession}</li>
          </ul>
          <h2 style={{ color: 'azure', fontWeight: 'bold' }}>
            {this.state.counter}
          </h2>
        </section>
      </div>
    );
  }
}

export default Profile;
