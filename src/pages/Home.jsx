import Header from '../components/Header';
import Content from '../components/Content';

const Home = () => {
    return (
        <main >
            <Header path={'Home'}/>
            <div className="content-main">
                <Content />
            </div>
        </main>
    )
}

export default Home
