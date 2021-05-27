import apis from '../../http/apis'



export default {
    namespaced: true,
    state: {
        searchData: []


    },
    mutations: {
        setSearchData(state, data) {
            state.searchData = data.result.hots
           

        }



    },
    actions: {
        async getSearch(context) {
            const data = await apis.users.getSearch()
           
            if (data.code == 200) {
                context.commit('setSearchData', data)
            }
        }

    }
}