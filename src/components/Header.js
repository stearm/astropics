import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  background: white;
  top: 0;
  z-index: 9999;
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  letter-spacing: 4px;
  font-size: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Header = () =>
  <Wrapper>
    <span>AstroPics</span>
  </Wrapper>;

export default Header;
