import { useEffect } from 'react';
import { likeSelector } from '../../store/reducers';
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

    useEffect(() => {
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    }, [dispatch]);

    return (
        <Page>
            <Feed 
                data={data}
                isLoading={isLoadingLikes}
            />
            <Sidebar 
                title="Your Likes"
                action={() => dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'))}>
                <Container 
                    title="About">
                    <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Likes;