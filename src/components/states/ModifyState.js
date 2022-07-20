import React from 'react';
import '../../styles/common/_ModifyState.scss';

/*ModifyText 페이지에서 사용할 State*/
function ModifyState() {
  return (
    <div className="modifyContainer">
      <section className="viewBox">원본</section>
      <section className="viewBox">추출된 텍스트</section>
      <section className="viewBox">번역된 텍스트</section>
    </div>
  );
}

export default ModifyState;
