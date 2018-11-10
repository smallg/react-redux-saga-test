import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators'

function* getInitTodoList() {
    try {
        const res = yield axios.get('http://localhost:3002/list');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.error('Can not found resources!')
    }

}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitTodoList);
}

export default mySaga;