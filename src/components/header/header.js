import React from 'react';
import './header.scss';
import{Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logo/crown.svg';
import {auth} from '../firebase/firebase.utils.js';



const Header = ({currentuser}) => (
    <div className='header'>
        <Link className='logo-container' to="./">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="./shop">SHOP</Link>
            <Link className='option' to="./shop">CONTACT</Link>
            {
                currentuser ?(
                <div className='option' onClick ={()=>auth.signOut()}>SIGN OUT</div>
                ):(
                <Link className='option' to="./signin">SIGN IN</Link>
                 )}
        </div>
    </div>
) 

export default Header;