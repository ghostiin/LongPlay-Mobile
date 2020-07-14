/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Marquee from '../../../UI/Marquee';
import ProgressBar from '../../../components/ProgressBar';
import { PlayerWrapper, ProgressBarWrapper } from './style';
import default80 from '../default80.svg';
import style from '../../../theme';

const MiniPlayer = ({
	playing,
	currentIdx,
	currentSong,
	boxAlbumsId,
	percent,
	togglePlay,
	onPrecentChange,
	toggleFullScreen
}) => {
	// const { playing, playList, defaultList, mode, currentIdx, currentSong } = useSelector((state) => state.player);
	// const { boxAlbumsList, boxAlbumsId } = useSelector((state) => state.box);
	// const dispatch = useDispatch();

	const getAllAr = (ar) => {
		let all = '';
		const len = ar.length;
		// eslint-disable-next-line array-callback-return
		ar.map((e, id) => {
			all += id + 1 !== len ? `${e.name} , ` : e.name;
		});
		return all;
	};

	return (
		<PlayerWrapper onClick={toggleFullScreen}>
			<ProgressBarWrapper>
				<ProgressBar percent={percent} changePercent={onPrecentChange} bgStyle={style.mainColor} />
			</ProgressBarWrapper>
			<div className='info'>
				<div className='cover'>
					<img
						src={
							!_.isEmpty(currentSong) && currentSong.al ? (
								`${currentSong.al.picUrl}?param=310x310`
							) : (
								default80
							)
						}
						alt='cover'
						width='60'
						height='60'
					/>
				</div>
				<div className='info-right'>
					<div>
						{!_.isEmpty(currentSong) && currentSong.name ? currentSong.name : 'Good Music To Bad Days'}
					</div>
					<div style={{ color: style.subColor }}>
						{!_.isEmpty(currentSong) && currentSong.ar ? getAllAr(currentSong.ar) : 'Play now'}
					</div>
				</div>
			</div>
			<div className='control' onClick={(e) => e.stopPropagation()} aria-hidden>
				{playing ? (
					<i className='iconfont pause' onClick={togglePlay} aria-hidden>
						&#xe6a6;
					</i>
				) : (
					<i className='iconfont play' onClick={togglePlay} aria-hidden>
						&#xe9f9;
					</i>
				)}
			</div>
		</PlayerWrapper>
	);
};

MiniPlayer.propTypes = {
	playing: PropTypes.bool.isRequired,
	currentIdx: PropTypes.number.isRequired,
	currentSong: PropTypes.shape({
		al: PropTypes.shape({
			name: PropTypes.string,
			id: PropTypes.number,
			picUrl: PropTypes.string
		}),
		ar: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string
			})
		),
		name: PropTypes.string
	}).isRequired,

	percent: PropTypes.number.isRequired,
	togglePlay: PropTypes.func.isRequired,
	onPrecentChange: PropTypes.func.isRequired
};

export default React.memo(MiniPlayer);
