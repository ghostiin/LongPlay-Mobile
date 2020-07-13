import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import style from '../../theme';
import Marquee from '../../UI/Marquee';
import defaultImg from './defaultCover.svg';
import { CoverImg, CardInfo, CardDescription, CardAction, CardInfoHeader } from './style';

const VolCard = (props) => {
	const { imgUrl, cardCatgory, cardName, singerName, description } = props;
	const { playNow, collect, collected } = props;
	return (
		<Card>
			<div>
				<CoverImg>
					<img src={`${imgUrl}?param=400x400`} alt='cover' />
				</CoverImg>
				<CardInfo>
					<div className='category'>{cardCatgory}</div>
					<Marquee className='name' style={{ fontSize: '30px', fontWeight: '600' }}>
						{cardName}
					</Marquee>

					<div className='singer'>
						<span>By</span>
						{singerName}
					</div>
				</CardInfo>
			</div>
			<div>
				<CardInfoHeader>
					<img src={`${imgUrl}?param=400x400`} alt='cover' className='cover' />

					<div className='right'>
						<div className='right-inner'>
							<div className='category'>{cardCatgory}</div>
							<Marquee className='name' style={{ fontSize: '20px', fontWeight: '600' }}>
								{cardName}
							</Marquee>
							<div className='singer'>
								<span>By</span>
								{singerName}
							</div>
						</div>
					</div>
				</CardInfoHeader>
				<CardDescription>
					<div className='content'>
						<div className='text'>{description}</div>
					</div>
				</CardDescription>
				<CardAction>
					<div onClick={(e) => e.stopPropagation()} aria-hidden className='card-btn'>
						<Button onPropsClick={playNow} aria-hidden>
							<i className='iconfont'>&#xe9f9;</i>
							Play Now
						</Button>
					</div>
					<div onClick={(e) => e.stopPropagation()} aria-hidden className='card-btn'>
						{collected ? (
							<Button outlined outlinedColor={style.mainColor}>
								<i className='iconfont'>&#xe618;</i>
								In Box!
							</Button>
						) : (
							<Button onPropsClick={collect} outlined outlinedColor={style.mainColor}>
								<i className='iconfont'>&#xe69f;</i>
								Collect
							</Button>
						)}
					</div>
				</CardAction>
			</div>
		</Card>
	);
};

VolCard.propTypes = {
	imgUrl: PropTypes.string,
	cardCatgory: PropTypes.string,
	cardName: PropTypes.string,
	singerName: PropTypes.string,
	description: PropTypes.string,
	playNow: PropTypes.func,
	collect: PropTypes.func,
	collected: PropTypes.bool
};

VolCard.defaultProps = {
	imgUrl: defaultImg,
	cardCatgory: 'ALBUM',
	cardName: 'ALBUM NAME',
	singerName: 'SINGER',
	description: 'Good Music To Bad Days',
	playNow: null,
	collect: null,
	collected: false
};

export default React.memo(VolCard);
