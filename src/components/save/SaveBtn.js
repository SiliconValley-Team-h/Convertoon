import { saveAs } from 'file-saver';

function SaveBtn({ img }) {
  const onClickSave = () => {
    saveAs(img, 'result.png');
  };

  return (
    <button
      className="SaveBtn"
      onClick={onClickSave}
      style={{
        color: 'black',
        backgroundColor: '#fcdd9e',
        border: 0,
        width: '70px',
        borderRadius: '40px',
        textAlign: 'center',
        position: 'absolute',
        right: '20px',
        cursor: 'pointer',
      }}
    >
      저장
    </button>
  );
}

export default SaveBtn;
