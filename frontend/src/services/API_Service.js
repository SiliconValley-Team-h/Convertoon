import axios from 'axios';

// export const BASE_URL = 'http://127.0.0.1:8000';
export const BASE_URL = 'http://convertoon.shop';
const API_BASE_URL = `${BASE_URL}/api`;

export function postImg(img) {
  /*이미지 업로드 및 텍스트 추출*/
  return axios.post(API_BASE_URL + '/results/', img);
}

export function getTransText(img_id, lan) {
  /*추출된 텍스트 번역*/
  return axios.post(API_BASE_URL + `/translate/${img_id}/`, { LAN: lan });
}

export function getResultImg(img_id, lan) {
  /*텍스트 삽입된 이미지 가져오기*/
  return axios.get(API_BASE_URL + `/getInsTextImg/${img_id}/${lan}/`);
}

export function setSrcText(img_id, srcModTexts) {
  /*추출된 텍스트 수정*/
  return axios.post(API_BASE_URL + `/srcModify/${img_id}/`, { text_lists: srcModTexts });
}

export function setTrsText(img_id, trsModTexts, lan) {
  /*번역된 텍스트 수정*/
  return axios.post(API_BASE_URL + `/trsModify/${img_id}/`, { text_lists: trsModTexts, LAN: lan });
}
