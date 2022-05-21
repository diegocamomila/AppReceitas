import React from 'react';
import GlobalContext from './index';


function GlobalProvider({ children }) {
 
  const store = {
  };

  return (
    <GlobalContext.Provider value={ store }>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
