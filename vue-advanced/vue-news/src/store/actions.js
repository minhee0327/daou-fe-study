import {
	// fetchAskList,
	// fetchJobsList,
	// fetchNewsList,
	fetchItem,
	fetchUserInfo,
	fetchList,
} from '@/api';

export default {
	// FETCH_NEWS(context) {
	// 	return fetchNewsList()
	// 		.then(response => context.commit('SET_NEWS', response.data))
	// 		.catch(error => console.log(error));
	// },
	// // 비 구조화 할당 (destructuring)
	// FETCH_JOBS({ commit }) {
	// 	return fetchJobsList()
	// 		.then(({ data }) => commit('SET_JOBS', data))
	// 		.catch(error => console.log(error));
	// },
	// FETCH_ASKS({ commit }) {
	// 	return fetchAskList()
	// 		.then(({ data }) => commit('SET_ASKS', data))
	// 		.then(error => console.log(error));
	// },
	FETCH_USER({ commit }, name) {
		return fetchUserInfo(name)
			.then(({ data }) => commit('SET_USER', data))
			.catch(error => console.log(error));
	},
	FETCH_ITEM({ commit }, item) {
		return fetchItem(item)
			.then(({ data }) => commit('SET_ITEM', data))
			.catch(error => console.log(error));
	},
	FETCH_LIST({ commit }, pageName) {
		return fetchList(pageName)
			.then(({ data }) => commit('SET_LIST', data))
			.catch(error => console.log(error));
	},
};
