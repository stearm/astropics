import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 33%;
  margin-left: 4px;
  margin-bottom: 4px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover div {
    bottom: 0;
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    & > a {
      pointer-events: none;
    }
  }
`;

const Image = styled.img`
  width:100%;
  height: 100%;
`;

const Description = styled.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  bottom: 0;
  opacity: 0;
  width: 100%;
  padding: 4px;
  color: white;
  bottom: -50%;
  background: rgba(0, 0, 0, 0.6);
  transition: bottom 0.5s, opacity 0.5s;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Picture = ({path, caption}) =>
  <Wrapper>
    <a target="_blank" href={path}>
      <Image src={path} />
      <Description>
        <span>{caption.camera}</span>
        <span>{caption.telescope}</span>
        <span>{caption.date}</span>      
        <span>{caption.title}</span>
      </Description>
    </a>
  </Wrapper>

export default Picture;