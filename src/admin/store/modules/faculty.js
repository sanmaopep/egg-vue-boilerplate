import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    creativeSpaceNum: 0,
    incubatorNum: 0,
    startupParkNum: 0,
    spaces: []
}

const getters = {}

// actions
const actions = {
    // 确认设施数量
    confirmNum({
        commit,
        state
    }) {
        commit(types.FACULTY_NUM);
    },
    // 确认项目数量
    confirmProjectNum({
        commit,
        state
    }, spaceId) {
        commit(types.FACULTY_PROJ_NUM, {
            spaceId
        });
    },
    // 提交表单
    submit() {

    }
}

// mutations
const mutations = {
    // 确认设施数量
    [types.FACULTY_NUM](state) {
        state.spaces = []

        function addToSpaces(num, type) {
            for (let i = 0; i < num; i++) {
                state.spaces.push({
                    name: '',
                    type: type,
                    area: 0,
                    projectNum: 1,
                    projects: [{
                        name: '',
                        team: '',
                        teacher: ''
                    }]
                })
            }
        }
        addToSpaces(state.creativeSpaceNum, 'creativeSpace');
        addToSpaces(state.startupParkNum, 'startupPark');
        addToSpaces(state.incubatorNum, 'incubator');
    },
    // 确认项目数量
    [types.FACULTY_PROJ_NUM](state, {
        id
    }) {
        let len = state.spaces[id].projectNum;
        state.spaces[id].projects = [];
        for (let i = 0; i < len; i++) {
            state.spaces[id].projects.push({
                name: '',
                team: '',
                teacher: ''
            })
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}