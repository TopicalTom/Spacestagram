import { combineReducers } from '@reduxjs/toolkit';
import { 
    apiReducer,
    likeReducer,
    authReducer 
} from './reducers';

const rootReducer = combineReducers({
    api: apiReducer,
    likes: likeReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export * as actionCreators from './actions';
export default rootReducer;