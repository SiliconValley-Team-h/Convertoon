/* 텍스트 추출 버튼 */
function ExtractBtn() {
    return (
      <button
        className="ExtractBtn"
        style={{
          color: "black",
          backgroundColor: "#c2c2c2",
          border: 0,
          borderRadius: "40px",
          fontSize: "18px",
          width: "130px",
          height: "40px",
          textAlign: "center",
          margin: "30px auto",
        }}
      >
        추출
      </button>
    );
  }
  
  export default ExtractBtn;