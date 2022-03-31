import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView';
import NewsView from '../views/NewsView';
import JobViews from '../views/JobViews';

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{
			path: '/news',
			component: NewsView,
		},
		{
			path: '/ask',
			component: AskView,
		},
		{
			path: '/jobs',
			component: JobViews,
		},
	],
});
