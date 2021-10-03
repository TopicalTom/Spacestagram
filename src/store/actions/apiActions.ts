import axios from 'axios';
import { Dispatch } from 'redux';
import { AppThunk } from '../store';
import { 
    setLoading, 
    setAPIImages,
    setFetchError
} from '../reducers';
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

export const fetchAPIImages = (currentImages?: Image[]): AppThunk => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true));
        // Clears images on initial load or refresh
        if (!currentImages) {
            dispatch(setAPIImages([]));
        }
        const images = await fetchFromAPI();
        if (images) {
            // Appends or adds images array depending on existing images
            const imageArray = currentImages
                ?   [...currentImages, ...images] 
                :   images;
            dispatch(setAPIImages(imageArray));
        };
    } catch (err) {
        dispatch(setFetchError('There was an issue handling your request, please try again.'));
    } finally {
        dispatch(setLoading(false));
    };
};