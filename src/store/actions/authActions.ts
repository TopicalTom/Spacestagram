import firebase from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setAuthenticating, 
    setAuth,
    setAuthError
} from '../reducers/authReducer';

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);
const provider = new GoogleAuthProvider();

const createAccount = async (userID: string) => {
    try {
        const docRef = doc(firestore, 'users', userID);
        await setDoc(docRef, {
            likes: []
        })
    } catch (err) {
        console.log(err);
    };
};

const checkUserDatabase = async (userID: string) => {
    try {
        const docRef = doc(firestore, "users", userID);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) { 
            createAccount(userID);
        };
    } catch (err) {
        console.log(err);
    };
};

export const checkForStoredDetails = (): AppThunk => async (dispatch: Dispatch) => {
    const savedData = localStorage.getItem("user");
    if (savedData) {
        dispatch(setAuth(JSON.parse(savedData)));
    };
};

export const login = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setAuthenticating(true));
        // User is redirected to Google Sign in
        const result = await signInWithPopup(auth, provider);
        const user = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL
        };
        // Checks for pre-existing account
        await checkUserDatabase(user.uid);
        // Stores relevant Auth data
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setAuth(user));
    } catch (err) {
        dispatch(setAuthError('Unable to login'));
    } finally {
        dispatch(setAuthenticating(false));
    };
};

export const logout = (): AppThunk => (dispatch: Dispatch) => {
    try {
        dispatch(setAuthenticating(true));
        // Auth access is revoked
        localStorage.removeItem("user");
        dispatch(setAuth(null));
        auth.signOut();
    } catch (err) {
        dispatch(setAuthError('Unable to logout'));
    } finally {
        dispatch(setAuthenticating(false));
    };
};

/*
import firebase from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setAuthenticating, 
    setAuth,
    setAuthError
} from '../reducers/authReducer';

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);
const provider = new GoogleAuthProvider();

interface User {
    uid: string,
    displayName: string | null,
    photoURL: string | null,
    likes?: string[] | null
};

const createAccount = async (userID: string) => {
    try {
        const docRef = doc(firestore, 'users', userID);
        await setDoc(docRef, {
            likes: []
        })
    } catch (err) {
        console.log(err);
    };
};

const retrieveUserDetails = async (currentUser: User) => {
    const userID = currentUser.uid;

    try {
        const docRef = doc(firestore, "users", userID);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) { 
            await createAccount(userID);
            return {
                ...currentUser,
                likes: []
            }
        } else {
            return {
                ...currentUser,
                likes: docSnap.data().likes
            }
        }
    } catch (err) {
        console.log(err);
    };
};

export const login = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setAuthenticating(true));
        // User is redirected to Google Sign in
        const result = await signInWithPopup(auth, provider);
        const user = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL
        };
        localStorage.setItem("user", JSON.stringify(user));
        const stored = await retrieveUserDetails(user);
        dispatch(setAuth(stored));
    } catch (err) {
        dispatch(setAuthError('Test'));
    } finally {
        dispatch(setAuthenticating(false));
    };
};

export const logout = (): AppThunk => (dispatch: Dispatch) => {
    try {
        dispatch(setAuthenticating(true));
        // Auth access is revoked
        dispatch(setAuth(null));
        auth.signOut();
    } catch (err) {
        dispatch(setAuthError('Test'));
    } finally {
        dispatch(setAuthenticating(false));
    };
};

*/