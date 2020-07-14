import styled from 'styled-components/macro';
import style from '../../../theme';

const PlayerWrapper = styled.div`
	width: 100vw;
	height: 63px;
	position: fixed;
	bottom: 0;

	background-color: ${style.darkColor};
	color: ${style.textColor};
	font-family: ${style.sansFont};

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.info {
		display: flex;
		flex-direction: row;
		${style.noWrap};
		&-right {
			padding-left: 10px;
			padding-top: 10px;
			line-height: 20px;
			${style.noWrap};
		}
	}

	.control {
		line-height: 63px;
		padding: 0 10px;
		vertical-align: middle;
		.iconfont {
			font-size: 35px;
		}
	}
`;

const ProgressBarWrapper = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
`;
export { PlayerWrapper, ProgressBarWrapper };
