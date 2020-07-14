import styled from 'styled-components/macro';
import style from '../../../theme';

const Wrapper = styled.div`
	font-family: ${style.sansFont};
	background-color: ${({ themeColor }) => themeColor || style.bgColorDark};
	color: ${style.textColor};
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 5px 10px;
	color: ${style.textColor};

	font-size: 20px;
	.logo-title {
		
		font-size: 16px;
	}

	& > span {
		line-height: 40px;

		&.iconfont {
			font-size: 25px;
		}
	}
`;
const Cover = styled.div`
	width: 100vw;
	img {
		display: block;
		margin: 10px auto;
		box-shadow: ${style.boxShadow};
	}
`;

const InnerPlaylist = styled.div`height: 20vh;`;

const Content = styled.div``;

const Item = styled.div`
	width: 100%;
	line-height: 2.5rem;
	opacity: 0.5;
	cursor: pointer;
	${style.noWrap};
	&:not(:last-child) ::after {
		content: "";
		opacity: 0.1;
		display: block;
		width: 100%;
		height: 0px;
		border: 1px solid rgba(255, 255, 255, 1);
	}
`;

const ProgressBarWrapper = styled.div`
	font-size: 12px;
	padding:0  20px;
	.below-bar {
		margin-top: 10px;

		color: ${style.subColor};
		display: flex;
		justify-content: space-between;
	}
`;

const Info = styled.div`
	padding: 0 20px;
	line-height: 30px;

	.name {
		font-size: 20px;
		font-weight: 500;
	}

	.singer {
		color: ${style.subColor};
	}
`;

const Control = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 20px;
	line-height: 40px;
	vertical-align: middle;

	.iconfont {
		font-size: 25px;
	}
	.center {
		font-size: 40px;
	}
`;

const Bottom = styled.div`
	padding: 0 15px;
	position: fixed;
	bottom: 0;
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	color: ${style.textColor};

	font-size: 16px;
	.logo-title {
		color: ${style.subColor};
		${style.noWrap};
	}

	& > span {
		line-height: 60px;
		margin: 0 5px;
		&.iconfont {
			font-size: 25px;
		}
	}
`;

export { Control, Wrapper, InnerPlaylist, Content, Item, ProgressBarWrapper, Header, Bottom, Cover, Info };
