import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView';
import AskView from '@/views/AskView';
import JobViews from '@/views/JobViews';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';
import createListView from '@/views/CreateListView';
import bus from '@/utils/bus';
import { store } from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			path: '/news',
			name: 'news',
			component: NewsView,
			// component: createListView('NewsView'),
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				store
					.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched');
						bus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			// component: createListView('AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobViews,
			// component: createListView('JobsView'),
		},
		{
			path: '/user',
			component: UserView,
		},
		{
			path: '/items',
			component: ItemView,
		},
		{
			path: '/user/:id',
			component: UserView,
		},
		{
			path: '/item/:id',
			component: ItemView,
		},
	],
});
