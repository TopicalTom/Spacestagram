import axios from 'axios';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setLoading, 
    setFetchSuccess,
    setFetchError
} from '../reducers/imagesReducer';

const ROOT_URL = 'https://api.nasa.gov/planetary/apod?';

interface Image {
    id: string,
    url: string,
    title: string,
    date: string,
    explanation: string,
};

const fetchFromAPI = async () => {
    try {
        const { data } = await axios.get(`${ROOT_URL}api_key=${process.env.REACT_APP_API_KEY}&count=10`);
        let images = data;
        return images;
    } catch (err) {
        console.log(err)
    }
};

export const fetchNewImages = (currentImages?: Image[]): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        const images = await fetchFromAPI();
        dispatch(setFetchSuccess([currentImages, images]));
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};

export const fetchImages = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        const images = await fetchFromAPI();
        dispatch(setFetchSuccess(images));
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};

/*
export const fetchImages = (currentImages?: Image[]): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        const images = fetchFromAPI();
        const { data } = await axios.get(`${ROOT_URL}api_key=${process.env.REACT_APP_API_KEY}&count=10`);
        let images = data;
        if (currentImages) {
            const newDataSet = [...currentImages, images]
            console.log('Exists');
            dispatch(setFetchSuccess(newDataSet));
        } else {
            console.log('Doesen');
            dispatch(setFetchSuccess(images));
        }
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};

*/