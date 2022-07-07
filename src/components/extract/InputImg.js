/* 이미지 선택 섹션 */
function InputImg() {
  return (
    <input
      type="file"
      style={{
        textAlign: 'center',
        justifyContent: 'center',
        height: '10vh',
        width: '20vw',
        padding: '45% 0% 30% 30%',
        border: 'dashed 1px #000',
      }}
    />
  );
}

export default InputImg;
