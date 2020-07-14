/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Playlist from '../../../components/Playlist';
import Marquee from '../../../UI/Marquee';
import ProgressBar from '../../../components/ProgressBar';
import { useFormatTime, usePrevious } from '../../../hooks';
import { Wrapper, Header, Cover, Content, Item, ProgressBarWrapper, Info, Control, Bottom } from './style';
import style from '../../../theme';
import default80 from '../default80.svg';

const ZenPlayer = ({
	themeColor,
	playing,
	playList,
	mode,
	currentIdx,
	currentSong,
	boxAlbumsList,
	boxAlbumsId,
	currentTime,
	duration,
	percent,
	togglePlay,
	prevAlbum,
	nextAlbum,
	playRepeat,
	playPrev,
	playNext,
	onPrecentChange,
	shuffleMode,
	loopMode,
	zenMode,
	repeatMode,
	changePlaylist,
	toggleFullScreen
}) => {
	const getAllAr = (ar) => {
		let all = '';
		const len = ar.length;
		// eslint-disable-next-line array-callback-return
		ar.map((e, id) => {
			all += id + 1 !== len ? `${e.name} , ` : e.name;
		});
		return all;
	};
	const [playlist, showPlaylist] = useState(false);

	const togglePlaylist = () => {
		showPlaylist(!playlist);
	};

	return (
		<Wrapper themeColor={ themeColor }>
			<Header>
				<span className='iconfont' onClick={ toggleFullScreen } aria-hidden>
					&#xe69b;
				</span>
				<span className='logo-title'>LONG PLAY</span>
				<span className='iconfont playbox'>
					<Link to='/playbox'>&#xe633;</Link>
				</span>
			</Header>
			<Cover>
				<img
					src={ !_.isEmpty(currentSong) ? currentSong.al.picUrl : default80 }
					alt='cover'
					width='200'
					height='200'
				/>
			</Cover>
			<Info>
				<div className='name'>
					<Marquee>{ !_.isEmpty(currentSong) ? currentSong.name : 'No Song' }</Marquee>
				</div>
				<div className='singer'>
					<Marquee>{ !_.isEmpty(currentSong) ? getAllAr(currentSong.ar) : 'Not Play now' }</Marquee>
				</div>
			</Info>
			<ProgressBarWrapper>
				<ProgressBar percent={ percent } changePercent={ onPrecentChange } />
				<div className='below-bar'>
					<div className='time'>{ useFormatTime(currentTime) }</div>
					<div className='time'>{ useFormatTime(duration) }</div>
				</div>
			</ProgressBarWrapper>
			<Control>
				<i
					className='iconfont shuffle'
					style={ mode.shuffle === true ? { color: style.textColor } : { color: style.subColor } }
					onClick={ shuffleMode }
					aria-hidden
				>
					&#xe619;
				</i>
				<i className='iconfont prev' onClick={ playPrev } aria-hidden>
					&#xed09;
				</i>
				{ playing ? (
					<i className='iconfont pause center' onClick={ togglePlay } aria-hidden>
						&#xe63d;
					</i>
				) : (
						<i className='iconfont play center' onClick={ togglePlay } aria-hidden>
							&#xe6e2;
						</i>
					) }

				<i className='iconfont next' onClick={ playNext } aria-hidden>
					&#xe6d2;
				</i>
				{ mode.repeat && (
					<i className='iconfont repeat' style={ { color: style.textColor } } aria-hidden onClick={ repeatMode }>
						&#xe714;
					</i>
				) }
				{ mode.loop ? (
					<i className='iconfont looplist' style={ { color: style.textColor } } aria-hidden onClick={ loopMode }>
						&#xe713;
					</i>
				) : (
						!mode.repeat && (
							<i
								className='iconfont looplist'
								style={ { color: style.subColor } }
								aria-hidden
								onClick={ loopMode }
							>
								&#xe713;
							</i>
						)
					) }
			</Control>
			<Bottom>
				<span
					className='iconfont zenmode'
					style={ mode.zen === true ? { color: style.textColor } : { color: style.subColor } }
					aria-hidden
					onClick={ zenMode }
				>
					&#xe6ed;
				</span>
				<span className='logo-title'>
					{ !_.isEmpty(currentSong) ? currentSong.al.name : 'good music to bad days' }
				</span>
				<span className='iconfont playlist' onClick={ togglePlaylist } aria-hidden>
					&#xe9ff;
				</span>
			</Bottom>
			{ playlist ? (
				<Playlist
					playlist={ playList }
					currentIdx={ currentIdx }
					setCurrentIdx={ changePlaylist }
					prevAlbum={ prevAlbum }
					nextAlbum={ nextAlbum }
					togglePlaylist={ togglePlaylist }
				/>
			) : null }
		</Wrapper>
	);
};

ZenPlayer.propTypes = {
	themeColor: PropTypes.string.isRequired
};

export default React.memo(ZenPlayer);
