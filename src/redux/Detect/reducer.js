import {
  GET_DETECT_LIST_LOADING,
  SET_DETECT_LIST,
  DETECT_IMAGE_LOADING,
  SET_DETECT_DATA,
  CLEAR_RESULT_DATA,
} from './types';

const initialState = {
  result: {},
  list: [],
  isLoadMore: false,
  isFetching: false,
  isDetecting: false,
};

const detect = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DETECT_LIST_LOADING:
      return {
        ...state,
        isFetching: actions.payload.status,
      };

    case SET_DETECT_LIST:
      return {
        ...state,
        list: actions.payload.loadMore
          ? state.list.concat(actions.payload.data)
          : actions.payload.data,
        isLoadMore: actions.payload.data.length >= 4,
      };
    case DETECT_IMAGE_LOADING:
      return {
        ...state,
        isDetecting: actions.payload.status,
      };
    case SET_DETECT_DATA:
      return {
        ...state,
        result: actions.payload.data,
      };
    case CLEAR_RESULT_DATA:
      return {
        ...state,
        result: {},
      };
    default:
      return state;
  }
};

export default detect;
