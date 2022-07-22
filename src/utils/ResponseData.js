// 서버에 데이터 전송 후 결과 확인
export function ResponseData(response) {
  if (response.data === 'success') {
    console.log('post success');
  }
}
