import styled from 'styled-components/macro';
import style from '../../theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 0;
	font-family: ${style.sansFont};
	color: ${style.textColor};
`;

const Content = styled.div`${style.scrollHContent};`;

const Item = styled.div`padding: 3rem;`;

export { Wrapper, Content, Item };
