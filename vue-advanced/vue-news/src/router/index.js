import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '@/views/AskView';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';
import createListView from '@/views/CreateListView';

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
			// component: NewsView,
			component: createListView('NewsView'),
		},
		{
			path: '/ask',
			name: 'ask',
			component: createListView('AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: createListView('JobsView'),
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
