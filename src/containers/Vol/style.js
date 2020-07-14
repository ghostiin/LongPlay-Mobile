import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${style.sansFont};
	color: ${style.textColor};
	position: fixed;
	top: 91px;
	bottom: 60px;
	width: 100%;
`;

const Content = styled.div`
	width: 80vw;
	margin: 0 auto;
`;

const Item = styled.div`
	height: 117vw;
	margin: 10px 0;
	padding-top: 20px;
`;

export { Wrapper, Content, Item };
