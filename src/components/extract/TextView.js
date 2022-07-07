import ExtractBtn from './ExtractBtn';
import TextImg from './TextImg.png';

function ImageView() {
  return (
    <div>
      <img
        src={TextImg}
        alt="text"
        style={{
          width: '45px',
          textAlign: 'center',
          justifyContent: 'center',
          margin: '10px',
        }}
      />
      <div style={{ fontSize: '18px' }}>
        추출된 텍스트가
        <br />
        여기에 노출됩니다.
      </div>
      <ExtractBtn />
    </div>
  );
}

export default ImageView;
