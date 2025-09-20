import './css/style.css'

import Header from './components/Header'
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <main>
     <Header />
     <div className="content-main">
      <Aside />
      <Content />
     </div>
     <Footer />
    </main>
  )
}

export default App
