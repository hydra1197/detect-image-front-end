import React from 'react';
import { Container, Image, Segment } from 'semantic-ui-react';
import logo from '../../assets/images/logo.png';
import cls from './header.module.scss';

const Header = () => {
  return (
    <header>
      <Segment inverted vertical>
        <Container textAlign='center'>
          <div className={cls.container}>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            Image Detected
          </div>
        </Container>
      </Segment>
    </header>
  );
};

export default Header;
