// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
import { Actions } from "@/store/actions";
import { Getters } from "@/store/getters";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

//MyStore 라는 이름은 원하는대로;
//commit 만 제외한 이유?: commit 만 프로젝트 레벨에서 제외하고 직접 정의한 MyMutation 으로 정의
export type MyStore = Omit<
  Store<RootState>,
  "commit" | "dispatch" | "getters"
> &
  MyMutations &
  MyActions &
  MyGetters;
