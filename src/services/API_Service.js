import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export function getImgId(img) {
  return axios.post(API_BASE_URL + '/results/', img);
}

export function getAllText(img_id) {
  return axios.get(API_BASE_URL + `/extractTexts/${img_id}/`);
}

export function getSrcImg(img_id) {
  return axios.get(API_BASE_URL + `/getSrcImg/${img_id}/`);
}

export function getTransText(img_id) {
  return axios.post(API_BASE_URL + `/translate/${img_id}/`);
}

export function getResultImg(img_id) {
  return axios.get(API_BASE_URL + `getInsTextImg/${img_id}/`);
}

export function setSrcText(img_id, srcModTexts, lang) {
  return axios.post(API_BASE_URL + `srcModify/${img_id}/`, { LAN: lang });
}

export function setTrsText(img_id, trsModTexts, cnt) {
  return axios.post(API_BASE_URL + `trsModify/${img_id}/`, { text_lists: trsModTexts, count: cnt, img_id: img_id });
}

export function setLang(img_id, srcModTexts, cnt) {
  return axios.post(API_BASE_URL + `translate/${img_id}/`, { text_lists: srcModTexts, count: cnt, img_id: img_id });
}
