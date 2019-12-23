import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.type';
import { googleSignInSuccess, googleSignInFailure } from './user.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';
export function* signInWithGoogle() {
  try {
    //this user property is userAuth when using onAuthStateChanged observerble style
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure({ error }));
  }
}

export function* onGoolgeSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoolgeSignInStart)]);
}
