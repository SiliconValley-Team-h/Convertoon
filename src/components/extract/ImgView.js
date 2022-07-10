/* 파일 선택 전 보여줄 이미지 & 텍스트 */
import IconImg from './IconImg.png';
import PropTypes from 'prop-types';

function ImgView({ visible, image }) {
  return (
    <div>
      {visible && <img src={image} alt="previewImg" style={{ width: '100%' }} />}
      {visible || (
        <div>
          <img
            src={IconImg}
            alt="icon"
            style={{
              width: '45px',
              textAlign: 'center',
              justifyContent: 'center',
              margin: '10px',
            }}
          />
          <div style={{ fontSize: '18px' }}>
            선택한 이미지가
            <br />
            여기에 보여집니다.
          </div>
        </div>
      )}
    </div>
  );
}

ImgView.propTypes = {
  visible: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImgView;
