import firebase from '../../firebase';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setAuthenticating, 
    setAuth,
    setAuthError,
    setClearLikes 
} from '../reducers';

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
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(setAuth(user));
        }
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
        dispatch(setClearLikes());
        auth.signOut();
    } catch (err) {
        dispatch(setAuthError('Unable to logout'));
    } finally {
        dispatch(setAuthenticating(false));
    };
};