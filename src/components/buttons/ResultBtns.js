import '../../styles/common/_Buttons.scss';
import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 수정 및 저장 버튼 */
function ResultBtns() {
  return (
    <div className="btnFrame">
      <button className="resultBtns">수정</button>
      <button className="resultBtns">저장</button>
    </div>
  );
}

export default ResultBtns;
