import React from 'react';
import { Dimmer, Segment, Loader as Loading } from 'semantic-ui-react';
import cls from './loader.module.scss';

const Loader = () => {
  return (
    <Segment className={cls.wrapper}>
      <Dimmer active inverted>
        <Loading content='Detecting ...' />
      </Dimmer>
    </Segment>
  );
};

export default Loader;
