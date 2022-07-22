import { useRef, useEffect, useContext } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';
import { postImg } from '../../services/API_Service';
import '../../styles/common/_Buttons.scss';
import '../../styles/layout/_CvtImgFrame.scss';

/* convertoon 페이지의 파일 선택 버튼 */
function FileBtn() {
  const { srcImg, setSrcImg, imgId, setImgId, extrTexts, setExtrTexts } = useContext(ImgInfoContext);
  const imageInput = useRef();

  useEffect(() => {}, [srcImg]);
  useEffect(() => {
    console.log(`imgId:${imgId}`);
  }, [imgId]);
  useEffect(() => {}, [extrTexts]);

  /* 파일 선택 버튼 클릭 시 이미지 선택 가능 */
  function onClickInput() {
    imageInput.current.click();
  }

  /* 이미지 파일 읽기 위한 함수  */
  function encodeFileToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file); // 이미지 파일을 base64로 인코딩
    return new Promise(resolve => {
      reader.onload = () => {
        setSrcImg(reader.result); // reader.result 안의 문자열을 img에 세팅
        resolve();
      };
    });
  }

  /* 이미지 파일 선택 시 서버에 파일 전송  */
  function onChangeImg(event) {
    encodeFileToBase64(event.target.files[0]);

    let formData = new FormData();
    formData.append('image', event.target.files[0]);
    postImg(formData).then(response => {
      setImgId(response.data.img_id);
      response.data.text_lists.map(texts => setExtrTexts(textArray => [...textArray, texts]));
    });
  }

  return (
    <div className="btnFrame">
      <input type="file" id="selectBtn" ref={imageInput} onChange={onChangeImg} />
      <button className="commonBtn" htmlFor="selectBtn" onClick={onClickInput}>
        파일 선택
      </button>
    </div>
  );
}

export default FileBtn;
