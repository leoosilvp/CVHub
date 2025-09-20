import './css/style.css'

import Header from './components/Header'
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <Header />
     <div className="content">
      <Aside />
      <Content />
     </div>
     <Footer />
    </>
  )
}

export default App
