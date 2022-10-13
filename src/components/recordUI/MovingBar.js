import React, { useRef, useContext } from 'react';
import { RecordContext } from '../../contexts/Context';
import PlayControlBox from './PlayControlBox';
import SelectRecordInput from './SelectRecordInput';
import styled from 'styled-components';

const MovingBar = () => {
  const { recordStatus, setStatus } = useContext(RecordContext);
  const handleUpDown = () => {
    containerRef.current.classList.toggle('move');
  };

  const containerRef = useRef();
  return (
    <StyledMovingBar ref={containerRef}>
      <div className='click-bar' onClick={handleUpDown}></div>
      <PlayControlBox />
      <SelectRecordInput />
    </StyledMovingBar>
  );
};

const StyledMovingBar = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 25px;
  z-index: 999;

  .click-bar {
    display: flex;
    justify-content: center;
    width: 3em;
    height: 0.5em;
    margin: 0 auto;
    border-radius: 25px;
    background-color: #c2c2c2;
  }
`;

export default MovingBar;
