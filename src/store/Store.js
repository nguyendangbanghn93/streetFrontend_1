// import FBase from '../firebase/FirebaseConnect'
const redux = require('redux');
const qlcv = (state = {
    showForm: false,
    dataCôngViệc: [
        { tên: "Công việc 1", tìnhTrạng: 0 },
        { tên: "Công việc 2", tìnhTrạng: 1 },
        { tên: "Công việc 3", tìnhTrạng: 1 },
        { tên: "Công việc 4", tìnhTrạng: 1 },
        { tên: "Công việc 5", tìnhTrạng: 0 },
    ]
}, action) => {
    switch (action.type) {
        case 'editShowForm':
            console.log(action);
            return { ...state, showForm: action.showForm || !state.showForm }
        default:
            return state;
    }
}
// const allReducers = redux.combineReducers(note)
const store = redux.createStore(qlcv);
store.subscribe(() => {
})

export default store;