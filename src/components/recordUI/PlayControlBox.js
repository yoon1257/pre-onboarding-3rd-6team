import React, { useState } from 'react';
import styled from 'styled-components';
import { BiReset, BiDownArrowCircle } from 'react-icons/bi';
import { BsCircleFill, BsStopCircle, BsPlayCircle, BsPauseCircleFill } from 'react-icons/bs';

const PlayControlBox = ({ recordStatus, setStatus }) => {
  console.log(recordStatus);
  const handleBtnChange = () => {
    if (recordStatus === 'record') setStatus('stop');
    else if (recordStatus === 'stop') setStatus('play');
    else if (recordStatus === 'play') setStatus('pause');
  };

  return (
    <StyledControlBox>
      <OptionBtn onClick={() => setStatus('record')}>
        <BiReset />
      </OptionBtn>
      <button className='play-control-btn' onClick={handleBtnChange}>
        {recordStatus === 'record' && <BsCircleFill />}
        {recordStatus === 'stop' && <BsStopCircle />}
        {recordStatus === 'play' && <BsPlayCircle />}
        {recordStatus === 'pause' && <BsPauseCircleFill />}
      </button>
      <OptionBtn>
        <BiDownArrowCircle />
      </OptionBtn>
    </StyledControlBox>
  );
};

const StyledControlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30vh;
  margin: auto 0;

  .play-control-btn {
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 3em;
    color: #05aac6;
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
  }
`;

const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${(props) => (props.className ? '#05aac6' : '#f5f5f5')};
  cursor: pointer;

  svg {
    font-size: 3em;
    color: #c2c2c2;
  }
`;
export default PlayControlBox;
