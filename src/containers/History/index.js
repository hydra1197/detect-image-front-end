import React from 'react';
import { connect } from 'react-redux';
import { DetectHistory } from '../../components';
import { getDetectList } from '../../redux/Detect/actions';

const History = ({ detectList, isLoadMore, isFetching, getDetectList }) => {
  return (
    <DetectHistory
      list={detectList}
      isLoadMore={isLoadMore}
      loading={isFetching}
      getDetectList={getDetectList}
    />
  );
};

const mapStateToProps = state => ({
  detectList: state.detect.list,
  isLoadMore: state.detect.isLoadMore,
  isFetching: state.detect.isFetching,
});

const actionCreators = {
  getDetectList,
};

export default connect(mapStateToProps, actionCreators)(History);
