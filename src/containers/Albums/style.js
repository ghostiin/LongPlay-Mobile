import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${style.sansFont};
	color: ${style.textColor};
	position: fixed;
	top: 103px;
	bottom: 60px;
	width: 100%;
`;

const Caption = styled.div`
	font-size: 16px;
	font-weight: 300;
	position: relative;
	width: 100%;
	margin-top: 20px;
	text-align: center;
	&::after {
		content: "";
		background-color: ${style.subColor};
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		height: 1px;
	}
`;

const GridContainer = styled.div``;

const GridItem = styled.div`
	/* margin: 0 0.5rem; */
	position: relative;
	height: 80px;
	display: flex;

	justify-content: space-between;

	margin: 10px 20px;
	.cover {
		width: 80px;
		height: 80px;
		overflow: hidden;

		img {
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.info {
		flex: 1;
		padding-left: 5px;
		text-align: left;
		line-height: 30px;
		${style.noWrap};
	}

	p {
		${style.noWrap};

		span {
			color: ${style.subColor};
		}
	}

	.control {
		vertical-align: middle;
		display: flex;
		justify-content: space-between;

		.iconfont {
			font-size: 30px;
			line-height: 80px;
		}
	}
`;

const SearchBox = styled.div`text-align: center;`;

const ScrollWrapper = styled.div`height: 100vh;`;

const Center = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;

export { Wrapper, GridContainer, GridItem, Caption, SearchBox, ScrollWrapper, Center };
