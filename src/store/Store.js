// import FBase from '../firebase/FirebaseConnect'
// import axios from 'axios';
const redux = require('redux');
const qlcv = (state = {
    showForm: false,
    data: [],
    statusLoadData: true,
    dataEntity: {},
    isEdit: false,
}, action) => {
    switch (action.type) {
        case 'addData':
            return { ...state, data: [...state.data, ...action.data] }
        case 'loadData':
            return { ...state, statusLoadData: action.statusLoadData, data: action.data || state.data }
        case 'editShowForm':
            return { ...state, showForm: action.showForm || !state.showForm, isEdit: false  }
        case 'editEntity':
            return { ...state, dataEntity: action.data, showForm: true, isEdit: true }
        default:

            return state;
    }
}
// const allReducers = redux.combineReducers(note)
const store = redux.createStore(qlcv);
store.subscribe((state) => {
    console.log(store.getState());
})

export default store;