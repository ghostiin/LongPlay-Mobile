import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import Scroll from '../../UI/Scroll';
import { Wrapper, GridContainer, GridItem, Caption, SearchBox, Center } from './style';
import SearchBar from '../../components/SearchBar';
import * as actionTypes from './store/action';
import { actions as boxActionTypes } from '../Playbox/store';
import { actions as playerActionTypes } from '../Player/store';
import defaultCover from './default-cover.svg';
import WaveLoading from '../../UI/WaveLoading';

function Albums({ route }) {
	const { newAlbumsList, newAlbumsId, searchAlbumsList, searchAlbumsId, searchLoading, enterLoading } = useSelector(
		(state) => state.albums
	);
	const { boxAlbumsList } = useSelector((state) => state.box);
	const dispatch = useDispatch();
	useEffect(
		() => {
			// 简单性能优化，减少发送http请求次数，不过这样无法实时获取新数据
			if (newAlbumsId.length === 0) {
				dispatch(actionTypes.getNewAlbumsList());
			}
		},
		[ newAlbumsId.length, dispatch ]
	);

	const [ query, setQuery ] = useState('');
	const handleQuery = (q) => {
		setQuery(q);
	};

	useEffect(
		() => {
			if (query.length) {
				dispatch(actionTypes.searchAlbums(query));
			}
		},
		[ query, dispatch ]
	);
	const playNow = (id) => {
		dispatch(playerActionTypes.playNow(id));
	};
	const add = (id) => {
		dispatch(boxActionTypes.addAlbumToBox(id));
	};
	const remove = (id) => {
		dispatch(boxActionTypes.removeAlbumFromBox(id));
	};
	const renderList = (ids, list) => {
		if (ids.length) {
			return ids.map((e) => {
				const id = e.toString();
				const item = list[id];
				const show = !!boxAlbumsList[id];
				return (
					<GridItem key={id}>
						<div className='cover'>
							<LazyLoad placeholder={<img src={defaultCover} alt='default' width='80' height='80' />}>
								<Link to={`/albums/${id.toString()}`}>
									<img src={`${item.picUrl}?param=310x310`} alt={item.name} width='80' height='80' />
								</Link>
							</LazyLoad>
						</div>
						<div className='info'>
							<p>
								<Link to={`/albums/${id.toString()}`}>{item.name}</Link>
							</p>
							<p>
								<span>By </span>
								{item.artist.name}
							</p>
						</div>
						<div className='control'>
							<i className='iconfont' onClick={() => playNow(id)} aria-hidden>
								&#xe9f9;
							</i>
							{show ? (
								<i className='iconfont' onClick={() => remove(id)} aria-hidden>
									&#xe9fe;
								</i>
							) : (
								<i className='iconfont' onClick={() => add(id)} aria-hidden>
									{' '}
									&#xea00;
								</i>
							)}
						</div>
					</GridItem>
				);
			});
		}

		return <Center>No result</Center>;
	};

	const renderTemplate = (caption, ids, list) => {
		return (
			<Fragment>
				<Caption>{caption}</Caption>
				<GridContainer>{renderList(ids, list)}</GridContainer>
			</Fragment>
		);
	};
	const renderNewAlbumsList = () => renderTemplate('THE NEWEST ALBUMS', newAlbumsId, newAlbumsList);
	const renderSearchResult = () => renderTemplate('ONLY FOR ALBUMS', searchAlbumsId, searchAlbumsList);

	return (
		<Wrapper>
			<Scroll onScroll={forceCheck}>
				<div>
					<SearchBox>
						<SearchBar handleQuery={handleQuery} />
					</SearchBox>
					{enterLoading && <WaveLoading />}
					{query.length ? searchLoading && <WaveLoading /> : null}

					{query.length === 0 ? (
						!enterLoading && renderNewAlbumsList()
					) : (
						!searchLoading && renderSearchResult()
					)}
				</div>
			</Scroll>
			{renderRoutes(route.routes)}
		</Wrapper>
	);
}

Albums.propTypes = {
	route: PropTypes.shape({
		routes: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string
			})
		)
	}).isRequired
};

export default React.memo(Albums);
