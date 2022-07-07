import zoomin from './zoomin.png';
import zoomout from './zoomout.png';
function ZoomBtn() {
  return (
    <section
      style={{
        color: 'black',
        backgroundColor: '#A5A5A5',
        border: 0,
        width: '70px',
        borderRadius: '40px',
        textAlign: 'center',
        paddingTop: '5px',
      }}
    >
      <img src={zoomin} alt="확대" style={{ width: '20px', height: '20px' }}></img>
      <img src={zoomout} alt="축소" style={{ marginLeft: '5px', width: '20px', height: '20px' }}></img>
    </section>
  );
}

export default ZoomBtn;
