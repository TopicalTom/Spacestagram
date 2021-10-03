import { FC, useEffect } from 'react';
import { likeSelector, authSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';

// Components
import Page from '../../components/Page';
import Container from '../../components/ContentContainer';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

const Likes: FC = () => {
    const { fetchLikedImages } = useActions();
    const { data, isLoadingLikes } = useSelector(likeSelector);
    const { user } = useSelector(authSelector);

    useEffect(() => {
        if (user) { fetchLikedImages(user); };
    }, [user]);

    return (
        <Page>
            <Feed 
                data={data}
                isLoading={isLoadingLikes}
            />
            <Sidebar 
                title="Your Likes"
                action={user ? () => fetchLikedImages(user) : undefined}>
                <Container 
                    title="About">
                    <p>Keep track of the images or photographs of our universe that you have previously liked all in one place.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Likes;