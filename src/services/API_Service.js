import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000';
const API_BASE_URL = `${BASE_URL}/api`;

export function postImg(img) {
  /*이미지 업로드 및 텍스트 추출*/
  return axios.post(API_BASE_URL + '/results/', img);
}

export function getAllText(img_id) {
  /*추출된 텍스트 모두 가져오기*/
  return axios.get(API_BASE_URL + `/extractTexts/${img_id}/`);
}

export function getSrcImg(img_id) {
  /*이미지 ID에 해당하는 SrcImg가져오기*/
  return axios.get(API_BASE_URL + `/getSrcImg/${img_id}/`);
}

export function getTransText(img_id, lan) {
  /*추출된 텍스트 번역*/
  return axios.post(API_BASE_URL + `/translate/${img_id}/`, JSON.stringify({ LAN: `${lan}` }));
}

export function getResultImg(img_id) {
  /*텍스트 삽입된 이미지 가져오기*/
  return axios.get(API_BASE_URL + `/getInsTextImg/${img_id}/`);
}

export async function setSrcText(img_id, srcModTexts, lang) {
  /*추출된 텍스트 수정*/
  const url = API_BASE_URL + `srcModify/${img_id}/`;
  await axios.post(url, { text_lists: srcModTexts });
  axios.post(url, { LAN: lang });
}

export function setTrsText(img_id, trsModTexts) {
  /*번역된 텍스트 수정*/
  return axios.post(API_BASE_URL + `/trsModify/${img_id}/`, { text_lists: trsModTexts });
}
