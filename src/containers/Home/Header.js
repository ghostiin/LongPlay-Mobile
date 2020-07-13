import React from 'react';
import { Header as HeaderWrapper, Logo } from './style';
import logo from './logo.svg';

const Header = () => {
	return (
		<HeaderWrapper>
			<span className='logo'>
				<img src={logo} alt='logo' />
			</span>
			<span className='logo-title'>LONG PLAY</span>
			<span className='iconfont playbox'>&#xe633;</span>
		</HeaderWrapper>
	);
};

export default React.memo(Header);
