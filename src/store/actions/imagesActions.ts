import axios from 'axios';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setLoading, 
    setFetchSuccess,
    setFetchError
} from '../reducers/imagesReducer';
import { Image } from '../reducers';

const API_URL = 'https://api.nasa.gov/planetary/apod?';

const fetchFromAPI = async () => {
    try {
        const { data } = await axios.get(`${API_URL}api_key=${process.env.REACT_APP_API_KEY}&count=20`);
        let images: Image[] = data;
        return images;
    } catch (err) {
        console.log(err)
    }
};

export const fetchNewAPIImages = (currentImages: Image[]): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        const images = await fetchFromAPI();
        if (images) {
            const newArray: Image[] = [...currentImages, ...images];
            dispatch(setFetchSuccess(newArray));
        };
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};

export const fetchAPIImages = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        dispatch(setFetchSuccess([]));
        const images = await fetchFromAPI();
        if (images) {
            dispatch(setFetchSuccess(images));
        };
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};