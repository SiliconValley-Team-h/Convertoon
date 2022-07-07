import React from 'react';
import './State.css';

function State({ children }) {
  return (
    <div className="container">
      <section className="viewBox">원본</section>
      <section className="viewBox">추출된 텍스트 {children}</section>
    </div>
  );
}

export default State;
