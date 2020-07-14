import styled from 'styled-components/macro';
import style from '../../theme';

const InputWrapper = styled.div`
	padding-top: 1rem;
	position: relative;
	text-align: center;
	input {
		font-family: ${style.sansFont} !important;
		color: ${style.textColor};
		outline-style: none;
		border: 0;
		border-radius: 20px;
		width: 80vw;
		height: 18px;
		padding: 5px;
		background-color: ${({ bgColor }) => bgColor || 'rgba(88, 71, 126, .5)'};
		text-align: center;
		&::-webkit-input-placeholder {
			color: ${style.subColor};
			text-align: center;
			font-family: "iconfont" !important;
		}

		&::-moz-placeholder {
			color: ${style.subColor};
			text-align: center;
			font-family: "iconfont" !important;
		}
	}

	i {
		position: absolute;
		top: 50%;
		right: 50%;
		/* translateX half of search input width -1rem */
		transform: translateX(40vw);
		cursor: pointer;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export { InputWrapper };
