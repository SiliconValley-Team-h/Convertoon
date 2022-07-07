import React, { Component } from 'react';
import './State.css';

class State extends Component {
  render() {
    const { value, children } = this.props;
    return (
      <div className="container">
        <section className="viewBox">원본</section>
        <section className="viewBox">
          {value} {children}
        </section>
      </div>
    );
  }
}

export default State;
