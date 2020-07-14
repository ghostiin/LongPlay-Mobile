import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './style';

// 使用Card
/* <Card>
	<div className='side front'>...</div>
	<div className='side back'>...</div>
</Card>; */

const Card = (props) => {
	const { children } = props;
	const frontRef = useRef();
	const backRef = useRef();
	const filpCard = () => {
		frontRef.current.classList.toggle('is-fliped-front');
		backRef.current.classList.toggle('is-fliped-back');
	};
	return (
		<CardWrapper>
			<div className='card-side card-side-front' ref={ frontRef }
				onClick={ filpCard } aria-hidden
			>{ children[0] }</div>
			<div className='card-side card-side-back is-fliped-back' ref={ backRef }
				onClick={ filpCard } aria-hidden
			>{ children[1] }</div>

		</CardWrapper>
	);
};

Card.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Card;
