import React from 'react';
import './State.scss';

function State(props) {
  const { value, children } = props;
  return (
    <div className="container">
      <section className="viewBox">원본</section>
      <section className="viewBox">
        {value} {children}
      </section>
    </div>
  );
}

export default State;
