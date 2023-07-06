import './auth.css';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/general/Input';
import { faKey, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button';


export default function Register (props) {
    const { username, password, setUsername, setPassword } = props;

    return (
        <React.Fragment>
            <div className={"register"}>
                <p>Create a new account</p>
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
                <Button text={"Sign Up"}
                        type={"submit"}
                        className={"submit-register"}
                        icon={faPlus}/>
            </div>
        </React.Fragment>
    );
}

Register.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired
};

Register.defaultProps = {
    username: '',
    password: '',
    setUsername: () => {},
    setPassword: () => {}
};
