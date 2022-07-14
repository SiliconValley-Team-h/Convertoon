/* 언어 선택하는 섹션 */
import Arrow from './Arrow.png';

function SelectLang(props) {
  function selectLang(e) {
    if (e.target.value !== 'none') {
      props.transData(true);
    }
  }
  return (
    <p style={{ textAlign: 'center' }}>
      한국어
      <img src={Arrow} alt="arrow" style={{ width: '40px', verticalAlign: 'middle', margin: '0 20px' }} />
      <select defaultValue={'none'} onChange={selectLang}>
        <option value="none">언어 선택</option>
        <option value="English">English</option>
      </select>
    </p>
  );
}

export default SelectLang;
