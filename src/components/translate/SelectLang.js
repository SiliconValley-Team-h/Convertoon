/* 언어 선택하는 섹션 */
import Arrow from './Arrow.png';

function SelectLang(props) {
  function selectLang(e) {
    if (e.target.value !== 'none') {
      props.transData(e.target.value);
    }
  }
  return (
    <p style={{ textAlign: 'center' }}>
      한국어
      <img src={Arrow} alt="arrow" style={{ width: '40px', verticalAlign: 'middle', margin: '0 20px' }} />
      <select defaultValue={'none'} onChange={selectLang}>
        <option value="none">언어 선택</option>
        <option value="en">영어</option>
        <option value="ja">일본어</option>
        <option value="zh-CN">중국어 간체</option>
        <option value="zh-TW">중국어 번체</option>
        <option value="vi">베트남어</option>
        <option value="id">인도네시아어</option>
        <option value="th">태국어</option>
        <option value="de">독일어</option>
        <option value="ru">러시아어</option>
        <option value="es">스페인어</option>
        <option value="it">이탈리아어</option>
        <option value="fr">프랑스어</option>
      </select>
    </p>
  );
}

export default SelectLang;
