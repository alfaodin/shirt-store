import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './nav-header.styles.scss';

const NavHeader = () => {
	return (
		<div className='header'>
			<Link to='/' className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to='/shop'>Shop</Link>
				<Link className="option" to='/contact'>Contact</Link>
				<Link className="option" to='/signin'>Sign in</Link>
			</div>
		</div>
	)
}

export default NavHeader;
