import imgIcon from '../images/imgIcon.png';

import '../../styles/layout/_CvtImgFrame.scss';
import '../../styles/common/_Images.scss';
import '../../styles/common/_Texts.scss';

function ImgView(props) {
  return (
    <div className="imgViewFrame">
      <div>
        <img className="imgIcon" src={imgIcon} alt="icon" />
        <div className="guidText">
          {props.firstLine}
          <br />
          {props.secondLine}
        </div>
      </div>
    </div>
  );
}

export default ImgView;
