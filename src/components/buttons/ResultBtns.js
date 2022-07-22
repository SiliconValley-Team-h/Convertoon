import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/common/_Buttons.scss';
import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 수정 및 저장 버튼 */
function ResultBtns() {
  const { resultImg } = useContext(ImgInfoContext);
  const navigate = useNavigate();

  /* 수정 페이지로 이동 */
  function onClickModify() {
    navigate('/modify-text');
  }

  /* 이미지 저장 */
  function onClickSave() {
    saveAs(resultImg, 'result.png');
  }

  return (
    <div className="btnFrame">
      <button className="resultBtns" disabled={resultImg === '' ? true : false} onClick={onClickModify}>
        수정
      </button>
      <button className="resultBtns" disabled={resultImg === '' ? true : false} onClick={onClickSave}>
        저장
      </button>
    </div>
  );
}

export default ResultBtns;
