import './css/style.css';
import { UserProvider } from './context/UserContext';

import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <UserProvider>
      <main>
        <Header />
        <div className="content-main">
          <Aside />
          <Content />
        </div>
        <Footer />
      </main>
    </UserProvider>
  )
}

export default App;
