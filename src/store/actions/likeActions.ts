import firebase from '../../firebase';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    //setLike, 
    //setCount,
    setUpdating,
} from '../reducers/likeReducer';

// This will be reusable for determing status
/*
const determineLikeStatus = (id: string) => {
    if (id) {
        return true;
    } else {
        return false;
    }
}
*/

const firestore = getFirestore(firebase);
/*
export const fetchLikes = async (id: string) => {
    try {
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) { 
            await createAccount(userID);
            return {
                ...currentUser,
                likes: []
            }
        // Fetch details on who liked picture from Firebase
        // Update count
        // Toggle status based on if user has liked
    } catch (err) {
        console.log(err);
        // Toast for unable to retrieve likes
    }
};
export const fetchLikes = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setUpdating(true));
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) { 
            await createAccount(userID);
            return {
                ...currentUser,
                likes: []
            }
        // Fetch details on who liked picture from Firebase
        // Update count
        // Toggle status based on if user has liked
    } catch (err) {
        console.log(err);
        // Toast for unable to retrieve likes
    } finally {
        dispatch(setUpdating(false));
    };
};
*/
export const toggleLike = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setUpdating(true));
        // Compare id to ids of liked images from the user
        // Toggle status based on comparison
        // Push updated status to user / image
        // Update Count
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    } finally {
        dispatch(setUpdating(false));
    };
};