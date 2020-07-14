/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Vol from '../containers/Vol';
import About from '../containers/About';

const AlbumsComponent = lazy(() => import('../containers/Albums'));
const AlbumDetailComponent = lazy(() => import('../containers/Albums/AlbumDetail'));
const PlayboxComponent = lazy(() => import('../containers/Playbox'));

const SuspenseComponent = (Component) => (props) => {
	return (
		<Suspense fallback={null}>
			<Component {...props} />
		</Suspense>
	);
};

export default [
	{
		component: Home, // 公共组件home
		routes: [
			{
				path: '/playbox',
				component: SuspenseComponent(PlayboxComponent)
			},
			{
				path: '/about',
				component: About
			},
			{
				path: '/vol',
				component: Vol
			},
			{
				path: '/albums',
				component: SuspenseComponent(AlbumsComponent),
				routes: [
					{
						path: '/albums/:id',
						component: SuspenseComponent(AlbumDetailComponent)
					}
				]
			},
			{
				path: '/',
				exact: true,
				render: () => <Redirect to='/vol' />
			}
		]
	}
];
