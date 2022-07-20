import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

class API_Service {
  setImg(img) {
    return axios.post(API_BASE_URL + '/results/', img);
  }

  getAllText(img_id) {
    return axios.get(API_BASE_URL + `/extractTexts/${img_id}/`);
  }

  getSrcImg(img_id) {
    return axios.get(API_BASE_URL + `/getSrcImg/${img_id}/`);
  }

  getTransText(img_id) {
    return axios.post(API_BASE_URL + `/translate/${img_id}/`);
  }

  getResultImg(img_id) {
    return axios.get(API_BASE_URL + `getInsTextImg/${img_id}/`);
  }

  setSrcText(img_id) {
    return axios.post(API_BASE_URL + `srcModify/${img_id}/`);
  }

  setTrsText(img_id) {
    return axios.post(API_BASE_URL + `trsModify/${img_id}/`);
  }

  setLang(img_id) {
    return axios.post(API_BASE_URL + `translate/${img_id}/`);
  }
}
