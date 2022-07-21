import '../../styles/common/_Buttons.scss';
import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 파일 선택 버튼 */
function FileBtn() {
  return (
    <div className="btnFrame">
      <input type="file" id="selectBtn" />
      <button className="commonBtn" htmlFor="selectBtn">
        파일 선택
      </button>
    </div>
  );
}

export default FileBtn;
