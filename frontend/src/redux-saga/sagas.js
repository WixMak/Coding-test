import { call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS} from "./reducer";

function* fetchTree() {

    //Saga setup fetch data from backend and the store data to Redux
    try {
        const data = yield call(
            () => fetch('http://localhost:8080/api/functions/getSortedTree')
                .then(response => response.json())
                .then(responseData => responseData.data)
        );
        yield put({ type: FETCH_DATA_SUCCESS,  payload:data });
    } catch (err) {
        yield put({ type: FETCH_DATA_FAILED });
    }

}

function* Saga() {
    yield takeEvery(FETCH_DATA, fetchTree);
}

export default Saga;