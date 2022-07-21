import ZoomBtn from '../buttons/ZoomBtn';

import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 미리보기 프레임 */
function PreviewFrame() {
  return (
    <div>
      <div className="previewFrame"></div>
      <ZoomBtn />
    </div>
  );
}

export default PreviewFrame;
