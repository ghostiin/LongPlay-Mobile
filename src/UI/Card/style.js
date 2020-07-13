import styled from 'styled-components/macro';
import style from '../../theme';

const CardWrapper = styled.div`
	/* nearly 1500px */
	perspective: 500vw;
	width: 80vw;
	height: 107vw;

	.card {
		width: 100%;
		height: 100%;
		position: relative;
		transition: transform 1s;
		transform-style: preserve-3d;
		box-shadow: ${style.boxShadow};
		background-color: ${style.darkColor};
		border-radius: 20px;

		&-side {
			position: absolute;
			height: 100%;
			width: 100%;
			backface-visibility: hidden;

			&-back {
				transform: rotateY(180deg);
			}
		}
	}

	/* mobile端效果：点击时翻转 */
	.is-fliped {
		transform: rotateY(180deg);
	}
`;

export default CardWrapper;
