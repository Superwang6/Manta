const workspaceModule = {
    state: {
        lastActiveItem: 0
    },
    mutations: {

    },
    actions: {
        changeIsActive(state: {lastActiveItem: number}, index: number) {
            state.lastActiveItem = index;
        }
    },
    getters: {

    }
}
export default workspaceModule;
