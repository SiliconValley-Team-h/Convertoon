import { useContext, useEffect } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/common/_Buttons.scss';

/* convertoon 페이지의 언어 선택 드롭다운 */
function LanDropdown(props) {
  const { lan, setLan } = useContext(ImgInfoContext);

  useEffect(() => {}, [lan]);

  /* 언어 선택 시 lan 변수에 저장 */
  function onChangeLan(event) {
    if (event.target.value !== 'none') {
      props.setSelectLan(event.target.value);
      lan === null && setLan(event.target.value);
    }
  }

  return (
    <select className="lanDropDown" defaultValue={lan === null ? 'none' : lan} onChange={onChangeLan}>
      <option value="none" disabled={true}>
        언어 선택
      </option>
      <option value="en">영어</option>
      <option value="ja">일본어</option>
      <option value="zh-CN">중국어 간체</option>
      <option value="zh-TW">중국어 번체</option>
      <option value="vi">베트남어</option>
      <option value="id">인도네시아어</option>
      <option value="de">독일어</option>
      <option value="ru">러시아어</option>
      <option value="es">스페인어</option>
      <option value="it">이탈리아어</option>
      <option value="fr">프랑스어</option>
    </select>
  );
}

export default LanDropdown;
