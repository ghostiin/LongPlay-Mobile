import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { actions as boxActionTypes } from './store';
import { actions as playerActionTypes } from '../Player/store';
import Scroll from '../../UI/Scroll';
import { Wrapper, GridItem, Content, Center } from './style';
import history from '../../history';

const Playbox = () => {
	const { boxAlbumsList, boxAlbumsId } = useSelector((state) => state.box);
	const dispatch = useDispatch();

	const playNow = (id) => {
		dispatch(playerActionTypes.playNow(id));
	};
	const removeItem = (id) => {
		dispatch(boxActionTypes.removeAlbumFromBox(id));
	};
	const renderList = (ids, list) => {
		return ids.map((e) => {
			const id = e.toString();
			const item = list[id].album;

			return (
				<GridItem key={ id }>
					<div className='cover' onClick={ () => playNow(id) } aria-hidden>
						<img src={ `${item.picUrl}?param=310x310` } alt={ item.name } width='80' height='80' />
					</div>
					<div className='right' onClick={ () => playNow(id) } aria-hidden>
						<p>{ item.name }</p>
						<p>
							<span>By </span>
							{ item.artist.name }
						</p>
					</div>
					<div>
						<i className='iconfont' onClick={ () => removeItem(id) } aria-hidden>
							&#xe699;
						</i>
					</div>
				</GridItem>
			);
		});
	};
	const back = () => {
		history.back();
	};
	return (
		<Wrapper>
			<div className='header'>
				<div>PlayBox</div>
				<div className='iconfont' onClick={ back } aria-hidden>
					&#xe69e;
				</div>
			</div>
			<Center>
				{
					boxAlbumsId.length ? null :
						(<React.Fragment>

							<div>
								NO ALBUM IN BOX
							</div>
							<div>
								♬---Tips---♬
							</div>
							<div>
								当<i className="iconfont">&#xe6ed;</i>Zen Mode开启时，
							</div>
							<div>
								会顺序循环播放playbox中的专辑。
							</div>
						</React.Fragment>

						)

				}
			</Center>
			<Scroll>
				<Content>{ renderList(boxAlbumsId, boxAlbumsList) }</Content>
			</Scroll>
		</Wrapper>
	);
};

export default React.memo(Playbox);
