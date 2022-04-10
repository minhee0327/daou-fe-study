import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '@/views/AskView';
import NewsView from '@/views/NewsView';
import JobViews from '@/views/JobViews';
import UserView from '@/views/UserView';
import ItemView from '@/views/ItemView';

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
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobViews,
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
