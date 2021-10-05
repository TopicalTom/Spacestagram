import firebase from '../../firebase';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { toast } from 'react-toastify';
import { 
    getFirestore, 
    doc, 
    setDoc,
    getDoc, 
    updateDoc, 
    arrayRemove, 
    arrayUnion, 
    FieldValue,
    query,
    where,
    collection, 
    getDocs
} from "firebase/firestore";
import { 
    setLike,
    setLikes,
    setLikedImages, 
    setUnlike,
    setCount,
    setLoadingLikes
} from '../reducers';
import { Image, User } from '../reducers';

const firestore = getFirestore(firebase);

export const fetchLikes = (id: string): AppThunk => async (dispatch: Dispatch) => {
    try {
        if (!id) { return };
        dispatch(setLoadingLikes(true));
        const docRef = doc(firestore, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(setLikes(docSnap.data().likes));
        }
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    }
};

export const fetchLikedImages = (user: User): AppThunk => async (dispatch: Dispatch) => {
    try {
        if (!user) { return };
        dispatch(setLoadingLikes(true));
        dispatch(setLikedImages([]));
        const collectionRef = collection(firestore, "images");
        const docQuery = query(collectionRef, where("likes", "array-contains", user));
        const querySnapshot = await getDocs(docQuery);
        if (querySnapshot) {
            let images: any[] = [];
            querySnapshot.forEach((doc) => {
                const likedImage = doc.data();
                images.push(likedImage);
            });
            dispatch(setLikedImages(images));
        };
    } catch (err) {
        console.log(err);
        // Toast for unable to update like
    } finally {
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    }
};

const updateImageLikes = async (user: User, imageRef: Image, action: FieldValue) => {
    try {
        const docRef = doc(firestore, "images", imageRef.date);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, {
                likes: action
            });
        } else {
            await setDoc(docRef, {
                ...imageRef,
                likes: [user]
            })
        }
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    };
};

const updateUserLikes = async (id: string, action: FieldValue) => {
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

export const toggleLike = (id: string, userRef: User, imageRef: Image, isLiked: boolean): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoadingLikes(true));
        // Manage liked photo in database based on current like status
        Promise.all([
            updateImageLikes(userRef, imageRef, !isLiked 
                ?   arrayUnion(userRef) 
                :   arrayRemove(userRef)
            ),
            updateUserLikes(id, !isLiked 
                ?   arrayUnion(imageRef.date) 
                :   arrayRemove(imageRef.date)
            )
        ])
    } catch (err) {
        console.log(err)
        //toast(err.toString());
    } finally {
        // Update UI based on database change
        if (!isLiked) {
            dispatch(setLike(imageRef.date));
            toast('Photo saved to "liked" collection');
        } else {
            dispatch(setUnlike(imageRef.date));
            toast('Photo removed from "liked" collection');
        }
        dispatch(setCount());
        dispatch(setLoadingLikes(false));
    };
};