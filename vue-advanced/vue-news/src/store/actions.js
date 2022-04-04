import {
	fetchAskList,
	fetchItem,
	fetchJobsList,
	fetchNewsList,
	fetchUserInfo,
} from '@/api';

export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then(response => context.commit('SET_NEWS', response.data))
			.catch(error => console.log(error));
	},
	// 비 구조화 할당 (destructuring)
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => commit('SET_JOBS', data))
			.catch(error => console.log(error));
	},
	FETCH_ASKS({ commit }) {
		fetchAskList()
			.then(({ data }) => commit('SET_ASKS', data))
			.then(error => console.log(error));
	},
	FETCH_USER({ commit }, name) {
		fetchUserInfo(name)
			.then(({ data }) => commit('SET_USER', data))
			.catch(error => console.log(error));
	},
	FETCH_ITEM({ commit }, item) {
		fetchItem(item)
			.then(({ data }) => commit('SET_ITEM', data))
			.catch(error => console.log(error));
	},
};
