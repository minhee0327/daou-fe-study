import { Mutations, MutationTypes } from "@/store/mutations";
import { RootState } from "@/store/state";
import { ActionContext } from "vuex";
import { fetchNews, NewsItem } from "@/api";

enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
  //모듈화되어있으면 첫번재 RootState 대신 여기에 모듈 state 를 넣어주면 될듯
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActionTypes.FETCH_NEWS](context: MyActionContext, payload?: NewsItem) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };

// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
//   NewsItem,
// } from "../api";

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then((response) => commit("SET_NEWS", response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then((response) => commit("SET_ASK", response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then((response) => commit("SET_JOBS", response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then((res) => commit("SET_USER", res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then((res) => commit("SET_LIST", res.data));
//   },
// };
