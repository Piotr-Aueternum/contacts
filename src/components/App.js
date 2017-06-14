import React from 'react';
import styled from 'styled-components';
import ContactsList from '../containers/ContactsList';
import CreateContact from '../containers/CreateContact';
import media from '../style-utils';

const Container = styled.div`
  margin: 0 auto;
  max-width: 470px;
  width: 100%;
  padding: 60px 15px;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  ${media.tablet`
    padding: 90px 15px 60px;
  `}
`;

const ContactBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #eee;
  border-bottom: 1px solid #aaa;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  ${media.tablet`
    padding: 15px 10px 5px 10px;
  `}
`;

export default () => (
  <main>
    <ContactBar>
      <CreateContact />
    </ContactBar>
    <Container>
      <ContactsList
        pagination={10}
      />
    </Container>
  </main>
);
