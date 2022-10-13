import React, { useState } from 'react';
import styled from 'styled-components';
import { BiReset, BiDownArrowCircle } from 'react-icons/bi';
import { BsCircleFill, BsStopCircle, BsPlayCircle, BsPauseCircleFill } from 'react-icons/bs';

const PlayControlBox = () => {
  const [recordStatus, setStatus] = useState('standBy');

  return (
    <StyledControlBox>
      <OptionBtn>
        <BiReset />
      </OptionBtn>
      <button className='play-control-btn'>
        <BsCircleFill />
      </button>
      {/* <button className='record-start'></button> */}
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

  .record-start {
    text-align: center;
    align-items: center;
    width: 4em;
    height: 4em;
    background-color: #05aac6;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;

  svg {
    font-size: 3em;
    color: #c2c2c2;
  }
`;
export default PlayControlBox;
