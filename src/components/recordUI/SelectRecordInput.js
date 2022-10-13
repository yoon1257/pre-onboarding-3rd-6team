import React, { useContext } from 'react';
import { RecordContext } from '../../contexts/Context';
import styled from 'styled-components';

const SelectRecordInput = () => {
  const { handleSelect } = useContext(RecordContext);

  return (
    <StyledInputContainer>
      <div> 녹음 시간 설정 </div>
      <select onChange={handleSelect}>
        <option value='5'>제한 없음</option>
        <option value='60'>1분</option>
        <option value='180'>3분</option>
        <option value='300'>5분</option>
      </select>
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.div`
  margin: 3em 6em;
  color: #05aac6;
  font-weight: 700;

  select {
    width: 20vw;
  }
`;

export default SelectRecordInput;
