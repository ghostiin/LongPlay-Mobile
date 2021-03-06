import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actions as boxActionTypes } from '../../Playbox/store';
import { actions as playerActionTypes } from '../../Player/store';
import * as actionTypes from '../store/action';
import Modal from '../../../UI/Modal';
import Scroll from '../../../UI/Scroll';
import SolarSystemLoading from '../../../UI/SolarSystemLoading';
import { Wrapper, AlbumInfo, SongInfo, Content, Header } from './style';
import default200 from './default200.svg';

const AlbumDetail = ({ history }) => {
	const id = history.location.pathname.split('/').pop();
	const { newAlbumsList, searchAlbumsList, detailLoading } = useSelector((state) => state.albums);
	const dispatch = useDispatch();
	const { boxAlbumsList } = useSelector((state) => state.box);
	const albumDefault = {
		name: 'Oops!Cant find the album',
		picUrl: default200,
		artist: {
			name: 'Oops!Cant find the singer'
		}
	};
	let album;
	if (newAlbumsList[id]) {
		album = newAlbumsList[id];
	} else if (searchAlbumsList[id]) {
		album = searchAlbumsList[id];
	} else {
		album = albumDefault;
	}

	useEffect(() => {
		if (!album.songs || (album.songs && album.songs.length === 0)) dispatch(actionTypes.getSonglist(id));
	}, []);

	const renderInfo = () => {
		const show = !!boxAlbumsList[id];
		return (
			<AlbumInfo>
				<div className='cover'>
					<img src={ `${album.picUrl}?param=310x310` } alt={ album.name } width='80' height='80' />
				</div>
				<div>
					<div className='name'> { album.name }</div>
					<div className='singer'>
						<span>By </span>
						{ album.artist.name }
					</div>
					<div className='state'>
						<i className='iconfont' aria-hidden onClick={ () => dispatch(playerActionTypes.playNow(id)) }>
							&#xe9f9;
						</i>
						{ show ? (
							<i
								className='iconfont'
								onClick={ () => {
									dispatch(boxActionTypes.removeAlbumFromBox(id));
								} }
								aria-hidden='true'
							>
								&#xe9fe;
							</i>
						) : (
								<i
									className='iconfont'
									onClick={ () => {
										dispatch(boxActionTypes.addAlbumToBox(id));
									} }
									aria-hidden='true'
								>
									&#xea00;
								</i>
							) }
					</div>
				</div>
			</AlbumInfo>
		);
	};

	const renderSonglist = () => {
		return (
			<SongInfo>
				{ detailLoading ? (
					<SolarSystemLoading />
				) : (
						<React.Fragment>
							<div className='info'>
								{ album.songs && album.songs.length }
								<span> Songs</span>
							</div>
							<Scroll>
								<Content>
									{ album.songs &&
										album.songs.map((song, idx) => {
											return (
												<div className='item' key={ song.id }>
													<span>{ idx + 1 }. </span>
													{ song.name }
												</div>
											);
										}) }
								</Content>
							</Scroll>
						</React.Fragment>
					) }
			</SongInfo>
		);
	};
	// 直接传递函数会每次生成不一样的引用导致memo比较结果始终不同
	const handleBack = useCallback(() => {
		history.goBack();
	}, []);
	// to-do ondismiss err
	const renderCard = (width = '60vw') => {
		return (
			<Wrapper bgImg={ album ? `${album.picUrl}?param=310x310` : default200 } width={ width }>
				<Header>
					<div className='sub'>Album Detail</div>
					<div className='iconfont' aria-hidden onClick={ handleBack }>
						&#xe69e;
					</div>
				</Header>
				{ renderInfo() }
				{ renderSonglist() }
			</Wrapper>
		);
	};

	return <Modal onDismiss={ handleBack }>{ renderCard('90vw') }</Modal>;
};

AlbumDetail.propTypes = {
	history: PropTypes.shape({
		location: PropTypes.shape({
			pathname: PropTypes.string
		}),
		goBack: PropTypes.func
	}).isRequired
};

export default React.memo(AlbumDetail);
