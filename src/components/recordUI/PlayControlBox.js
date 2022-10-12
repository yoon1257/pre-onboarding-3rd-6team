import React from 'react';
import styled from 'styled-components';
import { BiReset, BiDownArrowCircle } from 'react-icons/bi';

const PlayControlBox = () => {
  return (
    <StyledControlBox>
      <OptionBtn>
        <BiReset />
      </OptionBtn>
      <div className='record-start'></div>
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

  .record-start {
    text-align: center;
    align-items: center;
    width: 4em;
    height: 4em;
    background-color: #05aac6;
    border-radius: 50px;
  }
`;

const OptionBtn = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 3em;
    color: #c2c2c2;
  }
`;
export default PlayControlBox;
