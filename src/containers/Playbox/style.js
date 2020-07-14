import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	color: ${style.textColor};
	background-color: ${style.darkColor};
	z-index: 200;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;

	font-family: ${style.sansFont};
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-family: ${style.sansFont};
		font-weight: 700;
		font-size: 30px;
		padding: 20px;
		.iconfont {
			font-size: 30px;
		}
	}
`;
const Content = styled.div`
	/* itemNum*itemWidth+(itemNum-1)*gapWidth */
	width: 100%;
	/* to-do:responsively change padding */
	padding: 5vw;

	padding-bottom: 63px;
`;
const GridItem = styled.div`
	/* margin: 0 0.5rem; */
	display: flex;
	margin: 20px 0;

	justify-content: space-between;
	align-items: center;
	.cover {
		width: 80px;
		height: 80px;
	}

	.right {
		padding-left: 10px;
		line-height: 25px;
		flex: 1;
		${style.noWrap};
	}
	.iconfont {
		font-size: 30px;
	}

	p {
		${style.noWrap};

		span {
			color: ${style.subColor};
		}
	}
`;

const Center = styled.div`
	width:100vw;	
	text-align:center;
	color: ${style.subColor};
	line-height:30px;
	

`

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, GridItem, Content, Center };
