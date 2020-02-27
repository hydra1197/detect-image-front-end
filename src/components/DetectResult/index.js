import React from 'react';
import { Divider } from 'semantic-ui-react';
import { ImageCard } from '../../components';
import cls from './detect-result.module.scss';

const DetectResult = ({ result }) => {
  return (
    <div className={cls.wrapper}>
      <Divider />

      <div className={cls.result}>
        <ImageCard
          url={result.url}
          labels={result.labels}
          createdAt={result.createdAt}
        />
      </div>
    </div>
  );
};

export default DetectResult;
