import * as types from './mutation-types'

export const example = ({
    commit
}, product) => {
    if (product.inventory > 0) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    }
}

// 加载所有数据
export const loadAllData = ({
    commit
}) => {
    // 检查本地是否存储

    // 如果本地有，获取本地数据
    window.localStorage.getItem("savedData");

    // ajax获取数据
    commit(types.RECEIVE_ALL, undefined);
}

// 保存当前数据
export const saveData = ({
    commit
}) => {
    commit(types.SAVE_ALL);
}