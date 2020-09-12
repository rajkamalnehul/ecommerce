import React from 'react';
import './userregistrationpage.scss';
import SignIn from '../../components/sign-in/sign-in.js';
import SignUp from '../../components/sign-up/sign-up.js';

const UserRegistrationPage = ()=>(
    <div className='user-registration'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default UserRegistrationPage;