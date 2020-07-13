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
	const cardRef = useRef();

	const filpCard = () => {
		cardRef.current.classList.toggle('is-fliped');
	};
	return (
		<CardWrapper>
			<div className='card' ref={cardRef} onClick={filpCard} aria-hidden>
				<div className='card-side card-side-front'>{children[0]}</div>
				<div className='card-side card-side-back'>{children[1]}</div>
			</div>
		</CardWrapper>
	);
};

Card.propTypes = {
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};

export default Card;
