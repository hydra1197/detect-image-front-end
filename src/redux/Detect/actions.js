import axios from 'axios';
import qs from 'qs';
import { toast } from 'react-toastify';
import {
  GET_DETECT_LIST_LOADING,
  SET_DETECT_LIST,
  DETECT_IMAGE_LOADING,
  SET_DETECT_DATA,
  CLEAR_RESULT_DATA,
} from './types';
import configs from '../../configs';

/*  Get detect list  */
const getDetectListLoading = status => ({
  type: GET_DETECT_LIST_LOADING,
  payload: { status },
});

const setDetectList = (data, loadMore) => ({
  type: SET_DETECT_LIST,
  payload: { data, loadMore },
});

export const getDetectList = (query, loadMore) => async dispatch => {
  try {
    dispatch(getDetectListLoading(true));

    const response = await axios.get(
      `${configs.CLOUD_FUNCTION_API}/getDetectList?${qs.stringify(query)}`
    );

    dispatch(setDetectList(response.data.data, loadMore));
    dispatch(getDetectListLoading(false));
  } catch (e) {
    toast.error(
      (e.response &&
        e.response.data &&
        e.response.data.data &&
        e.response.data.data.error &&
        e.response.data.data.error.message) ||
        e.message
    );
    dispatch(getDetectListLoading(false));
  }
};

/*  Detect image  */
const detectImageLoading = status => ({
  type: DETECT_IMAGE_LOADING,
  payload: { status },
});

const setDetectData = data => ({
  type: SET_DETECT_DATA,
  payload: { data },
});

export const detectImage = (data, imageUrl) => async dispatch => {
  try {
    dispatch(detectImageLoading(true));
    dispatch(clearResultData());

    const response = await axios.post(
      `${configs.CLOUD_FUNCTION_API}/detectImage`,
      { ...data }
    );

    const detectData = {
      url: imageUrl,
      labels: response.data.data.labelAnnotations,
      createdAt: new Date().toUTCString(),
    };

    await axios.post(`${configs.CLOUD_FUNCTION_API}/insertDetectData`, {
      data: detectData,
    });

    dispatch(setDetectData(detectData));
    dispatch(detectImageLoading(false));
  } catch (e) {
    toast.error(
      (e.response &&
        e.response.data &&
        e.response.data.data &&
        e.response.data.data.error &&
        e.response.data.data.error.message) ||
        e.message
    );
    dispatch(detectImageLoading(false));
  }
};

/*  Clear result data  */
export const clearResultData = () => ({
  type: CLEAR_RESULT_DATA,
});
