import styled from 'styled-components/macro';
import style from '../../../theme';
import default200 from './default200.svg';

const Wrapper = styled.div`
	color: ${style.textColor};
	font-family: ${style.sansFont};
	width: ${({ width }) => width || '50rem'};
	height: 37.5rem;
	/* url(${({ bgImg }) => bgImg}) */
	background-image: linear-gradient(rgba(73, 51, 126,0.8), rgba(73, 51, 126,0.8)),  
					  url(${({ bgImg }) => bgImg}), url(${default200});
	background-repeat:no-repeat;
	background-position: right;
	background-size: 37.5rem;
	background-color: ${style.darkColor};
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const AlbumInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
	text-align: right;

	.cover {
		width: 100px;
		height: 100px;
		margin-right: 10px;
		img {
			width: 100px;
			box-shadow: ${style.boxShadow};
			border-radius: 4px;
		}
	}
	line-height: 30px;
	.category {
		color: ${style.subColor};
		font-weight: 500;
	}
	.name {
		font-weight: 600;
		font-size: 16px;
	}
	.singer {
		${style.noWrap};
		span {
			color: ${style.subColor};
		}
	}

	.state {
		text-align: right;
		i {
			font-size: 30px;
			line-height: 30px;
		}
	}
`;

const SongInfo = styled.div`
	padding: 0 20px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;

	overflow: hidden;
	text-align: left;
	.info {
		font-size: 20px;
		padding-bottom: 10px;
	}
	span {
		color: ${style.subColor};
		font-weight: 600;
		font-size: 16px;
	}
`;
const Content = styled.div`
	.item {
		height: max-content;
		margin: 1rem;
	}
	padding-bottom: 2rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	padding-bottom: 0;
	font-weight: 700;
	.sub {
		color: ${style.subColor};
	}

	.iconfont {
		font-size: 20px;
	}
`;

const Center = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;
// eslint-disable-next-line import/prefer-default-export
export { Wrapper, AlbumInfo, SongInfo, Content, Header, Center };
