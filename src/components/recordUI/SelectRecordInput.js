import React, { useContext } from 'react';
import { RecordContext } from '../../contexts/Context';
import styled from 'styled-components';

const SelectRecordInput = () => {
  const { handleSelect } = useContext(RecordContext);

  return (
    <select onClick={handleSelect}>
      <option value=''>초를 입력해주세요</option>
      <option value='60'>1분</option>
      <option value='180'>3분</option>
      <option value='300'>5분</option>
    </select>
  );
};

export default SelectRecordInput;
