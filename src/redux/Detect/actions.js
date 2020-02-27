import { axiosRequest, handleError } from '../../helpers';
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

    const response = await axiosRequest.get(
      `${configs.CLOUD_FUNCTION_API}/getDetectList`,
      query
    );

    dispatch(setDetectList(response.data.data, loadMore));
    dispatch(getDetectListLoading(false));
  } catch (e) {
    dispatch(getDetectListLoading(false));
    handleError(e);
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

    const response = await axiosRequest.post(
      `${configs.CLOUD_FUNCTION_API}/detectImage`,
      { ...data }
    );

    const detectData = {
      url: imageUrl,
      labels: response.data.data.labelAnnotations,
      createdAt: new Date().toUTCString(),
    };

    await axiosRequest.post(`${configs.CLOUD_FUNCTION_API}/insertDetectData`, {
      data: detectData,
    });

    dispatch(setDetectData(detectData));
    dispatch(detectImageLoading(false));
  } catch (e) {
    handleError(e);
    dispatch(detectImageLoading(false));
  }
};

/*  Clear result data  */
export const clearResultData = () => ({
  type: CLEAR_RESULT_DATA,
});
