import styled from 'styled-components/macro';
import style from '../../theme';

// 设置全屏背景色
const Wrapper = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 5px 10px;
	color: ${style.textColor};
	background-color: ${style.mainColor};
	font-size: 20px;
	.logo-title {
		font-family: ${style.logoFont};
		font-size: 25px;
	}

	& > span {
		line-height: 40px;

		&.iconfont {
			font-size: 25px;
		}
	}
`;

const NavBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 5px 10px;
	text-align: center;
	color: ${style.textColor};
	background-color: ${style.mainColor};
	font-size: 16px;
	font-family: ${style.sansFont};
	a {
		text-decoration: none;
		color: ${style.textColor};
		opacity: 0.5;
	}

	padding-bottom: 30px;

	.selected {
		position: relative;
		opacity: 1;
		font-size: 18px;
		transition: all .4s;
		&:after {
			content: '♫';
			font-size: 16px;
			color: ${style.textColor};
			position: absolute;
			top: 120%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

const NavItem = styled.div`display: inline-block;`;

export { Wrapper, Header, NavBar, NavItem };
