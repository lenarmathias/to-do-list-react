import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTaskHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTaskHandler);
}