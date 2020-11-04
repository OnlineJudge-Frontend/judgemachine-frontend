import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import BackgroundPass from '../containers/Base/BackgroundPass';

const LoginPage = () => {
    return (
        <div>
            <BackgroundPass>
            </BackgroundPass>
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>

        </div>

    );   
};

export default LoginPage;