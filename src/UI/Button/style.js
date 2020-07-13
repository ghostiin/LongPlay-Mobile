import styled from 'styled-components/macro';
import style from '../../theme';

const BaseButton = styled.button`
	cursor: pointer;
	display: inline-block;
	border: none;
	border-radius: 20px;
	font-size: ${({ fontSize }) => fontSize};
	font-family: ${style.sansFont};

	padding: 5px 10px;
	color: ${({ fontColor }) => fontColor};
	background-color: ${({ outlined, bgColor }) => (!outlined ? bgColor : 'transparent')};
	border: solid 2px ${({ outlined, outlinedColor }) => (outlined ? outlinedColor : 'transparent')};

	transition: all .2s;

	&:focus {
		outline: 0;
	}

	&:hover {
		transform: scale(1.05, 1.05);
	}

	&:active {
		transform: scale(1, 1);
		color: ${({ subColor }) => subColor};
	}
`;

export default BaseButton;
