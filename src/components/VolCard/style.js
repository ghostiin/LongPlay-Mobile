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
	
	margin:10px;
	line-height: 25px;

	.category {
		color: ${style.subColor};
		font-weight: 500;
		
	}
	.name {
		font-weight: 600;
		font-size: 20px;
		
	}
	.singer {
		span {
			color: ${style.subColor};
			padding-right: 8px;
		}
	}

	/* small props
	img {
		width: 6rem;
		height: 6rem;
		box-shadow: ${style.boxShadow};
		border-radius: 0.5rem;
	}
	.right {
		flex: 1;
		width: 12rem;
	
		margin-left: 1rem;
	} */
`;
const CardInfoHeader = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	line-height: 30px;
	.cover {
		width: 27vw;
		height: 27vw;
		border-radius: 10px;
	}

	.right {
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		font-size: 20px;
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
