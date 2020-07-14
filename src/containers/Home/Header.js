import React from 'react';
import { Link } from 'react-router-dom';
import { Header as HeaderWrapper } from './style';
import logo from './logo.svg';

const Header = () => {
	return (
		<HeaderWrapper>
			<span className='logo'>
				<img src={logo} alt='logo' />
			</span>
			<span className='logo-title'>LONG PLAY</span>
			<span className='iconfont playbox'>
				<Link to='/playbox'>&#xe633;</Link>
			</span>
		</HeaderWrapper>
	);
};

export default React.memo(Header);
