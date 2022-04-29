import {
	// fetchAskList,
	// fetchJobsList,
	// fetchNewsList,
	fetchItem,
	fetchUserInfo,
	fetchList,
	fetchNewsList,
	fetchAskList,
	fetchJobsList,
} from '@/api';

export default {
	// promise
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

	// async
	async FETCH_NEWS(context) {
		const response = await fetchNewsList();
		context.commit('SET_NEWS', response.data);
		return response;
	},
	async FETCH_ASKS(context) {
		const response = await fetchAskList();
		context.commit('SET_ASKS', response.data);
		return response;
	},
	async FETCH_JOBS(context) {
		const response = await fetchJobsList();
		context.commit('SET_JOBS', response.data);
		return response;
	},

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
