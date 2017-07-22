export type Store = {
  asyncReducers: {
    key: string,
    reducer: Object,
  },
  dispatch: Function,
  getState: Function,
  replaceReducer: Function,
  subscribe: Function,
}
