import React, { useRef } from 'react';
import PlayControlBox from './PlayControlBox';
import styled, { css } from 'styled-components';

const MovingBar = ({ upPage, setUpPage }) => {
  const handleUpDown = () => {
    // console.log(e.target.classList);
    console.log(containerRef.current.classList);
    containerRef.current.classList.toggle('move');
  };

  const containerRef = useRef();
  return (
    <StyledMovingBar ref={containerRef}>
      <div className='click-bar' onClick={handleUpDown}></div>
      <PlayControlBox />
    </StyledMovingBar>
  );
};

const StyledMovingBar = styled.div`
  width: 100%;
  height: 90vh;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 25px;

  .click-bar {
    display: flex;
    justify-content: center;
    width: 3em;
    height: 0.5em;
    margin: 0 auto;
    border-radius: 25px;
    background-color: #C2C2C2;
  }
`;

export default MovingBar;
