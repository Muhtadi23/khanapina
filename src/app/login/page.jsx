import LoginBtn from '@/components/LoginBtn';
import LoginForm from '@/components/LoginForm';
import React from 'react';

const Login = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <LoginForm></LoginForm>
            <LoginBtn></LoginBtn>
        </div>
    );
};

export default Login;