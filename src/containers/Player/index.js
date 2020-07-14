/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { actions as actionTypes } from './store';
import { usePrevious } from '../../hooks';
import { getSongUrl } from '../../api/requests';
import MiniPlayer from './miniPlayer';
import FullPlayer from './FullPlayer';
import style from '../../theme';

const Player = () => {
	const [fullScreen, setFullScreen] = useState(false);
	const loaded = useRef();
	const audioRef = useRef();
	const { playing, playList, defaultList, mode, currentIdx, currentSong } = useSelector((state) => state.player);
	const { boxAlbumsList, boxAlbumsId, palette } = useSelector((state) => state.box);
	const dispatch = useDispatch();

	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const percent = currentTime / duration;

	// 控制播放暂停
	useEffect(
		() => {
			if (playing) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		},
		[playing]
	);

	const prevAlbum = () => {
		if (_.isEmpty(currentSong)) return;
		if (currentSong.al.id in boxAlbumsList) {
			let idx = _.findIndex(boxAlbumsId, (e) => {
				return e === currentSong.al.id;
			});
			if (idx === 0) {
				idx = boxAlbumsId.length - 1;
			} else {
				idx -= 1;
			}
			dispatch(actionTypes.playNow(boxAlbumsId[idx]));
		} else {
			dispatch(actionTypes.playNow(boxAlbumsId[0]));
		}
	};
	const nextAlbum = () => {
		if (_.isEmpty(currentSong)) return;
		if (currentSong.al.id in boxAlbumsList) {
			let idx = _.findIndex(boxAlbumsId, (e) => {
				return e === currentSong.al.id;
			});
			if (idx === boxAlbumsId.length - 1) {
				idx = 0;
			} else {
				idx += 1;
			}

			dispatch(actionTypes.playNow(boxAlbumsId[idx]));
		} else {
			dispatch(actionTypes.playNow(boxAlbumsId[0]));
		}
	};
	const togglePlay = () => {
		dispatch(actionTypes.setPlayingState(!playing));
	};
	const playRepeat = () => {
		audioRef.current.currentTime = 0;
		dispatch(actionTypes.setPlayingState(true));
		audioRef.current.play();
	};
	const playPrev = () => {
		if (playList.length === 1) {
			// 只有一首歌的时候循环播放
			playRepeat();
			return;
		}
		let index = currentIdx - 1;
		// 倒回最后一首
		if (index < 0) index = playList.length - 1;
		if (!playing) dispatch(actionTypes.setPlayingState(true));
		dispatch(actionTypes.setCurrentIdx(index));
	};

	const playNext = () => {
		if (playList.length === 1) {
			// 只有一首歌的时候循环播放
			playRepeat();
			return;
		}

		let index = currentIdx + 1;
		// 倒回第一首
		if (index === playList.length) index = 0;
		if (!playing) dispatch(actionTypes.setPlayingState(true));
		dispatch(actionTypes.setCurrentIdx(index));
	};
	const onPlayEnd = () => {
		if (mode.zen) {
			nextAlbum();
			return;
		}
		if (mode.repeat === true) {
			playRepeat();
		} else if (mode.loop === false) {
			if (currentIdx + 1 === playList.length) {
				dispatch(actionTypes.setPlayingState(false));
			}
		} else {
			playNext();
		}
	};
	const onErr = () => {
		// 当前音乐无法播放,允许切歌
		loaded.current = true;
		alert('播放出错/(ㄒoㄒ)/~~这首歌可能是被网易云私藏了');
	};

	const preSong = usePrevious(currentSong);

	useEffect(() => {
		const fix = function () {
			audioRef.current.play();
		};
		document.addEventListener('touchstart', fix, false);
		return document.addEventListener('touchstart', fix, false);
	}, [])
	// 当click了prev next后更新歌曲src
	useEffect(
		// eslint-disable-next-line consistent-return
		() => {
			// 排除非播放时: 无播放列表/无播放idx/无对应音乐资源/是同一首歌时
			if (
				!playList.length ||
				currentIdx === -1 ||
				!playList[currentIdx] ||
				(playList[currentIdx] && preSong && playList[currentIdx].id === preSong.id) ||
				loaded.current === false
			) {
				return undefined;
			}

			const current = playList[currentIdx];
			if (!current) return undefined;
			loaded.current = false;
			dispatch(actionTypes.setCurrentSong(current));
			audioRef.current.src = getSongUrl(current.id);
			if (!audioRef.current) return undefined;
			setTimeout(() => {
				audioRef.current.play().then(() => {
					loaded.current = true;
				});
			});
			dispatch(actionTypes.setPlayingState(true));
			setCurrentTime(0);

			setDuration((current.dt / 1000) | 0);
		},
		[playList, currentIdx]
	);

	const updateCurrentTime = (e) => {
		setCurrentTime(e.target.currentTime);
	};
	const onPrecentChange = (newPrecent) => {
		const newTime = newPrecent * duration;
		audioRef.current.currentTime = newTime;
		// 改变进度条后自动播放
		if (!playing) {
			dispatch(actionTypes.setPlayingState(true));
		}
	};
	const shuffleMode = () => {
		if (!mode.shuffle) {
			// 设置shufflelist为当前正在播放list
			const shuffleList = _.shuffle(defaultList);
			dispatch(actionTypes.setPlaylist(shuffleList));
			const index = _.findIndex(shuffleList, (e) => {
				return e.id === currentSong.id;
			});
			dispatch(actionTypes.setCurrentIdx(index));
			dispatch(actionTypes.setPlayMode({ shuffle: true }));
		} else {
			dispatch(actionTypes.setPlaylist(defaultList));
			const index = _.findIndex(defaultList, (e) => {
				return e.id === currentSong.id;
			});
			dispatch(actionTypes.setCurrentIdx(index));
			dispatch(actionTypes.setPlayMode({ shuffle: false }));
		}
	};
	const repeatMode = () => {
		if (mode.repeat) {
			dispatch(actionTypes.setPlayMode({ repeat: false, loop: false, zen: false }));
		} else {
			dispatch(actionTypes.setPlayMode({ repeat: true, loop: true, zen: false }));
		}
	};
	const loopMode = () => {
		if (mode.loop) {
			dispatch(actionTypes.setPlayMode({ repeat: true, loop: false, zen: false }));
		} else {
			dispatch(actionTypes.setPlayMode({ repeat: false, loop: true, zen: false }));
		}
	};

	const zenMode = () => {
		if (!mode.zen) {
			dispatch(actionTypes.setPlayMode({ zen: true, loop: false, repeat: false }));
		} else {
			dispatch(actionTypes.setPlayMode({ zen: false, loop: false, repeat: false }));
		}
	};

	const changePlaylist = (id) => {
		dispatch(actionTypes.setCurrentIdx(id));
	};
	const toggleFullScreen = () => {
		setFullScreen(!fullScreen);
	};

	return (
		<React.Fragment>
			<audio ref={ audioRef } onTimeUpdate={ updateCurrentTime } onEnded={ onPlayEnd } onError={ onErr } />
			{ fullScreen ? (
				<FullPlayer
					themeColor={
						!_.isEmpty(currentSong) && palette[currentSong.al.id] ? (
							palette[currentSong.al.id].dark
						) : (
								style.bgColorDark
							)
					}
					playing={ playing }
					playList={ playList }
					changePlaylist={ changePlaylist }
					mode={ mode }
					currentIdx={ currentIdx }
					currentSong={ currentSong }
					boxAlbumsList={ boxAlbumsList }
					boxAlbumsId={ boxAlbumsId }
					currentTime={ currentTime }
					duration={ duration }
					percent={ percent }
					togglePlay={ togglePlay }
					prevAlbum={ prevAlbum }
					nextAlbum={ nextAlbum }
					playRepeat={ playRepeat }
					playPrev={ playPrev }
					playNext={ playNext }
					onPrecentChange={ onPrecentChange }
					shuffleMode={ shuffleMode }
					zenMode={ zenMode }
					loopMode={ loopMode }
					repeatMode={ repeatMode }
					toggleFullScreen={ toggleFullScreen }
				/>
			) : (
					<MiniPlayer
						playing={ playing }
						currentIdx={ currentIdx }
						currentSong={ currentSong }
						boxAlbumsList={ boxAlbumsList }
						boxAlbumsId={ boxAlbumsId }
						currentTime={ currentTime }
						duration={ duration }
						percent={ percent }
						togglePlay={ togglePlay }
						onPrecentChange={ onPrecentChange }
						toggleFullScreen={ toggleFullScreen }
					/>
				) }
		</React.Fragment>
	);
};

export default React.memo(Player);
