/* 이미지 업로드 부분 */
function InputImg() {
  return (
    <div>
      <input
        type="file"
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          height: '10vh',
          width: '30vh',
          padding: '45% 0% 30% 30%',
          border: 'dashed 1px #000',
        }}
      />
    </div>
  );
}

export default InputImg;
