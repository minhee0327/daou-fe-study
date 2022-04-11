import Vuex from 'vuex';
import Vue from 'vue';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

//Vuex 는 플러그인이미로 사용을 위해 등록해야함
Vue.use(Vuex);

//상태관리
export const store = new Vuex.Store({
	//전역에서 사용될 state
	state: {
		news: [],
		jobs: [],
		asks: [],
		user: {},
		item: {},
	},
	getters: {
		fetchAsk(state) {
			return state.asks;
		},
		fetchedItem(state) {
			return state.item;
		},
	},
	//api 호출은 actions
	actions,
	mutations,
});
