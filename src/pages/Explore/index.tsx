import { useEffect } from 'react';
import { imageSelector } from '../../store/reducers';
import { 
    fetchImages, 
    fetchNewImages, 
    fetchLikes 
} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Page from '../../components/Page';
import Container from '../../components/ContentContainer';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

const Explore = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector(imageSelector);

    useEffect(() => {
        dispatch(fetchImages());
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    }, [dispatch]);

    return (
        <Page>
            <Feed 
                data={data}
                action={() => dispatch(fetchNewImages(data))}
                isLoading={isLoading}
            />
            <Sidebar title="Explore">
                <Container 
                    title="About">
                    <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Explore;