import styled from 'styled-components/macro';
import style from '../../theme';

const CardWrapper = styled.div`
	/* nearly 1500px */
	perspective: 500vw;
	position: relative;
	width: 80vw;
	height: 107vw;
	
	.card-side {
		background-color: ${style.darkColor};
		transition: all 1s ease;
		box-shadow: ${style.boxShadow};
		background-color: ${style.darkColor};
		border-radius: 20px;
		position: absolute;
		height: 100%;
		width: 100%;
		backface-visibility: hidden;
		
		&-front {
			
		}
		&-back {
			
			
		}
	}
	

	/* mobile端效果：点击时翻转 */
	.is-fliped-front {
		transform: rotateY(180deg);
	}
	.is-fliped-back {
		transform: rotateY(180deg);
	}
`;

export default CardWrapper;
