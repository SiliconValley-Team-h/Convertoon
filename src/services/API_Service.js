import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:8000';
const API_BASE_URL = `${BASE_URL}/api`;

export function postImg(img) {
  return axios.post(API_BASE_URL + '/results/', img);
}

export function getAllText(img_id) {
  return axios.get(API_BASE_URL + `/extractTexts/${img_id}/`);
}

export function getSrcImg(img_id) {
  return axios.get(API_BASE_URL + `/getSrcImg/${img_id}/`);
}

export function getTransText(img_id, lan) {
  return axios.post(API_BASE_URL + `/translate/${img_id}/`, JSON.stringify({ LAN: `${lan}` }));
}

export function getResultImg(img_id) {
  return axios.get(API_BASE_URL + `/getInsTextImg/${img_id}/`);
}

export function setSrcText(img_id) {
  return axios.post(API_BASE_URL + `/srcModify/${img_id}/`);
}

export function setTrsText(img_id, trsModTexts, cnt) {
  return axios.post(API_BASE_URL + `/trsModify/${img_id}/`, { text_lists: trsModTexts, count: cnt, img_id: img_id });
}

export function setLang(img_id, srcModTexts, cnt) {
  return axios.post(API_BASE_URL + `/translate/${img_id}/`, { text_lists: srcModTexts, count: cnt, img_id: img_id });
}
