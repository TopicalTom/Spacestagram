import axios from 'axios';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setLoading, 
    setFetchSuccess,
    setFetchError
} from '../reducers/imagesReducer';

const ROOT_URL = 'https://api.nasa.gov/planetary/apod?';

export const fetchImages = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.get(`${ROOT_URL}api_key=${process.env.REACT_APP_API_KEY}&count=10`);
        let images = data;
        dispatch(setFetchSuccess(images));
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};