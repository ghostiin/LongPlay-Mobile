import styled from 'styled-components/macro';
import style from '../../theme';

const CoverImg = styled.div`
	width: 100%;
	height: auto;
	img {
		border-radius: 20px 20px 0 0;
		width: 80vw;
		height: 80vw;
	}
`;
const CardInfo = styled.div`
	
	margin:5px 10px;
	line-height: 20px;

	.category {
		color: ${style.subColor};
		font-weight: 500;
		
	}
	.name {
		font-weight: 600;
		font-size: 16px;
		
	}
	.singer {
		span {
			color: ${style.subColor};
			padding-right: 8px;
		}
	}

	
`;
const CardInfoHeader = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	line-height:16px;
	.cover {
		width: 27vw;
		height: 27vw;
		border-radius: 10px;
	}

	.right {
		margin-left: 10px;
		flex:1;
		display: flex;
		flex-direction: column;
		text-align: left;

		&-inner {
			max-width: 175px;
		}
	}

	.category {
		color: ${style.subColor};
		font-weight: 500;
	}
	.name {
		font-weight: 600;
		font-size: 16px;
	}
	.singer {
		span {
			color: ${style.subColor};
			padding-right: 8px;
		}
	}
`;
const CardDescription = styled.div`
	padding: 0 15px;
	line-height: 20px;
	.text {
		height: 50%;
	}
`;

const CardAction = styled.div`
	position: absolute;
	width: 100%;
	bottom: 20px;

	font-weight: 300;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.card-btn {
		padding: 0 20px;
	}
`;

export { CoverImg, CardInfo, CardDescription, CardAction, CardInfoHeader };
