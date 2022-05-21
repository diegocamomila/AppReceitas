import React, { useState } from 'react';

function Login({ history }) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const validateInputs = () => {
        const PASSWORD_LENGTH = 7;
        const regexEmail = /\w+@+\w+\.com/ig;
        const validateEmail = regexEmail.test(loginEmail);
        const checkPassword = loginPassword.length >= PASSWORD_LENGTH;
            return !(validateEmail && checkPassword);
    };

    const submitBTM = () => {
        const email = { email: loginEmail };
            localStorage.setItem('mealsToken', 1);
            localStorage.setItem('cocktailsToken', 1);
            localStorage.setItem('user', JSON.stringify(email));
            history.push('/foods');
   };

    return (
        <section>
            <h1>Login</h1>
                <form >
                    <section >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={ ({ target }) => setLoginEmail(target.value) }
                            value={ loginEmail }
                        />
                    </section>
                    <section >
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={ ({ target }) => setLoginPassword(target.value) }
                            value={ loginPassword }
                        />
                    </section>
                    <section >
                        <button
                            type="button"
                            disabled={ validateInputs() }
                            onClick={ () => submitBTM() }
                        >
                        Entrar
                        </button>
                    </section>
                </form>
        </section>
    );
}

export default Login;
