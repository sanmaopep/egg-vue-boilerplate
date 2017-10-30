import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from '../plugins/logger'

// import modules here
import faculty from './modules/faculty'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        faculty,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})