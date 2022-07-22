import { useState } from 'react';

import ZoomBtn from '../buttons/ZoomBtn';

import '../../styles/common/_Images.scss';
import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 미리보기 프레임 */
function PreviewFrame(props) {
  const [ratio, setRatio] = useState(1);

  function zoomIn() {
    setRatio(ratio => ratio + 0.25);
  }

  function zoomOut() {
    setRatio(ratio >= 1.25 ? ratio - 0.25 : 1.0);
  }

  return (
    <div>
      <div className="previewFrame">
        {props.img !== '' && (
          <img
            className="weebtoonImg"
            src={props.img}
            alt={props.alt}
            style={{
              width: `${65 * ratio}%`,
              transform: `scale(${ratio})`,
              transformOrigin: 'left top',
            }}
          />
        )}
      </div>
      <ZoomBtn zoomIn={zoomIn} zoomOut={zoomOut} />
    </div>
  );
}

export default PreviewFrame;
