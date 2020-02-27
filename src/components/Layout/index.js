import React from 'react';
import { Container } from 'semantic-ui-react';
import { Header, Footer, TopNav } from '..';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <TopNav />

      <Container
        style={{
          padding: '2em 0em',
          minHeight: 'calc(100vh - (63px + 47px + 42px))',
        }}
      >
        {children}
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
