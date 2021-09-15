import firebase from '../../firebase';
import { getFirestore, doc, getDoc, updateDoc, arrayRemove, arrayUnion, FieldValue } from "firebase/firestore";
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setLike,
    setLikes, 
    setUnlike,
    setCount,
    setUpdating
} from '../reducers/likeReducer';

const firestore = getFirestore(firebase);

export const fetchLikes = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        if (!id) { return };
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(setLikes(docSnap.data().likes));
        }
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    }
};

const updateStoredLikes = async (id: string, action: FieldValue) => {
    try {
        const docRef = doc(firestore, "users", id);
        await updateDoc(docRef, {
            likes: action
        });
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    }
};

export const toggleLike = (id: string, photoRef: string, isLiked: boolean): AppThunk => (dispatch: Dispatch) => {
    try {
        dispatch(setUpdating(true));
        if (!isLiked) {
            dispatch(setLike(photoRef));
            updateStoredLikes(id, arrayUnion(photoRef));
        } else {
            dispatch(setUnlike(photoRef));
            updateStoredLikes(id, arrayRemove(photoRef));
        }
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    } finally {
        dispatch(setCount());
        dispatch(setUpdating(false));
    };
};