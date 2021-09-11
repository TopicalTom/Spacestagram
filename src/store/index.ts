import { combineReducers } from '@reduxjs/toolkit';
import { 
    imagesReducer,
    //likeReducer,
    //authReducer 
} from './reducers';

const rootReducer = combineReducers({
    images: imagesReducer,
    //likes: likeReducer,
    //auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;