/* 언어 선택하는 섹션 */
import Arrow from './Arrow.png';

function SelectLang() {
  return (
    <p style={{ textAlign: 'center' }}>
      한국어
      <img src={Arrow} alt="arrow" style={{ width: '40px', verticalAlign: 'middle', margin: '0 20px' }} />
      <select>
        <option value="none" selected>
          언어 선택
        </option>
        <option value="English">English</option>
      </select>
    </p>
  );
}

export default SelectLang;
