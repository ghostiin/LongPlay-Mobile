import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Scroll from '../../UI/Scroll';
import Marquee from '../../UI/Marquee';
import default120 from './default120.svg';
import { Wrapper, Item, Header, Content, ScrollWrapper } from './style';

const Playlist = ({ playlist, currentIdx, setCurrentIdx, prevAlbum, nextAlbum, togglePlaylist }) => {
	const currentSong = playlist[currentIdx];
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
		<Wrapper>
			<Header>
				<div className='info'>
					<img
						src={
							!_.isEmpty(currentSong) && currentSong.al ? (
								`${currentSong.al.picUrl}?param=310x310`
							) : (
								default120
							)
						}
						alt='cover'
						width='80'
						height='80'
						className='info-left'
					/>
					<div className='info-right'>
						<div className='sub'>PLAYING ALBUM</div>
						<div className='name'>
							{!_.isEmpty(currentSong) && currentSong.name ? currentSong.name : 'No Playlist'}
						</div>

						<div className='singer'>
							<span className='sub'>By </span>
							{!_.isEmpty(currentSong) && currentSong.ar ? getAllAr(currentSong.ar) : 'No Player'}
						</div>
					</div>
					<div className='iconfont' onClick={togglePlaylist} aria-hidden>
						&#xe69e;
					</div>
				</div>
				<div className='control'>
					<div className='prev' onClick={prevAlbum} aria-hidden>
						<i className='iconfont'>&#xe6db;</i>
						Prev Album
					</div>
					<div className='next' onClick={nextAlbum} aria-hidden>
						Next Album
						<i className='iconfont'>&#xe6a3;</i>
					</div>
				</div>
			</Header>
			<ScrollWrapper>
				<Scroll>
					<Content>
						{playlist.map((e, id) => {
							return (
								<Item
									key={e.id}
									style={currentIdx === id ? { opacity: 1 } : {}}
									onClick={() => {
										setCurrentIdx(id);
									}}
								>
									<span>{id + 1}. </span>
									{e.name}
								</Item>
							);
						})}
					</Content>
				</Scroll>
			</ScrollWrapper>
		</Wrapper>
	);
};

Playlist.propTypes = {
	playlist: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			al: {
				picUrl: PropTypes.string
			},
			ar: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string
				})
			),
			name: PropTypes.string
		})
	),
	currentIdx: PropTypes.number,
	setCurrentIdx: PropTypes.func,
	prevAlbum: PropTypes.func,
	nextAlbum: PropTypes.func
};

Playlist.defaultProps = {
	playlist: [],
	currentIdx: 0,
	setCurrentIdx: () => {},
	prevAlbum: () => {},
	nextAlbum: () => {}
};

export default React.memo(Playlist);
