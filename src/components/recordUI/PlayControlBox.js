import React, { useContext, useState } from 'react';
import { RecordContext } from '../../contexts/Context';
import styled from 'styled-components';
import { BiReset, BiDownArrowCircle } from 'react-icons/bi';
import { BsCircleFill, BsStopCircle, BsPlayCircle, BsPauseCircleFill } from 'react-icons/bs';

const PlayControlBox = ({ recordStatus, setStatus }) => {
  const handleBtnChange = () => {
    if (recordStatus === 'record') setStatus('stop');
    else if (recordStatus === 'stop') setStatus('play');
    else if (recordStatus === 'play') setStatus('pause');
  };
  const { babo } = useContext(RecordContext);
  console.log('테스트', babo);
  return (
    <StyledControlBox>
      <OptionBtn className={recordStatus} onClick={() => setStatus('record')}>
        <BiReset />
      </OptionBtn>
      <button className='play-control-btn' onClick={handleBtnChange}>
        {recordStatus === 'record' && <BsCircleFill />}
        {recordStatus === 'stop' && <BsStopCircle />}
        {recordStatus === 'play' && <BsPlayCircle />}
        {recordStatus === 'pause' && <BsPauseCircleFill />}
      </button>
      <OptionBtn className={recordStatus}>
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
  background-color: #f5f5f5;
  cursor: pointer;

  svg {
    font-size: 3em;
    color: ${(props) => (props.className === 'play' || props.className === 'pause' ? '#05aac6' : '#c2c2c2')};
  }
`;
export default PlayControlBox;
