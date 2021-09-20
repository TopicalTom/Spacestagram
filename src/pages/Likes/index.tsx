import { useEffect } from 'react';
import { likeSelector, authSelector } from '../../store/reducers';
import { fetchLikes } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Page from '../../components/Page';
import Container from '../../components/ContentContainer';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

const Likes = () => {
    const dispatch = useDispatch();
    const { data, isLoadingLikes } = useSelector(likeSelector);
    const { user } = useSelector(authSelector);

    const grabLikes = () => {
        if (user) {
            dispatch(fetchLikes(user.uid));
        };
    };

    useEffect(() => {
        grabLikes()
    }, [dispatch, user]);

    return (
        <Page>
            <Feed 
                data={data}
                isLoading={isLoadingLikes}
            />
            <Sidebar 
                title="Your Likes"
                action={user ? () => dispatch(fetchLikes(user.uid)) : undefined}>
                <Container 
                    title="About">
                    <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Likes;