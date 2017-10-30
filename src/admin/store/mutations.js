import * as types from './mutation-types'


export default {
    // 获取所有数据
    [types.RECEIVE_ALL](state, data) {
        // 更新数据到state
    },
    [types.SAVE_ALL](state, data) {
        window.localStorage.setItem("savedData", JSON.stringify(state));
    }
}