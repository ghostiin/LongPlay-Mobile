import produce from 'immer';
import _ from 'lodash';
import { ADD_ALBUM_TO_BOX, REMOVE_ALBUM_FROM_BOX, SET_PALETTE } from './constants';
// import { mockboxAlbumsId, mockboxAlbumsList } from '../../../api/mockBox';

const defaultState = {
	boxAlbumsList: {},
	// boxAlbumsList: mockboxAlbumsList,
	boxAlbumsId: [],
	// boxAlbumsId: mockboxAlbumsId,
	palette: {}
};

const reducer = (state = defaultState, action) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case ADD_ALBUM_TO_BOX: {
				const { id } = action.payload.album;
				draftState.boxAlbumsId.push(id);
				draftState.boxAlbumsId = _.uniq(draftState.boxAlbumsId);
				draftState.boxAlbumsList[id] = action.payload;
				return draftState;
			}
			case REMOVE_ALBUM_FROM_BOX:
				draftState.boxAlbumsId = _.filter(draftState.boxAlbumsId, (n) => {
					// console.log(n, action.payload);
					return n.toString() !== action.payload;
				});
				delete draftState.boxAlbumsList[action.payload];
				return draftState;
			case SET_PALETTE:
				draftState.palette[action.payload.id] = action.payload.palette;
				return draftState;
			default:
				return draftState;
		}
	});

export default reducer;
