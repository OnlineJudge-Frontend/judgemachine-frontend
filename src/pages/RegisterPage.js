import React from 'react'
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import BackgroundPass from '../containers/Base/BackgroundPass';

const RegisterPage = () => {
    return (
        <div>
            <BackgroundPass>
            </BackgroundPass>
            <AuthTemplate>
            <RegisterForm />
            </AuthTemplate>
        </div>

    );   
};

export default RegisterPage;