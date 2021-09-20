import { useEffect } from 'react';
import { imageSelector } from '../../store/reducers';
import { 
    fetchAPIImages, 
    fetchNewAPIImages, 
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
        dispatch(fetchAPIImages());
    }, [dispatch]);

    return (
        <Page>
            <Feed 
                data={data}
                action={() => dispatch(fetchNewAPIImages(data))}
                isLoading={isLoading}
            />
            <Sidebar 
                title="Daily Feed"
                action={() => dispatch(fetchAPIImages())}>
                <Container 
                    title="About">
                    <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Explore;