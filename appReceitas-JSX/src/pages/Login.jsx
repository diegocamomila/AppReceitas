import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function Login() {
    let navigate = useNavigate();
    let location = useLocation();

    const {
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
    } = useContext(GlobalContext)

    const validateInputs = () => {
        const PASSWORD_LENGTH = 7;
        const regexEmail = /\w+@+\w+\.com/ig;
        const validateEmail = regexEmail.test(loginEmail);
        const checkPassword = loginPassword.length >= PASSWORD_LENGTH;
            return !(validateEmail && checkPassword); // a resposta positiva dos dois retorna true fazendo o botao ficar acessivel
    };

    const submitBTM = () => {
        const email = { email: loginEmail };
            localStorage.setItem('mealsToken', 1);
            localStorage.setItem('cocktailsToken', 1);
            localStorage.setItem('user', JSON.stringify(email));
            // <Foods />
            navigate("/foods" + location.search);
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

