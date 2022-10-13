import React, { createContext, useState } from 'react';

export const RecordContext = createContext({
  babo: '테스트',
  setBabo: () => {},
});

const Context = ({ children }) => {
  const [babo, setBabo] = useState('');

  return <RecordContext.Provider value={{ babo, setBabo }}>{children}</RecordContext.Provider>;
};

export default Context;
