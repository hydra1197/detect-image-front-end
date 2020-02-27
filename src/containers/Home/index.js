import React from 'react';
import { connect } from 'react-redux';
import { DetectForm, DetectResult, Loader } from '../../components';
import { detectImage, clearResultData } from '../../redux/Detect/actions';

const Home = ({ detectResult, isDetecting, detectImage }) => {
  return (
    <div>
      <DetectForm onSubmit={detectImage} />

      {isDetecting && <Loader />}

      {detectResult && Object.keys(detectResult).length > 0 && (
        <DetectResult result={detectResult} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  detectResult: state.detect.result,
  isDetecting: state.detect.isDetecting,
});

const actionCreators = {
  detectImage,
  clearResultData,
};

export default connect(mapStateToProps, actionCreators)(Home);
