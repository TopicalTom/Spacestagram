import { FC, useEffect } from 'react';
import { apiSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';

// Components
import Page from '../../components/Page';
import Container from '../../components/ContentContainer';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

const Explore: FC = () => {
    const { fetchAPIImages } = useActions();
    const { data, isLoading } = useSelector(apiSelector);

    useEffect(() => {
        fetchAPIImages();
    }, []);

    return (
        <Page>
            <Feed 
                data={data}
                isLoading={isLoading}
                action={() => fetchAPIImages(data)}
            />
            <Sidebar 
                title="Daily Feed"
                action={() => fetchAPIImages()}>
                <Container 
                    title="About">
                    <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                </Container>
            </Sidebar>
        </Page>
    );
};

export default Explore;