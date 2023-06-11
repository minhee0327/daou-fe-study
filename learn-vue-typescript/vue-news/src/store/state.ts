import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[],
};

//rootState 이름을 편하게 (최상위의 state로 사용하면 됨)
type RootState = typeof state;

export { state, RootState };
