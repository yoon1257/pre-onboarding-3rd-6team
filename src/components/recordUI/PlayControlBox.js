import React, { useContext, useState } from 'react';
import { RecordContext } from '../../contexts/Context';
import styled from 'styled-components';
import { BiReset, BiDownArrowCircle } from 'react-icons/bi';
import { BsCircleFill, BsStopCircle, BsPlayCircle, BsPauseCircleFill } from 'react-icons/bs';

const PlayControlBox = () => {
  const { onRecAudio, offRecAudio, play, pause, recordStatus, setStatus, url } = useContext(RecordContext);
  const [ture, setTrue] = useState();
  const handleBtnChange = () => {
    if (recordStatus === 'record') setStatus('stop');
    else if (recordStatus === 'stop') setStatus('play');
    else if (recordStatus === 'play') setStatus('pause');
    else if (recordStatus === 'pause') setStatus('record');
  };
  return (
    <StyledControlBox>
      <OptionBtn
        className={recordStatus}
        disabled={(recordStatus === 'record' || recordStatus === 'stop') && true}
        onClick={() => {
          setStatus('record');
          window.location.reload();
          setTrue();
        }}>
        <BiReset />
      </OptionBtn>
      <OptionBtn size='3.5em' onClick={handleBtnChange}>
        {recordStatus === 'record' && <BsCircleFill onClick={onRecAudio} />}
        {recordStatus === 'stop' && <BsStopCircle onClick={offRecAudio} />}
        {recordStatus === 'play' && <BsPlayCircle onClick={play} />}
        {recordStatus === 'pause' && <BsPauseCircleFill onClick={pause} />}
      </OptionBtn>

      <a href={recordStatus === 'play' ? `${url}` : '#'} download>
        <OptionBtn>
          <BiDownArrowCircle className={recordStatus} />
        </OptionBtn>
      </a>
    </StyledControlBox>
  );
};

const StyledControlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30vh;
  margin: auto 0;
`;

const OptionBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: #05aac6;
  font-size: ${(props) => props.size || '3em'};
  background-color: #f5f5f5;
  cursor: pointer;

  &:disabled,
  .record,
  .stop {
    color: #c2c2c2;
  }
`;
export default PlayControlBox;
