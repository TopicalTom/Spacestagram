import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { toast } from 'react-toastify';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    updateDoc, 
    arrayRemove, 
    arrayUnion, 
    FieldValue 
} from "firebase/firestore";
import { 
    setLike,
    setShorthandLikes,
    setLikes, 
    setUnlike,
    setCount,
    setLoadingLikes
} from '../reducers/likeReducer';

interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
};

const firestore = getFirestore(firebase);

export const fetchShorthandLikes = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        if (!id) { return };
        dispatch(setLoadingLikes(true));
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let shorthandLikes = docSnap.data().likes.map((
                item: { date: string; }
            ) => item.date); 
            console.log(shorthandLikes);
            dispatch(setShorthandLikes(shorthandLikes));
        }
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    } finally {
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    }
};

export const fetchLikes = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        if (!id) { return };
        dispatch(setLoadingLikes(true));
        dispatch(setLikes([]));
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(setLikes(docSnap.data().likes));
        }
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    } finally {
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    }
};

const updateStoredLikes = async (id: string, action: FieldValue) => {
    try {
        const docRef = doc(firestore, "users", id);
        await updateDoc(docRef, {
            likes: action
        });
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    }
};

export const toggleLike = (id: string, imageRef: Image, isLiked: boolean): AppThunk => (dispatch: Dispatch) => {
    try {
        // Manage liked photo in database based on current like status
        dispatch(setLoadingLikes(true));
        updateStoredLikes(id, !isLiked 
            ?   arrayUnion(imageRef) 
            :   arrayRemove(imageRef)
        );
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        // Update UI based on database change
        if (!isLiked) {
            dispatch(setLike(imageRef));
            toast('Photo saved to "liked" collection');
        } else {
            dispatch(setUnlike(imageRef));
            toast('Photo removed from "liked" collection');
        }
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    };
};

/*
import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { toast } from 'react-toastify';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    updateDoc, 
    arrayRemove, 
    arrayUnion, 
    FieldValue 
} from "firebase/firestore";
import { 
    setLike,
    setLikes, 
    setUnlike,
    setCount,
    setLoadingLikes
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
        console.log(err)
        //toast(err.toString());
    }
};

export const toggleLike = (id: string, photoRef: string, isLiked: boolean): AppThunk => (dispatch: Dispatch) => {
    try {
        // Manage liked photo in database based on current like status
        dispatch(setLoadingLikes(true));
        updateStoredLikes(id, !isLiked 
            ?   arrayUnion(photoRef) 
            :   arrayRemove(photoRef)
        );
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        // Update UI based on database change
        if (!isLiked) {
            dispatch(setLike(photoRef));
            toast('Photo saved to "liked" collection');
        } else {
            dispatch(setUnlike(photoRef));
            toast('Photo removed from "liked" collection');
        }
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    };
};

*/