import React from 'react';

import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SignPage = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn className='sign-in'/>
		</div>
	)
}

export default SignPage;
