const navModule = {
    state: {
        lastActiveItem: 0
    },
    mutations: {
        changeIsActive(state: {lastActiveItem: number}, index: number) {
            state.lastActiveItem = index;
        }
    },
    actions: {},
    getters: {}
}
export default navModule;