import apis from '../../http/apis'


export default {
    namespaced: true,
    state: {
        //独家放送
        exclusiveMusic: [],
        //最新音乐
        newMusic: [],
        //推荐mv
        mvMusic: [],
        //歌单详情
        details: []

    },
    mutations: {
        //独家放送
        setExclusiveMusic(state, data) {
            state.exclusiveMusic = data.result
        },
        //最新音乐
        setNewMusic(state, data) {
            state.newMusic = data.result
        },
        //推荐mv
        setMv(state, data) {
            state.mvMusic = data.result


        }




    },
    actions: {
        //独家放送
        async getExclusiveMusic(context) {
            const data = await apis.banner.getPersonList()
            if (data.code == 200) {
                context.commit('setExclusiveMusic', data)

            }
        },
        //最新音乐
        async getNewMusic(context) {
            const data = await apis.banner.getNewMusic()
            if (data.code == 200) {
                context.commit('setNewMusic', data)
            }
        },
        //推荐mv
        async getMv(context) {
            const data = await apis.banner.getMv()

            if (data.code == 200) {
                context.commit('setMv', data)
            }

        },
        //歌单详情
        async getMusicDetail(context, id) {
            const data = await apis.banner.getMusicDetails({ id })
            console.log(data, '333');

        }

    }
}