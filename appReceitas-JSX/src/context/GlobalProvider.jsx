import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const store = {
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
    };

    return (
        <GlobalContext.Provider value={ store }>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
