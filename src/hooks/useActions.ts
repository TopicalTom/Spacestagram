import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

export const useActions = () => {
    const dispatch = useDispatch();

    // Only runs when dispatch changes (will only run once)
    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    }, [dispatch]);
};