import './auth.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

export default function Login (props) {
    const { username, password, setUsername, setPassword } = props;

    return (
        <React.Fragment>
            <div className={"login"}>
                <p>Sign in with your account</p>
                <Input label={"Username:"}
                       className={"username"}
                       type={"text"}
                       value={username}
                       setValue={setUsername}
                       icon={faUser}/>
                <Input label={"Password:"}
                       className={"password"}
                       type={"password"}
                       value={password}
                       setValue={setPassword}
                       icon={faKey}/>
            </div>
            <div className={"submit-button"}>
                <Button text={"Sign In"}
                        type={"submit"}
                        className={"submit-login"}
                        icon={faKey}
                        onClick={() => console.log(`Your are sign in ${username}`)}/>
            </div>

        </React.Fragment>
    )
}

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired
};

Login.defaultProps = {
    username: '',
    password: '',
    setUsername: () => {},
    setPassword: () => {}
};