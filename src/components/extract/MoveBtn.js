import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MoveBtn() {
  return (
    <Link to={`/translate`} style={{ position: 'absolute', right: '20px' }}>
      <button
        style={{
          color: 'black',
          backgroundColor: '#fcdd9e',
          border: 0,
          width: '100px',
          borderRadius: '40px',
          textAlign: 'center',
        }}
      >
        번역하러가기
      </button>
    </Link>
  );
}

export default MoveBtn;
