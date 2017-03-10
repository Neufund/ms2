import React, { Component } from 'react';
import './Index.css';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="Index-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Index-intro">
          To get started, edit <code>src/app/Index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Index;
