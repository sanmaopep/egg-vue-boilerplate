import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

// import modules here
import faculty from './modules/faculty'

Vue.use(Vuex)

var debug = (process.env.NODE_ENV !== 'production')

export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        faculty,
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})